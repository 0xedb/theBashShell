import { Button, Divider } from "@geist-ui/react";
import NavBar from "../components/nav/Navbar";
import Page from "../components/page/Page";
import Head from "next/head";
import Footer from "../components/footer/Footer";
import Content from "../components/content/Content";

export default function App() {
  return (
    <Page>
      <Head>
        <title>Bruno Edoh: my piece of the web</title>
      </Head>  
      <NavBar /> 
      <Content>heyl</Content>
      <Footer />
    </Page>
  );
}
