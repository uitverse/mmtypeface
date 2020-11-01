export const TabButton: React.FC = ({ children }) => {
  return (
    <button className="px-3 py-1 mr-3 font-mono font-bold bg-opacity-25 rounded bg-info text-info-dark">
      {children}
    </button>
  )
}

export default TabButton
