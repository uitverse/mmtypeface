import { Footer } from '@components/Footer'
import { InfoCard } from '@components/InfoCard'
import { NavBar } from '@components/NavBar'
import { SEO } from '@components/SEO'
import { PREVIEWS } from '@lib/constants'
import { searchInput } from '@state/atoms'
import data from 'fonts.yaml'
import Fuse from 'fuse.js'
import { useAtom } from 'jotai'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

const IndexPage: NextPage = () => {
  const fuse = new Fuse(data, {
    threshold: 0.4,
    keys: ['family'],
  })
  const [fonts, setFonts] = useState(data)
  const [searchText] = useAtom(searchInput)
  const [preview] = useState(PREVIEWS.SENTENCE)

  useEffect(() => {
    if (searchText.trim().length === 0) {
      setFonts(data)
    } else {
      setFonts(fuse.search(searchText).map((x) => x.item))
    }
  }, [searchText])

  return (
    <main>
      <SEO />
      <NavBar index={0} />
      <div className="w-full p-4 md:pt-3 md:mx-auto md:max-w-4xl lg:max-w-screen-xl">
        <div className="flex flex-wrap -mx-2 -my-1 overflow-hidden">
          {fonts.map(({ family, author, fonts }) => (
            <InfoCard
              key={family}
              family={family}
              author={author}
              fonts={fonts}
              preview={preview}
            />
          ))}
        </div>
        <div className="h-8" />
        <Footer />
      </div>
    </main>
  )
}

export default IndexPage
