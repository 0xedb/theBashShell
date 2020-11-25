import Document, { Html, Head, Main, NextScript } from "next/document";

class TheBashShellDocument extends Document {
  //   static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx)
  //     return { ...initialProps }
  //   }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/favicon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default TheBashShellDocument;
