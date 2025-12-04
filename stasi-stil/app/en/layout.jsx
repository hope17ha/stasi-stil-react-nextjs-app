import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../style/globals.css';

export default function EnLayout({ children }) {
  return (
    <>
      <Header lang="en" />
      <main>{children}</main>
      <Footer lang="en" />
    </>
  );
}

