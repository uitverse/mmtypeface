import type { FontFamily } from '@lib/interfaces'
import Link from 'next/link'

export default function InfoCard({
  family,
  fonts,
  author,
  preview,
}: FontFamily & { preview: string }): JSX.Element {
  return (
    <div className="block w-full px-2 my-2 overflow-hidden lg:min-h-50 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <Link href={`/specimen/${family.replace(/\W/g, '+')}`}>
        <a className="block w-full h-full px-4 py-3 transition duration-300 ease-in-out border-2 border-solid rounded cursor-pointer border-gray-lighter hover:border-brand">
          <div className="flex flex-row items-center justify-between">
            <h2 className="font-medium leading-tight text-black xl:text-base">
              {family}
            </h2>
            <span className="px-2 font-mono text-xs rounded-full text-info-dark bg-info-light">
              {fonts.length} Styles
            </span>
          </div>
          <span className="text-sm leading-tight text-gray-darkest">
            {author}
          </span>
          <div
            className="my-3 text-2xl"
            style={{
              fontFamily: family,
            }}>
            {preview}
          </div>
        </a>
      </Link>
    </div>
  )
}