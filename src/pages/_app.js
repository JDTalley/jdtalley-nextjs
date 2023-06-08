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

const theme = {
  colors: {
    primary: "hsl(205, 62%, 49%)",
    secondary: "hsl(1, 55%, 52%)",
    gray: "hsl(0, 0%, 18%)",
    white: "hsl(0, 0%, 90%)",
    black: "hsl(0, 0%, 2%)",
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
  return (
    <ThemeProvider theme={theme}>
      <Wrapper className={montserrat.className}>
        <Navbar></Navbar>
        <Component {...pageProps} />
        <Footer></Footer>
      </Wrapper>
    </ThemeProvider>
  );
}
