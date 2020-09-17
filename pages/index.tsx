import Nav from '@components/nav'
import { PREVIEWS } from '@lib/constants'
import data from 'fonts.yaml'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage(): JSX.Element {
  const [preview, ,] = useState(PREVIEWS.SENTENCE)

  return (
    <>
      <Head>
        {data.map(({ family }) => (
          <link
            key={family}
            rel="stylesheet"
            type="text/css"
            href={`/api?family=${family.replace(/\W/g, '+')}`}
          />
        ))}
      </Head>
      <main className="font-san shadow-border-top-brand">
        <Nav index={0} />
        <div className="w-full p-4 md:pt-3 md:px-0 md:mx-auto md:max-w-4xl">
          <div className="grid grid-flow-row gap-3 md:grid-cols-3">
            {data.map(({ family, author, fonts }) => (
              <Link
                href={`/specimen/${family.replace(/\W/g, '+')}`}
                key={family}>
                <a>
                  <div className="w-full px-4 py-3 transition duration-200 ease-in-out border-2 border-solid rounded cursor-pointer hover:shadow-lg border-gray-lighter hover:border-brand">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="font-medium leading-tight text-black md:text-xs">
                        {family}
                      </h2>
                      <span className="px-2 text-xs rounded-full text-info-dark bg-info-light">
                        {fonts.length} styles
                      </span>
                    </div>
                    <span className="text-sm leading-tight text-gray-darkest">
                      {author}
                    </span>
                    <div
                      className="my-2 text-xl"
                      style={{
                        fontFamily: family,
                      }}>
                      {preview}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
