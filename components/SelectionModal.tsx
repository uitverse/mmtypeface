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
  )
}
