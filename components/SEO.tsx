import Head from 'next/head'

export const SEO: React.FC = () => {
  const data = {
    title: 'MMTYPEFACE',
    url: 'https://mmtypeface.vercel.app',
    description: 'Burmese Fonts for the Web',
    cover: 'https://mmtypeface.vercel.app/cover.png',
  }

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{data.title}</title>
      <meta name="title" content={data.title} />
      <meta name="description" content={data.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.url} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.cover} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={data.url} />
      <meta property="twitter:title" content={data.title} />
      <meta property="twitter:description" content={data.description} />
      <meta property="twitter:image" content={data.cover} />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  )
}
