import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";

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

          <div className="header-content">
            <Link href={'/'}>
              <h1>Stickstore</h1>
            </Link>
            <h5 className="mid-text">- Cool stuff for programmers -</h5>
            <Cart/>
          </div>

        </header>
        <main>
        {children}
        </main>
        <div className="hr"></div>
        <footer>
          <div className="email-container">
            <h5>Get a sneak peak at new additions to the store, special offers,
            and so much more</h5>
            <EmailInput/>
          </div>

          <div className="links-container">
             <div>
               <h3>Stickstore</h3>
               <Link href={'/'}>Stickstore Hub</Link>
               <Link href={'/'}>Roadmap</Link>
             </div>  
            <div>
              <h3>Store</h3>
              <Link href={'/'}>Home</Link>
              <Link href={'/cart'}>Cart</Link>
            </div>
            <div>
              <h3>Support</h3>
              <Link href={'/contact'}>Contact</Link>
              <Link href={'/faq'}>FAQs</Link>
            </div>
          </div>
          
          <div className="socials">
            <p>© <a href="/" target="_blank">Andrijana Arsovska</a> 2026 <br/> Built with NextJS </p>
            <div className="social-links">
              <Link href={'/'} target="_blank"><i className="fa-brands fa-github"></i></Link>
              <Link href={'/'} target="_blank"><i className="fa-brands fa-youtube"></i></Link>
              <Link href={'/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>

            </div>
          </div>
        </footer>
      </div>
      </body>
    </html>
  );
}
