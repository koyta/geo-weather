import baseStyled, { ThemedStyledInterface } from "styled-components";

export const colors = {
  white: "#fafafa",
  black: "#1d2120",
  gray: "#5a5a5a",
  purple: "#9064ed",
  blue: "#6495ed",
  green: "#64edbd",
};

export const theme = {
  primaryColor: colors.white,
  secondaryColor: colors.black,
  accentColor: colors.blue,
  accentColor2: colors.green,
  accentColor3: colors.purple,
  fallbackColor: colors.gray,
};

export const themeDark = {
  ...theme,
  primaryColor: colors.black,
  secondaryColor: colors.white,
  accentColor: colors.purple,
  accentColor3: colors.blue,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
