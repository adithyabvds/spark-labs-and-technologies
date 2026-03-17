import { useEffect } from "react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
      );

      revealElements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      revealElements.forEach((el) => el.classList.add("active"));
    }
  }, []);

  return (
    <>
      <section className="hero">
        <h1 className="reveal">Enterprise Billing Infrastructure Designed for Scale</h1>
        <p className="reveal delay">
          Spark AccuLedger unifies GST workflows, smart billing, analytics, and payment automation into one modern SaaS platform for growing operations.
        </p>
        <div className="hero-buttons reveal delay-2">
          <button className="btn-primary" onClick={() => onNavigate("products")}>
            Explore Products
          </button>
          <a
            href="https://multi-tenant-billing-app-w70p3ehv.devinapps.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Launch Platform
          </a>
        </div>
      </section>

      <section className="product-showcase">
        <div className="section-gradient product-hero-card reveal">
          <span className="product-badge">Live Platform</span>
          <h2 className="product-hero-title">Spark AccuLedger</h2>
          <p className="product-hero-desc">
            Enterprise Smart Billing &amp; Business Infrastructure Platform integrating GST, analytics, payments and automation.
          </p>
          <div className="product-actions">
            <a
              href="https://multi-tenant-billing-app-w70p3ehv.devinapps.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Launch Platform
            </a>
            <button className="btn-secondary" onClick={() => onNavigate("products")}>
              Learn More
            </button>
          </div>
          <ul className="feature-list">
            <li>
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Smart Billing
            </li>
            <li>
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              GST Automation
            </li>
            <li>
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Inventory Management
            </li>
            <li>
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Business Analytics
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="reveal">What We Build</h2>
        <p className="section-intro reveal delay">
          We build applied AI systems, enterprise billing platforms, and automation products that are designed for operational clarity and long-term growth.
        </p>
        <div className="cards">
          <article className="card reveal">
            <h3>Smart Finance Operations</h3>
            <p>Billing, compliance, invoicing, and collections aligned to real business workflows.</p>
          </article>
          <article className="card reveal">
            <h3>Automation at Scale</h3>
            <p>Low-friction automations for approvals, reporting, reminders, and payment cycles.</p>
          </article>
          <article className="card reveal">
            <h3>Actionable Analytics</h3>
            <p>Decision-ready dashboards for performance, cashflow, and growth forecasting.</p>
          </article>
        </div>
      </section>
    </>
  );
}
