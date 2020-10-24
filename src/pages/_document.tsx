import { GeistProvider, CssBaseline } from "@geist-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <GeistProvider>
            <CssBaseline />
            <Main />
            <NextScript />
          </GeistProvider>
        </body> 
      </Html>
    );
  }
}

export default MyDocument;
