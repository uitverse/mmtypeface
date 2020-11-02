import { CodeType } from '@lib/constants'
import { generateCode } from '@lib/helpers/generateCode'
import {
  encodedSelectedFonts,
  selectedCodeType,
  selectedFonts,
} from '@state/atoms'
import { useAtom } from 'jotai'

interface Props {
  onClose: () => void
}

export const SelectionModal: React.FC<Props> = ({ onClose }) => {
  const [codeType, setCodeType] = useAtom(selectedCodeType)
  const [encodedSelection] = useAtom(encodedSelectedFonts)
  const [fontSelection] = useAtom(selectedFonts)

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold leading-tight">Selected Families</h1>
        <button
          className="p-2 rounded-full hover:bg-gray-light"
          onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="h-5" />
      {fontSelection.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <div className="h-5" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-10 h-10">
            <path
              fillRule="evenodd"
              d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
              clipRule="evenodd"
            />
          </svg>
          <div className="h-5" />
          <span>Looks like you haven&apos;t selected a font yet.</span>
          <div className="h-5" />
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio"
                  onChange={() => {
                    setCodeType(CodeType.html)
                  }}
                  checked={codeType === CodeType.html}
                />
                <span className="ml-2 font-mono select-none">{'<link>'}</span>
              </label>
            </div>
            <div className="w-5" />
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio"
                  onChange={() => {
                    setCodeType(CodeType.css)
                  }}
                  checked={codeType === CodeType.css}
                />
                <span className="ml-2 font-mono select-none">{'@import'}</span>
              </label>
            </div>
          </div>
          <div className="h-5" />
          <div className="p-4 rounded bg-gray-lighter">
            <code className="break-words">
              {generateCode(
                encodedSelection,
                codeType === CodeType.html ? 'html' : 'css'
              )}
            </code>
          </div>
          <div className="h-5" />
          CSS rules to specify families
          <div className="h-5" />
          <div className="p-4 rounded bg-gray-lighter">
            {fontSelection.map((ff) => (
              <code className="block break-words" key={ff.family}>
                {`font-family: ${ff.family}, sans-serif;`}
              </code>
            ))}
          </div>
        </>
      )}
    </>
  )
}
