import cn from 'classnames'
import Link from 'next/link'

export default function Nav({ index }: { index: number }): JSX.Element {
  return (
    <nav className="shadow-border-bottom-gray">
      <div className="flex flex-row items-center justify-between w-full max-w-4xl mx-auto">
        <div className="flex items-center justify-start flex-1 flex-shrink-0">
          <Link href="/">
            <a>
              <h1 className="px-2 font-semibold text-white transition duration-200 ease-in-out transform rounded -rotate-3 bg-brand hover:scale-110 hover:rotate-0">
                mmtypeface
              </h1>
            </a>
          </Link>
        </div>
        <div className="flex-1 flex-shrink-0">
          <label
            htmlFor="search"
            className="flex flex-row items-center p-1 my-2 transition duration-200 ease-in-out border-2 border-solid rounded my-2px -mt2px border-gray-lighter bg-gray-lightest focus-within:bg-white focus-within:border-brand">
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
              className="w-full text-sm transition duration-200 ease-in-out bg-gray-lightest text-gray-darkest center focus:bg-white focus:outline-none"
              placeholder="Search for Fonts"
            />
          </label>
        </div>
        <div className="flex items-center justify-end flex-1 flex-shrink-0">
          <Link href="/about">
            <a
              className={cn(
                'flex flex-row items-center px-2 py-3 text-sm border-b-2  border-solid focus:outline-none text-gray-darkest',
                {
                  'border-transparent hover:border-brand': index !== 1,
                  'border-brand': index == 1,
                }
              )}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2 text-gray-darker">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}