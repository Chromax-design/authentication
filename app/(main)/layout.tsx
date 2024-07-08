import Footer from "@/components/NavComponents/footer";
import Nav from "@/components/NavComponents/nav";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Nav />
      <div className="max-w-6xl mx-auto">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
