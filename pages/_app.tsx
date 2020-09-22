import '@styles/tailwind.css'
import '@styles/globals.css'

import { Provider as JotaiRoot } from 'jotai'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <JotaiRoot>
      <Component {...pageProps} />
    </JotaiRoot>
  )
}
