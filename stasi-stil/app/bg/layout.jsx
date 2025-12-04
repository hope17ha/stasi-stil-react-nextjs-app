import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../style/globals.css'

export default function BgLayout({ children }) {
  return (
    <>
      <Header lang="bg" />
      <main>{children}</main>
      <Footer lang="bg" />
    </>
  );
}

