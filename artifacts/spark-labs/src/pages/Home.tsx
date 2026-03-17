import { useEffect } from "react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("active"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

export default function Home({ onNavigate }: HomeProps) {
  useReveal();

  return (
    <>
      {/* ── Hero ── */}
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

        {/* trust bar */}
        <div className="trust-bar reveal delay-3">
          <span className="trust-dot" />
          <span className="trust-text">Live — Used by growing enterprises across India</span>
        </div>

        {/* stats */}
        <div className="stats-row">
          <div className="stat-item reveal delay-2">
            <span className="stat-value">100%</span>
            <span className="stat-label">GST Compliant</span>
          </div>
          <div className="stat-item reveal delay-3">
            <span className="stat-value">∞</span>
            <span className="stat-label">Scalable Tenants</span>
          </div>
          <div className="stat-item reveal delay-4">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Uptime SLA</span>
          </div>
          <div className="stat-item reveal delay-5">
            <span className="stat-value">1-click</span>
            <span className="stat-label">Invoice Generation</span>
          </div>
        </div>
      </section>

      {/* ── Product Showcase ── */}
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
            {["Smart Billing", "GST Automation", "Inventory Management", "Business Analytics"].map((f) => (
              <li key={f}>
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="section">
        <h2 className="reveal">What We Build</h2>
        <p className="section-intro reveal delay">
          We build applied AI systems, enterprise billing platforms, and automation products that are designed for operational clarity and long-term growth.
        </p>
        <div className="cards">
          {[
            { title: "Smart Finance Operations", desc: "Billing, compliance, invoicing, and collections aligned to real business workflows.", delay: "delay-2" },
            { title: "Automation at Scale", desc: "Low-friction automations for approvals, reporting, reminders, and payment cycles.", delay: "delay-3" },
            { title: "Actionable Analytics", desc: "Decision-ready dashboards for performance, cashflow, and growth forecasting.", delay: "delay-4" },
          ].map(({ title, desc, delay }) => (
            <article className={`card reveal ${delay}`} key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
