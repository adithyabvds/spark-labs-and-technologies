import { useEffect, useState } from "react";
import SparkLogo from "./SparkLogo";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-shell">
        <SparkLogo onClick={() => onNavigate("home")} />
        <div className="nav-main">
          <ul className="nav-links">
            <li>
              <span onClick={() => onNavigate("home")}>Home</span>
            </li>
            <li>
              <span onClick={() => onNavigate("products")}>Products</span>
            </li>
            <li>
              <a
                href="https://multi-tenant-billing-app-w70p3ehv.devinapps.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spark AccuLedger
              </a>
            </li>
            <li>
              <span onClick={() => onNavigate("docs")}>Docs</span>
            </li>
            <li>
              <span onClick={() => onNavigate("contact")}>Contact</span>
            </li>
          </ul>
          <a
            className="nav-launch-btn"
            href="https://multi-tenant-billing-app-w70p3ehv.devinapps.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch App
          </a>
        </div>
      </div>
    </nav>
  );
}
