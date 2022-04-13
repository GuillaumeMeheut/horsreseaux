import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          {/* Metas */}
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta name="author" content="" />

          {/* Share */}
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
