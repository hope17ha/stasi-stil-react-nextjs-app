import './style/globals.css';
// import Header from "../components/Header";
// import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body>{children}</body>
    </html>
  );
}