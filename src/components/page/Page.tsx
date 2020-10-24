import { func } from "prop-types";

import style from './page.module.css'

export default function Page({ children }) {
  return <div className={style.page}>{children}</div>;
}
