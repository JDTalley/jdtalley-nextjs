import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import { SITE_NAME } from "../constants";
import { LIGHT_TOKENS, DARK_TOKENS } from "../constants";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Props {
  children: ReactNode;
}

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={montserrat.className}
      style={DARK_TOKENS as React.CSSProperties}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <Navbar></Navbar>
          <main>{children}</main>
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("https://www.jdtalley.com"),
  title: SITE_NAME,
  description: "A blog covering React, Unity, and Content Creation.",
};
