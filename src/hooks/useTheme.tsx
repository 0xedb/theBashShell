import React from "react";

export const THEME_URL = {
  light: "https://api.iconify.design/noto:sun-with-face.svg",
  dark: "https://api.iconify.design/noto:new-moon-face.svg",
};
export const THEME_KEY: string = "__useDarkMode";

type DarkMode = () => boolean;

const isCurrentThemeDarkMode: DarkMode = () => {
  // look in localstorage
  const theme: string = window.localStorage.getItem(THEME_KEY);

  if (theme) return true;
  // use mediaquery
  const query: string = `(prefers-color-scheme: dark)`;

  if (window.matchMedia(query).matches) return true;
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

  return [theme, setTheme];
};
