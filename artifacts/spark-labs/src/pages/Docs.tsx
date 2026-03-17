import { useEffect } from "react";

const ACULEDGER_URL = "https://spark-aculedger.onrender.com";

export default function Docs() {
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
        <h1 className="reveal">Documentation</h1>
        <p className="reveal delay">
          Everything you need to get started with <a href={ACULEDGER_URL} target="_blank" rel="noopener noreferrer">Spark AccuLedger</a> — guides, API references, and integration walkthroughs.
        </p>
      </section>

      <section className="section">
        <h2 className="reveal">Getting Started</h2>
        <p className="section-intro reveal delay">
          New to the platform? Start here to get your account configured and your first invoice generated in minutes.
        </p>
        <div className="docs-grid">
          <div className="doc-card reveal">
            <h3>Quick Start Guide</h3>
            <p>Set up your organisation, configure GST settings, and create your first invoice in under 10 minutes.</p>
          </div>
          <div className="doc-card reveal">
            <h3>Account Setup</h3>
            <p>Configure company details, tax registrations, bank accounts, and user roles for your team.</p>
          </div>
          <div className="doc-card reveal">
            <h3>Billing Configuration</h3>
            <p>Set up billing cycles, payment terms, invoice templates, and automatic reminders for overdue accounts.</p>
          </div>
          <div className="doc-card reveal">
            <h3>GST Setup</h3>
            <p>Enter your GSTIN, configure HSN/SAC codes, and enable automated GSTR report generation.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "0" }}>
        <h2 className="reveal">API Reference</h2>
        <p className="section-intro reveal delay">
          Integrate <a href={ACULEDGER_URL} target="_blank" rel="noopener noreferrer">Spark AccuLedger</a> with your existing systems using our RESTful API. Full OpenAPI specification available.
        </p>
        <div className="docs-grid">
          <div className="doc-card reveal">
            <h3>Authentication</h3>
            <p>Secure your API calls using OAuth 2.0 and API key authentication. Manage tokens and scopes.</p>
          </div>
          <div className="doc-card reveal">
            <h3>Invoices API</h3>
            <p>Create, retrieve, update and void invoices programmatically. Supports batch operations and webhooks.</p>
          </div>
          <div className="doc-card reveal">
            <h3>Payments API</h3>
            <p>Initiate payment requests, check payment status, and receive real-time payment events via webhooks.</p>
          </div>
          <div className="doc-card reveal">
            <h3>Inventory API</h3>
            <p>Manage products, stock levels, and warehouse locations programmatically from your own systems.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "0" }}>
        <h2 className="reveal">Integrations</h2>
        <p className="section-intro reveal delay">
          Connect <a href={ACULEDGER_URL} target="_blank" rel="noopener noreferrer">Spark AccuLedger</a> with the tools your team already uses.
        </p>
        <div className="docs-grid">
          <div className="doc-card reveal">
            <h3>ERP Integrations</h3>
            <p>Sync data with SAP, Oracle, and Tally. Real-time two-way sync ensures your records are always aligned.</p>
          </div>
          <div className="doc-card reveal">
            <h3>Payment Gateways</h3>
            <p>Connect Razorpay, Stripe, PayU, and other gateways to accept payments and reconcile automatically.</p>
          </div>
          <div className="doc-card reveal">
            <h3>E-commerce Platforms</h3>
            <p>Sync orders from Shopify, WooCommerce, and custom storefronts directly into your billing system.</p>
          </div>
          <div className="doc-card reveal">
            <h3>Government Portals</h3>
            <p>Direct integration with GST portal, e-invoice IRP, and e-way bill portal for compliant filing.</p>
          </div>
        </div>
      </section>
    </>
  );
}
