import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Mo",
  description: "Front-end Developer",
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
