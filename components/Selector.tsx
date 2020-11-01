import cn from 'classnames'

interface Props {
  value: boolean
  onClick: () => void
}

export const Selector: React.FC<Props> = ({ value, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-32 flex flex-row items-center justify-center px-2 py-2 md:py-1 font-medium transition duration-100 ease-in-out border-2 border-transparent border-solid rounded md:bg-transparent focus:outline-none',
        {
          'text-danger-dark hover:text-white hover:bg-danger border-danger': value,
          'text-cta-dark hover:text-white hover:bg-cta border-cta': !value,
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
      <span className="uppercase">{value ? 'Remove' : 'Select'}</span>
    </button>
  )
}
