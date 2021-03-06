import { searchInput, selectedFonts } from '@state/atoms'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { animated, config as springConfig, useTransition } from 'react-spring'

import { SelectionModal } from './SelectionModal'

interface Props {
  index: number
}

export const NavBar: React.FC<Props> = ({ index }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [searchText, setSearchText] = useAtom(searchInput)
  const [fontSelection] = useAtom(selectedFonts)
  const transitions = useTransition(showModal, null, {
    config: springConfig.stiff,
    from: { opacity: 0, transform: `scale(0)` },
    enter: { opacity: 1, transform: `scale(1)` },
    leave: { opacity: 0, transform: `scale(0)` },
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  return (
    <>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div
            key={key}
            onDoubleClick={() => {
              setShowModal(false)
            }}
            className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full p-3 overflow-hidden bg-black bg-opacity-50 md:p-20"
            style={{
              // eslint-disable-next-line
              opacity: props.opacity,
            }}>
            <animated.div
              onClick={(e) => {
                e.stopPropagation()
              }}
              className="w-full p-5 bg-white rounded-lg md:max-w-screen-sm md:h-auto"
              style={props}>
              <SelectionModal
                onClose={() => {
                  setShowModal(false)
                }}
              />
            </animated.div>
          </animated.div>
        ) : null
      )}
      <div className="flex flex-col w-full shadow-border-top-brand">
        <nav className="shadow-border-bottom-gray">
          <div className="flex flex-row items-center justify-between w-full px-4 mx-auto md:max-w-4xl lg:max-w-screen-xl">
            <div className="flex items-center justify-start flex-1 flex-shrink-0 py-6">
              <Link href="/">
                <a>
                  <h1 className="block px-2 text-xl font-bold text-white transition duration-300 ease-in-out transform rounded md:my-0 -rotate-3 bg-brand hover:scale-110 hover:rotate-0">
                    mmtypeface
                  </h1>
                </a>
              </Link>
            </div>
            {index === 0 ? (
              <div className="flex-1 flex-shrink-0 hidden md:block">
                <label
                  htmlFor="search"
                  className="flex flex-row items-center p-1 my-4 transition duration-300 ease-in-out border-2 border-solid rounded my-2px -mt2px border-gray-lighter bg-gray-lightest focus-within:bg-white focus-within:border-brand">
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
                    className="w-full transition duration-300 ease-in-out bg-gray-lightest text-gray-darkest center focus:bg-white focus:outline-none"
                    placeholder="Search for Fonts"
                    onChange={onChange}
                    value={searchText}
                  />
                </label>
              </div>
            ) : null}
            <div className="flex items-center justify-end flex-1 flex-shrink-0">
              <button
                className="focus:outline-none"
                onClick={() => {
                  setShowModal(true)
                }}>
                {fontSelection.length === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-8 h-8 text-brand">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
        {index === 0 ? (
          <div className="block px-4 md:hidden">
            <label
              htmlFor="font_search"
              className="flex flex-row items-center px-1 py-2 mt-4 transition duration-300 ease-in-out border-2 border-solid rounded my-2px -mt2px border-gray-lighter bg-gray-lightest focus-within:bg-white focus-within:border-brand">
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
                className="w-full transition duration-300 ease-in-out bg-gray-lightest text-gray-darkest center focus:bg-white focus:outline-none"
                placeholder="Search for Fonts"
                onChange={onChange}
                value={searchText}
              />
            </label>
          </div>
        ) : null}
      </div>
    </>
  )
}
