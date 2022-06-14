import * as React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

type LayoutProps = {
  children?: React.ReactNode;
};

const PublicSiteLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PublicSiteLayout;
