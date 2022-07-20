import { DefaultTheme } from "styled-components";

export const themeStyled: DefaultTheme = {
  screen: {
    tablet: "@media (min-width: 768px)",
    laptop: "@media (min-width: 1024px)",
    laptopLg: "@media (min-width: 1280px)",
  },
  colors: {
    gray: "rgb(238, 238, 238)",
    black: "rgb(17, 17, 17)",
    white: "rgb(250, 250, 250)",
    red: "rgb(238, 54, 54)",
  },
};
