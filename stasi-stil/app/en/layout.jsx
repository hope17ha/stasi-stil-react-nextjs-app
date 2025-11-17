import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../style/globals.css';

export default function EnLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header lang="en" />
        <main>{children}</main>
        <Footer lang="en" />
      </body>
    </html>
  );
}

