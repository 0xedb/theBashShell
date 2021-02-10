import React from "react";
import style from "../css/nav.module.css";
import { THEME_URL, useDarkMode } from "../hooks/useTheme";

export default function Nav() {
  const [darkMode, setDarkMode] = useDarkMode();
  console.log("in app", darkMode);
  React.useEffect(() => {}, []);

  const themeHandler = React.useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  return (
    <nav className={style.nav}>
      <div className={`content ${style.content}`}>
        <div>logo</div>
        <div className={style.theme}>
          <div>nav</div>
          <div onClick={themeHandler}>
            <img src={darkMode ? THEME_URL.light : THEME_URL.dark} />
          </div>
        </div>
      </div>
    </nav>
  );
}
