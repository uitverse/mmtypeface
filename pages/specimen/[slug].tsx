import Nav from '@components/nav'
import Selector from '@components/selector'
import { PREVIEWS } from '@lib/constants'
import fontWeightToString from '@lib/helpers/font_weight_to_string'
import { fontSelectionState } from '@state/atoms'
import data from 'fonts.yaml'
import produce from 'immer'
import concat from 'lodash/concat'
import filter from 'lodash/filter'
import find from 'lodash/find'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import { useRecoilState } from 'recoil'

interface SpecimenPageProps {
  slug: string
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function SpecimenPage({ slug }: SpecimenPageProps): JSX.Element {
  const [preview, ,] = useState(PREVIEWS.SENTENCE)
  const [fontSelection, setFontSelection] = useRecoilState(fontSelectionState)
  const familyInSelection = useMemo(
    () => find(fontSelection, (x) => x.family === slug),
    [slug, fontSelection]
  )

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href={`/api?family=${slug.replace(/\W/g, '+')}&display=block`}
        />
      </Head>
      <main className="font-san shadow-border-top-brand">
        <Nav index={2} />
        <div className="w-full p-4 md:pt-3 md:mx-auto md:max-w-4xl lg:max-w-screen-xl">
          {data
            .find(({ family }) => family === slug)
            ?.fonts.map((font) => (
              <div
                key={`${slug}_${font.weight}_${font.style}`}
                className="flex flex-col py-5 border-b-2 border-solid border-gray-lighter">
                <div className="flex flex-col md:items-center md:justify-between md:flex-row">
                  <div className="flex flex-col mb-5 md:mb-0">
                    <span className="text-sm text-gray-darker">
                      {fontWeightToString(font.weight) +
                        ' ' +
                        capitalize(font.style)}
                    </span>
                    <span
                      className="text-2xl"
                      style={{
                        fontFamily: slug,
                        fontWeight: parseInt(font.weight),
                        fontStyle: font.style,
                      }}>
                      {preview}
                    </span>
                  </div>
                  <Selector
                    value={
                      !!familyInSelection &&
                      familyInSelection.fonts.includes(font)
                    }
                    onClick={() => {
                      if (
                        !!familyInSelection &&
                        familyInSelection.fonts.includes(font)
                      ) {
                        setFontSelection(
                          produce(fontSelection, () => {
                            const newFonts = filter(
                              familyInSelection.fonts,
                              (x) => x !== font
                            )

                            return concat(
                              filter(fontSelection, (x) => x.family !== slug),
                              { family: slug, fonts: newFonts }
                            )
                          })
                        )
                      } else {
                        setFontSelection(
                          produce(fontSelection, (draft) => {
                            if (!familyInSelection) {
                              draft.push({ family: slug, fonts: [font] })
                            } else {
                              return concat(
                                filter(draft, (x) => x.family !== slug),
                                {
                                  family: slug,
                                  fonts: concat(familyInSelection.fonts, font),
                                }
                              )
                            }
                          })
                        )
                      }
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: data.map(({ family }) => ({
      params: { slug: family.replace(/\W/g, '+') },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<SpecimenPageProps> = async ({
  params,
}) => {
  return {
    props: {
      slug: (params?.slug as string).replace(/\W/g, ' '),
    },
  }
}
