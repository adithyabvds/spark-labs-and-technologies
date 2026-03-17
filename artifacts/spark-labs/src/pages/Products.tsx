import { useEffect } from "react";

interface ProductsProps {
  onNavigate: (page: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <section className="hero small-hero">
        <h1 className="reveal">Our Products</h1>
        <p className="reveal delay">
          Purpose-built software for enterprises that need reliability, compliance, and scale from day one.
        </p>
      </section>

      <section className="product-showcase" style={{ paddingBottom: "0" }}>
        <div className="section-gradient product-hero-card reveal">
          <span className="product-badge">Live Platform</span>
          <h2 className="product-hero-title">Spark AccuLedger</h2>
          <p className="product-hero-desc">
            Enterprise Smart Billing &amp; Business Infrastructure Platform integrating GST, analytics, payments and automation. Built for businesses that need a unified system to manage billing, inventory, and compliance workflows.
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
            <button className="btn-secondary" onClick={() => onNavigate("contact")}>
              Request Demo
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
            <li>
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Payment Automation
            </li>
            <li>
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Multi-Tenant Architecture
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="reveal">Platform Capabilities</h2>
        <p className="section-intro reveal delay">
          Everything your business needs to manage finance, compliance, and operations — in one unified platform.
        </p>
        <div className="product-grid">
          <article className="product-card reveal">
            <div className="product-tag">Billing</div>
            <h3>Smart Invoice Engine</h3>
            <p>Generate GST-compliant invoices, manage billing cycles, and automate collections with intelligent retry logic.</p>
          </article>
          <article className="product-card reveal">
            <div className="product-tag">Compliance</div>
            <h3>GST Filing & Reports</h3>
            <p>Auto-compute GSTR-1, GSTR-3B and other returns. Maintain audit trails and stay compliant without manual effort.</p>
          </article>
          <article className="product-card reveal">
            <div className="product-tag">Inventory</div>
            <h3>Stock & Warehouse</h3>
            <p>Track inventory across locations in real time, set reorder levels, and link stock movements to billing.</p>
          </article>
          <article className="product-card reveal">
            <div className="product-tag">Analytics</div>
            <h3>Business Intelligence</h3>
            <p>Interactive dashboards for revenue trends, cashflow forecasting, and operational KPIs tailored for decision makers.</p>
          </article>
          <article className="product-card reveal">
            <div className="product-tag">Payments</div>
            <h3>Payment Gateway</h3>
            <p>Accept payments via UPI, cards, and net banking. Reconcile automatically and track outstanding balances.</p>
          </article>
          <article className="product-card reveal">
            <div className="product-tag">Multi-Tenant</div>
            <h3>Enterprise Architecture</h3>
            <p>Manage multiple business entities, branches, or clients from a single admin interface with role-based access.</p>
          </article>
        </div>
      </section>
    </>
  );
}
