import Nav from '@components/nav'
import type { FontFamily } from '@lib/decode.interface'
import data from 'fonts.yaml'
import { useState } from 'react'

function* makeData(): Generator<FontFamily<0>> {
  for (let i = 0; i < 11; i++) {
    yield data[0]
  }
}

export default function Home(): JSX.Element {
  const [preview, ,] = useState(
    'နယူတန်သည် အိမ်မှာနေစဉ်အတွင်း သင်္ချာဘာသာရပ်ကို မပြတ်လေ့လာနေခဲ့သည်။'
  )

  return (
    <main className="font-san shadow-border-top-brand">
      <Nav index={0} />
      <div className="w-full p-4 md:pt-3 md:px-0 md:mx-auto md:max-w-4xl">
        <div className="grid grid-flow-row gap-3 md:grid-cols-3">
          {Array.from(makeData()).map(({ family, author }) => (
            <div
              key={family}
              className="w-full px-4 py-3 transition duration-200 ease-in-out border-2 border-solid rounded cursor-pointer hover:shadow-lg border-gray-lighter hover:border-brand">
              <h2 className="font-medium leading-tight text-black md:text-sm">
                {family}
              </h2>
              <span className="text-sm leading-tight text-gray-darkest">
                {author}
              </span>
              <div className="my-2 text-xl">{preview}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
