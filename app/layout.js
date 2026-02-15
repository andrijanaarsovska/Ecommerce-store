import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";

export const metadata = {
  title: "Stickstore",
  description: "A store for programmers and productivity friends :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head />
      <body>
      <div id="portal"/>
      <div id="app">
        <header>
          <Link href={'/'}>
          <h1>Stickstore</h1>
          </Link>

          <h5 className="mid-text">- Cool stuff for programmers -</h5>
          <Cart/>

        </header>
        <main>
        {children}
        </main>
        <div className="hr"></div>
        <footer></footer>
      </div>
      </body>
    </html>
  );
}
