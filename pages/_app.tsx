import '@styles/tailwind.css'

import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
