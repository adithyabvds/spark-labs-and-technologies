import { useEffect, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="hero small-hero">
        <h1 className="reveal">Get in Touch</h1>
        <p className="reveal delay">
          Have a question, need a demo, or want to discuss a custom solution? Our team typically responds within one business day.
        </p>
      </section>

      <section className="section" style={{ paddingTop: "0" }}>
        <div className="cards" style={{ marginBottom: "48px" }}>
          <div className="card reveal">
            <h3>Sales Enquiries</h3>
            <p>Looking to get started or need pricing information for your organisation? We'd love to talk.</p>
          </div>
          <div className="card reveal">
            <h3>Technical Support</h3>
            <p>Already a customer and running into an issue? Our support team is ready to help you resolve it fast.</p>
          </div>
          <div className="card reveal">
            <h3>Partnerships</h3>
            <p>Interested in integrations, reseller opportunities, or co-development? Let's explore what's possible.</p>
          </div>
        </div>

        <h2 className="reveal" style={{ marginBottom: "28px" }}>Send a Message</h2>

        {submitted ? (
          <div className="form-success reveal active">
            <strong>Thanks for reaching out!</strong> We've received your message and will get back to you within one business day.
          </div>
        ) : (
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your organisation"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                <option value="" disabled>Select a topic</option>
                <option value="demo">Request a Demo</option>
                <option value="sales">Sales Enquiry</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
              Send Message
            </button>
          </form>
        )}
      </section>
    </>
  );
}
