import Footer from '@components/footer'
import GlyphsTable from '@components/glyphs_table'
import Nav from '@components/nav'
import Selector from '@components/selector'
import { PREVIEWS } from '@lib/constants'
import fontWeightToString from '@lib/helpers/font_weight_to_string'
import { Font, FontFamily } from '@lib/interfaces'
import { fontSelectionState } from '@state/atoms'
import fonts from 'fonts.yaml'
import produce from 'immer'
import { useAtom } from 'jotai'
import capitalize from 'lodash/capitalize'
import concat from 'lodash/concat'
import filter from 'lodash/filter'
import find from 'lodash/find'
import some from 'lodash/some'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import { animated, config as springConfig, useSpring } from 'react-spring'

interface SpecimenPageProps {
  data: FontFamily<0> | null
}

export default function SpecimenPage({ data }: SpecimenPageProps): JSX.Element {
  const [preview, ,] = useState(PREVIEWS.SENTENCE)
  const [fontSelection, setFontSelection] = useAtom(fontSelectionState)
  const animation = useSpring({
    config: springConfig.stiff,
    opacity: 1,
    x: 0,
    from: {
      opacity: 0,
      x: 20,
    },
  })

  if (!data) return <div>404</div>

  const familyInSelection = useMemo(
    () => find(fontSelection, (x) => x.family === data.family),
    [data, fontSelection]
  )

  const selectFont = (font: Font) => {
    if (!!familyInSelection && some(familyInSelection.fonts, font)) {
      setFontSelection(
        produce(fontSelection, (draft) => {
          const newFonts = filter(
            familyInSelection.fonts,
            (x) => x.style !== font.style || x.weight !== font.weight
          )

          return filter(
            concat(
              filter(draft, (x) => x.family !== data.family),
              { family: data.family, fonts: newFonts }
            ),
            (x) => x.fonts.length !== 0
          )
        })
      )
    } else {
      setFontSelection(
        produce(fontSelection, (draft) => {
          if (!familyInSelection) {
            draft.push({ family: data.family, fonts: [font] })
          } else {
            return concat(
              filter(draft, (x) => x.family !== data.family),
              {
                family: data.family,
                fonts: concat(familyInSelection.fonts, font),
              }
            )
          }
        })
      )
    }
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href={`/api?family=${data.family.replace(/\s/g, '+')}&display=block`}
        />
      </Head>
      <main>
        <Nav index={2} />
        <div className="w-full p-4 md:pt-3 md:mx-auto md:max-w-4xl lg:max-w-screen-xl">
          <div className="my-5">
            <h2 className="text-3xl font-bold leading-tight tracking-wide text-black">
              {data.family}
            </h2>
            <span className="text-gray-darkest">By {data.author}</span>
          </div>
          <div id="styles">
            {data.fonts.map((font) => (
              <div
                key={`${data.family}_${font.weight}_${font.style}`}
                className="flex flex-col py-5 border-b-2 border-solid border-gray-lighter">
                <div className="flex flex-col md:items-center md:justify-between md:flex-row">
                  <div className="flex flex-col mb-5 md:mb-0">
                    <span className="mb-3 text-gray-darker">
                      {fontWeightToString(font.weight) +
                        ' ' +
                        capitalize(font.style)}
                    </span>
                    <animated.div
                      style={{
                        ...animation,
                        transform: animation.x.interpolate(
                          (x) => `translate3d(0,${x}px,0)`
                        ),
                      }}>
                      <span
                        className="text-2xl text-black"
                        style={{
                          fontFamily: data.family,
                          fontWeight: parseInt(font.weight),
                          fontStyle: font.style,
                        }}>
                        {preview}
                      </span>
                    </animated.div>
                  </div>
                  <Selector
                    value={
                      !!familyInSelection && some(familyInSelection.fonts, font)
                    }
                    onClick={() => {
                      selectFont(font)
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div id="glyphs">
            <h3 className="my-5 text-2xl font-semibold">Glyphs</h3>
            <GlyphsTable fontFamily={data.family} glyphs={PREVIEWS.GLYPHS} />
          </div>
          <div className="h-8" />
          <Footer />
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: fonts.map(({ family }) => ({
      params: { slug: family.replace(/\s/g, '+') },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<SpecimenPageProps> = async ({
  params,
}) => {
  try {
    return {
      props: {
        data:
          find(
            fonts,
            (x) => x.family === (params?.slug as string).replace(/\+/g, ' ')
          ) ?? null,
      },
    }
  } catch (e) {
    console.error(e)

    return {
      props: {
        data: null,
      },
    }
  }
}
