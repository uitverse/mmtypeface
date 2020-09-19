import cn from 'classnames'

export default function Selector({
  value,
  onClick,
}: {
  value: boolean
  onClick: () => void
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-32 flex flex-row items-center justify-center px-3 py-2 font-medium transition duration-300 ease-in-out border-2 border-transparent border-solid rounded md:bg-transparent focus:outline-none',
        {
          'text-danger-dark hover:bg-danger-light focus:border-danger bg-danger-light': value,
          'text-info-dark hover:bg-info-light focus:border-info bg-info-light': !value,
        }
      )}>
      {value ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 mr-1">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 12H4"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 mr-1">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      )}
      {value ? 'Remove' : 'Select'}
    </button>
  )
}
