import { TabButton } from '@components/TabButton'
import { selectedCodeType } from '@state/atoms'
import { useAtom } from 'jotai'

export const SelectionModal: React.FC = () => {
  const [codeType] = useAtom(selectedCodeType)

  return (
    <>
      <h1 className="text-xl font-bold leading-tight">Selected Families</h1>
      <div className="flex items-center py-3">
        <TabButton>{'<link>'}</TabButton>
        <TabButton>{'@import'}</TabButton>
      </div>
    </>
  )
}
