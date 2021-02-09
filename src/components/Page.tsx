import React from "react";
import style from "../css/page.module.css";

export default function Page({ children }) {
  return (
    <div id="app" className={style.page}>
      {children}
    </div>
  );
}
