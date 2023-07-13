"use client";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  colors: {
    primary: "hsl(205, 62%, 8%)",
    secondary: "hsl(205, 62%, 49%)",
    accent: "hsl(1, 45%, 52%)",
    contrastText: "hsl(0, 0%, 95%)",
    white: "hsl(0, 0%, 100%)",
    gray: "hsl(210, 30%, 8%)",
    gray100: "hsl(205, 0%, 95%)",
    gray200: "hsl(205, 0%, 85%)",
    gray300: "hsl(205, 0%, 75%)",
    gray400: "hsl(205, 0%, 65%)",
    gray500: "hsl(205, 0%, 55%)",
    gray600: "hsl(205, 0%, 45%)",
    gray700: "hsl(205, 0%, 35%)",
    gray800: "hsl(205, 0%, 25%)",
    gray900: "hsl(205, 0%, 15%)",
    black: "hsl(0, 0%, 5%)",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
