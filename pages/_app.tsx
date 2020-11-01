import '@styles/tailwind.css'
import '@styles/globals.css'

import { Provider as JotaiRoot } from 'jotai'
import { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <JotaiRoot>
      <Component {...pageProps} />
    </JotaiRoot>
  )
}

export default App
