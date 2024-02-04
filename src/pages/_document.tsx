import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="shortcut icon" href="/favicon.jpeg" />
        <meta property="og:image" content="/logo.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />  
      </body>
    </Html>
  )
}
