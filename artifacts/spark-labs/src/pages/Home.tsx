import { useEffect, useRef } from "react";
import FloatingPills from "../components/FloatingPills";
import { useTypewriter } from "../hooks/useTypewriter";
import { useCountUp } from "../hooks/useCountUp";

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
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("active"); o.unobserve(e.target); } });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const dy = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      el.style.transform = `perspective(700px) rotateX(${-dy * 7}deg) rotateY(${dx * 7}deg) translateY(-6px) scale(1.02)`;
      el.style.borderColor = `rgba(66,212,255,0.35)`;
      el.style.boxShadow = `${-dx * 16}px ${-dy * 16}px 44px rgba(66,212,255,0.18), 0 24px 50px rgba(30,60,200,0.3)`;
    };
    const onLeave = () => {
      el.style.transform = "";
      el.style.borderColor = "";
      el.style.boxShadow = "";
    };
    el.addEventListener("mousemove", onMove as EventListener);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove as EventListener); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  return <article ref={ref as React.RefObject<HTMLElement>} className={className} style={{ transition: "box-shadow 0.15s ease, border-color 0.15s ease" }}>{children}</article>;
}

function CounterStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(value, 1600);
  return (
    <div className="stat-item reveal">
      <span className="stat-value" ref={ref as React.RefObject<HTMLSpanElement>}>
        {count}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Home({ onNavigate }: HomeProps) {
  useReveal();
  const { displayed, done } = useTypewriter("Enterprise Billing Infrastructure Designed for Scale", 34, 400);

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
        <FloatingPills />

        <div className="hero-eyebrow reveal">
          <span className="eyebrow-dot" />
          <span>Redefining Enterprise Billing</span>
        </div>

        <h1 style={{ maxWidth: 920, fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", minHeight: "1.1em" }}>
          <span className="typewriter-text">{displayed}</span>
          {!done && <span className="typewriter-cursor">|</span>}
        </h1>

        <p className="reveal delay" style={{ marginTop: 18, maxWidth: 760, color: "var(--muted)", fontSize: "clamp(1.02rem,2vw,1.2rem)", lineHeight: 1.7 }}>
          Spark AccuLedger unifies GST workflows, smart billing, analytics, and payment automation into one modern SaaS platform for growing operations.
        </p>

        <div className="hero-buttons reveal delay-2">
          <button className="btn-primary" onClick={() => onNavigate("products")}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: 8 }}>
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Explore Products
          </button>
          <a href="https://multi-tenant-billing-app-w70p3ehv.devinapps.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Launch Platform →
          </a>
        </div>

        <div className="trust-bar reveal delay-3">
          <span className="trust-dot" />
          <span className="trust-text">Live — Used by growing enterprises across India</span>
        </div>

        <div className="stats-row">
          <CounterStat value={100} suffix="%" label="GST Compliant" />
          <CounterStat value={500} suffix="+" label="Invoices/day" />
          <CounterStat value={99} suffix=".9%" label="Uptime SLA" />
          <CounterStat value={3} suffix="s" label="Invoice Generated In" />
        </div>
      </section>

      {/* ── Product Showcase ── */}
      <section className="product-showcase">
        <div className="section-gradient product-hero-card reveal">
          <div className="showcase-inner">
            <div className="showcase-left">
              <span className="product-badge">Live Platform</span>
              <h2 className="product-hero-title">Spark AccuLedger</h2>
              <p className="product-hero-desc">
                Enterprise Smart Billing &amp; Business Infrastructure Platform integrating GST, analytics, payments and automation.
              </p>
              <div className="product-actions">
                <a href="https://multi-tenant-billing-app-w70p3ehv.devinapps.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Launch Platform
                </a>
                <button className="btn-secondary" onClick={() => onNavigate("products")}>Learn More</button>
              </div>
            </div>
            <div className="showcase-right">
              <div className="mini-dashboard">
                <div className="dash-header">
                  <span className="dash-dot red" /><span className="dash-dot yellow" /><span className="dash-dot green" />
                  <span className="dash-title">AccuLedger · Dashboard</span>
                </div>
                <div className="dash-stats">
                  <div className="dash-stat">
                    <span className="dash-stat-label">Revenue</span>
                    <span className="dash-stat-val">₹4,28,500</span>
                    <span className="dash-stat-trend up">↑ 12.4%</span>
                  </div>
                  <div className="dash-stat">
                    <span className="dash-stat-label">Invoices</span>
                    <span className="dash-stat-val">1,284</span>
                    <span className="dash-stat-trend up">↑ 8.1%</span>
                  </div>
                  <div className="dash-stat">
                    <span className="dash-stat-label">GST Due</span>
                    <span className="dash-stat-val">₹38,290</span>
                    <span className="dash-stat-trend neutral">→ Filed</span>
                  </div>
                </div>
                <div className="dash-bar-row">
                  {[65, 80, 55, 90, 72, 88, 60].map((h, i) => (
                    <div key={i} className="dash-bar" style={{ "--bar-h": `${h}%`, animationDelay: `${i * 0.1}s` } as React.CSSProperties} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ul className="feature-list">
            {["Smart Billing", "GST Automation", "Inventory Management", "Business Analytics"].map((f) => (
              <li key={f}>
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            { icon: "💳", title: "Smart Finance Operations", desc: "Billing, compliance, invoicing, and collections aligned to real business workflows.", delay: "delay-2" },
            { icon: "⚡", title: "Automation at Scale", desc: "Low-friction automations for approvals, reporting, reminders, and payment cycles.", delay: "delay-3" },
            { icon: "📊", title: "Actionable Analytics", desc: "Decision-ready dashboards for performance, cashflow, and growth forecasting.", delay: "delay-4" },
          ].map(({ icon, title, desc, delay }) => (
            <TiltCard key={title} className={`card reveal ${delay}`}>
              <div className="card-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </TiltCard>
          ))}
        </div>
      </section>
    </>
  );
}
