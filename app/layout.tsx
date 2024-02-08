import type { Metadata } from "next";
import "./globals.css";
import { montserrat, barlowCondensed } from "./font";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Art Smart🎨 by Yasika",
  description:
    "Welcome to Art Smart! Get beautiful products custom made with love and perfection🕊️🔴",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${barlowCondensed.variable}`}
    >
      <body>
        <main className="parent-container">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
