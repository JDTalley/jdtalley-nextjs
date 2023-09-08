import { Montserrat } from 'next/font/google';
import { SITE_NAME } from '../constants';
import { LIGHT_COLORS, DARK_COLORS } from '../constants';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={montserrat.className}
      style={DARK_COLORS as React.CSSProperties}
    >
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL('https://www.jdtalley.com'),
  title: SITE_NAME,
  description: 'A blog covering React, Unity, and Content Creation.',
};
