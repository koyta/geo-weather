import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  color: {
    primaryColor: "#fdfdfd",
    secondaryColor: "#1d2120",
    fallbackColor: "#5a5a5a",
    accentColor: "#5f4b8b",
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
