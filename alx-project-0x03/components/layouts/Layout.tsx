import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {/* Add padding top here to avoid content hiding behind fixed header */}
      <main className="pt-24">  
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
