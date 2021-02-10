import React from "react";
import { THEME_COLORS } from "../util/theme";

export type THEME = "light" | "dark";

export const THEME_URL = {
  light: "https://api.iconify.design/noto:sun-with-face.svg?width=24",
  dark: "https://api.iconify.design/noto:new-moon-face.svg?width=24",
};
export const THEME_KEY: string = "__useDarkMode";

type DarkMode = () => boolean;

const isCurrentThemeDarkMode: DarkMode = () => {
  // look in localstorage
  const theme: string = self.localStorage.getItem(THEME_KEY);

  if (theme) return true;
  // use mediaquery
  const query: string = `(prefers-color-scheme: dark)`;

  if (self.matchMedia(query).matches) return true;
  return false;
};

type DarkModeHook = () => [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

export const useDarkMode: DarkModeHook = () => {
  const [theme, setTheme] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTheme(isCurrentThemeDarkMode());
  }, []);

  React.useEffect(() => {
    // change color scheme
    const scheme: THEME = theme ? "dark" : "light";
    const colors = THEME_COLORS[scheme];

    let frame;

    // change properties
    for (const i in colors) {
      frame = requestAnimationFrame(() => {
        document.body.style.setProperty(`--${i}`, colors[i]);
      });
    }

    // empty string translates to false
    self.localStorage.setItem(THEME_KEY, theme ? "true" : "");

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [theme]);

  return [theme, setTheme];
};
