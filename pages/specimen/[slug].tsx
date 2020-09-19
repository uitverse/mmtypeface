import Nav from '@components/nav'
import Selector from '@components/selector'
import { PREVIEWS } from '@lib/constants'
import fontWeightToString from '@lib/helpers/font_weight_to_string'
import { Font, FontFamily } from '@lib/interfaces'
import { fontSelectionState } from '@state/atoms'
import fonts from 'fonts.yaml'
import produce from 'immer'
import capitalize from 'lodash/capitalize'
import concat from 'lodash/concat'
import filter from 'lodash/filter'
import find from 'lodash/find'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { useRecoilState } from 'recoil'

interface SpecimenPageProps {
  data: FontFamily<0> | null
}

export default function SpecimenPage({ data }: SpecimenPageProps): JSX.Element {
  const [preview, ,] = useState(PREVIEWS.SENTENCE)
  const [fontSelection, setFontSelection] = useRecoilState(fontSelectionState)
  const animation = useSpring({
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
    if (!!familyInSelection && familyInSelection.fonts.includes(font)) {
      setFontSelection(
        produce(fontSelection, () => {
          const newFonts = filter(familyInSelection.fonts, (x) => x !== font)

          return concat(
            filter(fontSelection, (x) => x.family !== data.family),
            { family: data.family, fonts: newFonts }
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
      <main className="font-san shadow-border-top-brand">
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
                    <span className="mb-3 text-sm text-gray-darker">
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
                      !!familyInSelection &&
                      familyInSelection.fonts.includes(font)
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
            <div
              className="border-t-2 border-l-2 border-solid border-gray-light"
              style={{
                fontFamily: data.family,
              }}>
              <div className="grid grid-cols-auto">
                {PREVIEWS.GLYPHS.split('').map((a) => (
                  <div
                    key={a}
                    className="box-content flex items-center justify-center w-10 h-10 overflow-hidden border-b-2 border-r-2 border-solid border-gray">
                    <span className="text-lg text-black">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
