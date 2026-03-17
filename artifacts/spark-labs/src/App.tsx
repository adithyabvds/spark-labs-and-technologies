import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";

type Page = "home" | "products" | "docs" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "products":
        return <Products onNavigate={handleNavigate} />;
      case "docs":
        return <Docs />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <div className="animated-bg" aria-hidden="true" />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <footer className="footer">
        <p>&copy; 2026 Spark Labs &amp; Technologies. All rights reserved.</p>
      </footer>
    </>
  );
}
