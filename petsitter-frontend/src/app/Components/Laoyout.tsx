// import NavbarHome from "./Navbar";

import Footer from "./Footer";
import NavbarHome from "./Navbar";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <NavbarHome />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
