import Footer from "../footer/Footer";
import NavBar from "../nav/NavBar";
import Head from "next/head";

export default function Page({ children }) {
  return (
    <div id="app" className="flex flex-col min-h-screen">
      <Head>
        <title>theBashShell::bruno's piece of the internet</title>
      </Head>
      <NavBar />
      <main className="min-h-full">{children}</main>
      <Footer />
    </div>
  );
}
