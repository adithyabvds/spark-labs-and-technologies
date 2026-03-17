const pills = [
  { label: "GST Automation", x: "68%", y: "14%", delay: "0s", dur: "7s" },
  { label: "Smart Billing",  x: "76%", y: "38%", delay: "1.2s", dur: "9s" },
  { label: "AI-Powered",     x: "62%", y: "62%", delay: "0.6s", dur: "8s" },
  { label: "Multi-Tenant",   x: "80%", y: "80%", delay: "1.8s", dur: "10s" },
  { label: "Real-time",      x: "55%", y: "26%", delay: "2.4s", dur: "7.5s" },
];

export default function FloatingPills() {
  return (
    <div className="floating-pills-wrap" aria-hidden="true">
      {pills.map((p) => (
        <span
          key={p.label}
          className="floating-pill"
          style={{
            left: p.x,
            top: p.y,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        >
          {p.label}
        </span>
      ))}
    </div>
  );
}
