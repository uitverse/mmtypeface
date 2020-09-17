import '@styles/tailwind.css'

import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
