import Nav from '@components/nav'
import { PREVIEWS } from '@lib/constants'
import { searchInputState } from '@state/atoms'
import data from 'fonts.yaml'
import Fuse from 'fuse.js'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

export default function HomePage(): JSX.Element {
  const fuse = new Fuse(data, {
    threshold: 0.4,
    keys: ['family'],
  })
  const [preview, ,] = useState(PREVIEWS.SENTENCE)
  const [fonts, setFonts] = useState(data)
  const searchText = useRecoilValue(searchInputState)

  useEffect(() => {
    if (searchText.trim().length === 0) {
      setFonts(data)
    } else {
      setFonts(fuse.search(searchText).map((x) => x.item))
    }
  }, [searchText])

  return (
    <>
      <Head>
        {fonts.map(({ family }) => (
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
        <div className="w-full p-4 md:pt-3 md:mx-auto md:max-w-4xl">
          <div className="flex flex-wrap -mx-2 overflow-hidden">
            {fonts.map(({ family, author, fonts }) => (
              <Link
                href={`/specimen/${family.replace(/\W/g, '+')}`}
                key={family}>
                <a className="block w-full px-2 my-2 overflow-hidden lg:min-h-50 md:w-1/2 lg:w-1/3">
                  <div className="w-full h-full px-4 py-3 transition duration-200 ease-in-out border-2 border-solid rounded cursor-pointer hover:shadow-lg border-gray-lighter hover:border-brand">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="font-medium leading-tight text-black md:text-sm">
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
