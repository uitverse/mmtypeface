import Nav from '@components/nav'
import { PREVIEWS } from '@lib/constants'
import fontWeightToString from '@lib/font_weight_to_string'
import data from 'fonts.yaml'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'

interface SpecimenPageProps {
  slug: string
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function SpecimenPage({ slug }: SpecimenPageProps): JSX.Element {
  const [preview, ,] = useState(PREVIEWS.SENTENCE)

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
