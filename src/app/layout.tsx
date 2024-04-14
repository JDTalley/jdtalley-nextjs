import { ReactNode } from "react";
import { Fira_Code } from "next/font/google";
import { SITE_NAME } from "../constants";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

interface Props {
  children: ReactNode;
}

const montserrat = Fira_Code({
  subsets: ["latin"],
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={montserrat.className} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar></Navbar>
          <main>{children}</main>
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
