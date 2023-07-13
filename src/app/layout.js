import { Montserrat } from "next/font/google";
import Theme from "./components/Theme";
import BodyWrapper from "./components/Home/BodyWrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <BodyWrapper>
        <Theme>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </Theme>
      </BodyWrapper>
    </html>
  );
}

export const metadata = {
  title: "Home",
  description: "Welcome to JDTalley.com",
};
