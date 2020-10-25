import style from "./content.module.css";

export default function Content({ children }) {
  return <main className={style.content}>{children}</main>;
}
