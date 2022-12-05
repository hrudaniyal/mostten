import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
