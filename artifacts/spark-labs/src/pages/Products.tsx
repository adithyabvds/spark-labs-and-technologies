import { useEffect } from "react";

interface ProductsProps {
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

const capabilities = [
  { tag: "Billing", title: "Smart Invoice Engine", desc: "Generate GST-compliant invoices, manage billing cycles, and automate collections with intelligent retry logic." },
  { tag: "Compliance", title: "GST Filing & Reports", desc: "Auto-compute GSTR-1, GSTR-3B and other returns. Maintain audit trails and stay compliant without manual effort." },
  { tag: "Inventory", title: "Stock & Warehouse", desc: "Track inventory across locations in real time, set reorder levels, and link stock movements to billing." },
  { tag: "Analytics", title: "Business Intelligence", desc: "Interactive dashboards for revenue trends, cashflow forecasting, and operational KPIs tailored for decision makers." },
  { tag: "Payments", title: "Payment Gateway", desc: "Accept payments via UPI, cards, and net banking. Reconcile automatically and track outstanding balances." },
  { tag: "Multi-Tenant", title: "Enterprise Architecture", desc: "Manage multiple business entities, branches, or clients from a single admin interface with role-based access." },
];

const delays = ["delay", "delay-2", "delay-3", "delay-4", "delay-5", "delay"];

export default function Products({ onNavigate }: ProductsProps) {
  useReveal();

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
            <a href="https://multi-tenant-billing-app-w70p3ehv.devinapps.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Launch Platform
            </a>
            <button className="btn-secondary" onClick={() => onNavigate("contact")}>
              Request Demo
            </button>
          </div>
          <ul className="feature-list">
            {["Smart Billing", "GST Automation", "Inventory Management", "Business Analytics", "Payment Automation", "Multi-Tenant Architecture"].map((f) => (
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

      <section className="section">
        <h2 className="reveal">Platform Capabilities</h2>
        <p className="section-intro reveal delay">
          Everything your business needs to manage finance, compliance, and operations — in one unified platform.
        </p>
        <div className="product-grid">
          {capabilities.map(({ tag, title, desc }, i) => (
            <article className={`product-card reveal ${delays[i]}`} key={title}>
              <div className="product-tag">{tag}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
