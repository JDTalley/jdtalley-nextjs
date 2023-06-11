import React from "react";
import "../styles/global.css";
import { Montserrat } from "next/font/google";
import styled, { ThemeProvider } from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const montserrat = Montserrat({
  subsets: ["latin"],
});

/* const theme = {
  colors: {
    primary: "hsl(205, 62%, 49%)",
    //secondary: "hsl(1, 55%, 52%)",
    secondary: "#ee7c6c",
    gray: "hsl(0, 0%, 18%)",
    white: "hsl(0, 0%, 90%)",
    black: "hsl(0, 0%, 2%)",
  },
}; */

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

const lightTheme = {
  colors: {
    primary: "hsl(0, 0%, 100%)",
    secondary: "hsl(205, 62%, 44%)",
    accent: "hsl(1, 55%, 52%)",
    contrastText: "hsl(0, 0%, 18%)",
    white: "hsl(0, 0%, 100%)",
    gray: "hsl(205, 0%, 15%)",
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

/* const theme = {
  colors: {
    grayscale: {
      light: "hsl(0, 0%, 35%)",
      main: "hsl(0, 0%, 18%)",
      dark: "hsl(0, 0%, 2%)",
      contrast: "hsl(0, 0%, 90%)",
    },
    primary: {
      light: "hsl(205, 62%, 70%)",
      main: "hsl(205, 62%, 49%)",
      dark: "hsl(205, 62%, 29%)",
      contrast: "hsl(0, 0%, 18%)",
    },
    secondary: {
      light: "hsl(1, 55%, 72%)",
      main: "hsl(1, 55%, 52%)",
      dark: "hsl(1, 55%, 32%)",
      contrast: "hsl(0, 0%, 18%)",
    },
  },
}; */

export default function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = React.useState(true);

  function darkModeToggle() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Wrapper className={montserrat.className}>
        <Navbar darkMode={darkMode} darkModeToggle={darkModeToggle}></Navbar>
        <Component {...pageProps} />
        <Footer></Footer>
      </Wrapper>
    </ThemeProvider>
  );
}
