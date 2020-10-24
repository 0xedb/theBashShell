import type { AppProps } from "next/app";

function TheBashShellApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default TheBashShellApp;
