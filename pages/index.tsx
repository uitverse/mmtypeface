import InfoCard from '@components/info_card'
import Nav from '@components/nav'
import { PREVIEWS } from '@lib/constants'
import { searchInputState } from '@state/atoms'
import data from 'fonts.yaml'
import Fuse from 'fuse.js'
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
    <main>
      <Nav index={0} />
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
      </div>
    </main>
  )
}
