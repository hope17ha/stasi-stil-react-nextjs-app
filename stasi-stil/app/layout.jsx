import Header from "../components/Header";
import Footer from "../components/Footer";
import "../app/globals.css";

export default function Layout({ children }) {
  return (
    <html lang="bg">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

