import React from "react";
import style from "../css/page.module.css";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Page({ children }) {
  return (
    <div id="app" className={style.page}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
