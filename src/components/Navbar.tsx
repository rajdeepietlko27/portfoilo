import { useState, useEffect } from "react";
import { Menu, X, Code2, Send, CheckCircle } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function HireMeModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending (replace with your actual API/EmailJS/Formspree call)
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl shadow-slate-950/80 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white">
              Let's Work Together
            </h2>
            <p className="text-sm text-slate-400 mt-0.5">
              Fill out the form and I'll get back to you soon.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {submitted ? (
            // Success State
            <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
              <CheckCircle size={52} className="text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Message Sent!</h3>
              <p className="text-slate-400 text-sm max-w-xs">
                Thanks <span className="text-cyan-400">{form.name}</span>! I'll
                review your message and reach out to{" "}
                <span className="text-cyan-400">{form.email}</span> shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl text-sm transition-all duration-200"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="px-4 py-2.5 bg-slate-800 border border-slate-700 focus:border-cyan-500 text-white placeholder-slate-500 rounded-xl text-sm outline-none transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="px-4 py-2.5 bg-slate-800 border border-slate-700 focus:border-cyan-500 text-white placeholder-slate-500 rounded-xl text-sm outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Opportunity Type
                </label>
                <select
                  required
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="px-4 py-2.5 bg-slate-800 border border-slate-700 focus:border-cyan-500 text-white rounded-xl text-sm outline-none transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a role...
                  </option>
                  <option value="Full-Time">Full-Time Role</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance">Freelance Project</option>
                  <option value="Collaboration">
                    Open Source / Collaboration
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the role, project, or opportunity..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="px-4 py-2.5 bg-slate-800 border border-slate-700 focus:border-cyan-500 text-white placeholder-slate-500 rounded-xl text-sm outline-none transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-semibold rounded-xl text-sm transition-all duration-200 mt-1"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-sm shadow-lg shadow-slate-900/50 border-b border-slate-800/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => handleNav("#hero")}
            className="flex items-center gap-2 text-cyan-400 font-bold text-lg tracking-tight hover:text-cyan-300 transition-colors"
          >
            <Code2 size={22} />
            <span>Rajdeep</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-all duration-200"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="ml-2 px-4 py-2 text-sm bg-cyan-500
  hover:bg-cyan-400 text-slate-950 font-semibold
  rounded-lg transition-all duration-200"
            >
              Hire Me
            </button>
          </nav>

          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-slate-950/98 backdrop-blur-sm border-b border-slate-800">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="text-left px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-all duration-200"
                >
                  {l.label}
                </button>
              ))}
              {/* Hire Me in mobile menu too */}
              <button
                onClick={() => handleNav("#contact")}
                className="text-left px-4 py-3 text-cyan-400
  font-semibold hover:bg-slate-800/60 rounded-lg
  transition-all duration-200"
              >
                Hire Me
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Modal */}
      {showModal && <HireMeModal onClose={() => setShowModal(false)} />}
    </>
  );
}
