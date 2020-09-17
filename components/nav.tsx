import { searchInputState } from '@state/atoms'
import cn from 'classnames'
import Link from 'next/link'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

export default function Nav({ index }: { index: number }): JSX.Element {
  const [, setSearchText] = useRecoilState(searchInputState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  return (
    <div className="flex flex-col w-full">
      <nav className="shadow-border-bottom-gray">
        <div className="flex flex-row items-center justify-between w-full px-4 mx-auto md:max-w-4xl lg:max-w-screen-xl">
          <div className="flex items-center justify-start flex-1 flex-shrink-0">
            <Link href="/">
              <a>
                <h1 className="px-2 my-4 text-lg font-semibold text-white transition duration-200 ease-in-out transform rounded md:my-0 -rotate-3 bg-brand hover:scale-110 hover:rotate-0">
                  mmtypeface
                </h1>
              </a>
            </Link>
          </div>
          {index === 0 ? (
            <div className="flex-1 flex-shrink-0 hidden md:block">
              <label
                htmlFor="search"
                className="flex flex-row items-center px-1 py-2 my-4 transition duration-200 ease-in-out border-2 border-solid rounded my-2px -mt2px border-gray-lighter bg-gray-lightest focus-within:bg-white focus-within:border-brand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 mx-2 text-gray-darker">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  id="search"
                  className="w-full transition duration-200 ease-in-out bg-gray-lightest text-gray-darkest center focus:bg-white focus:outline-none"
                  placeholder="Search for Fonts"
                  onChange={onChange}
                />
              </label>
            </div>
          ) : null}
          <div className="flex items-center justify-end flex-1 flex-shrink-0">
            <Link href="/about">
              <a
                className={cn(
                  'transition duration-200 ease-in-out flex flex-row items-center px-3 py-6 border-b-2 border-t-2 border-solid focus:outline-none',
                  {
                    'border-transparent hover:border-brand text-gray-darkest':
                      index !== 1,
                    'border-brand text-brand': index === 1,
                  }
                )}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={cn('w-6 h-6 md:w-5 md:h-5 md:mr-2', {
                    'text-gray-darker': index !== 1,
                    'text-brand': index === 1,
                  })}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="hidden md:block">About</span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {index === 0 ? (
        <div className="block px-4 md:hidden">
          <label
            htmlFor="font_search"
            className="flex flex-row items-center px-1 py-2 mt-4 transition duration-200 ease-in-out border-2 border-solid rounded my-2px -mt2px border-gray-lighter bg-gray-lightest focus-within:bg-white focus-within:border-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 mx-2 text-gray-dark">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              id="font_search"
              name="font_search"
              className="w-full transition duration-200 ease-in-out bg-gray-lightest text-gray-darkest center focus:bg-white focus:outline-none"
              placeholder="Search for Fonts"
              onChange={onChange}
            />
          </label>
        </div>
      ) : null}
    </div>
  )
}
