import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AuroraBg from "./components/AuroraBg";
import ParticleField from "./components/ParticleField";
import ScrollProgress from "./components/ScrollProgress";
import MouseSpotlight from "./components/MouseSpotlight";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";

type Page = "home" | "products" | "docs" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [transitioning, setTransitioning] = useState(false);
  const [pendingPage, setPendingPage] = useState<Page | null>(null);

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    setTransitioning(true);
    setPendingPage(page as Page);
  };

  useEffect(() => {
    if (!transitioning || !pendingPage) return;
    const timer = setTimeout(() => {
      setCurrentPage(pendingPage);
      setPendingPage(null);
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 280);
    return () => clearTimeout(timer);
  }, [transitioning, pendingPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "products": return <Products onNavigate={handleNavigate} />;
      case "docs":     return <Docs />;
      case "contact":  return <Contact />;
      default:         return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <AuroraBg />
      <ParticleField />
      <ScrollProgress />
      <MouseSpotlight />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className={`page-wrap${transitioning ? " page-exit" : " page-enter"}`}>
        {renderPage()}
      </main>
      <footer className="footer">
        <p>&copy; 2026 Spark Labs &amp; Technologies. All rights reserved.</p>
      </footer>
    </>
  );
}
