import { memo } from "react";
import style from "./navbar.module.css";

export default memo(function NavBar() {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.nav__item}>
          <span>{`bru <- no`}</span>
        </div>
        <div className={style.nav__item}>two</div>
      </nav>
    </>
  );
});
