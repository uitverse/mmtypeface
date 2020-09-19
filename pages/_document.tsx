import fonts from 'fonts.yaml'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#d63447" />
          {fonts.map(({ family }) => (
            <link
              key={family}
              rel="stylesheet"
              type="text/css"
              href={`/api?family=${family.replace(/\s/g, '+')}&display=block`}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
