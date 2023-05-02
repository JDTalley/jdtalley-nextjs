import "../styles/global.css";
import { Montserrat } from "next/font/google";
import styled from "styled-components";

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

export default function MyApp({ Component, pageProps }) {
  return (
    <Wrapper className={montserrat.className}>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </Wrapper>
  );
}
