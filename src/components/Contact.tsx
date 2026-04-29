import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_a0mig4w';
const TEMPLATE_ID = 'template_lbr2vxy';
const PUBLIC_KEY = 'NvCec7p98DW3uz4Sk';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rajdeepsingh20041214@gmail.com',
    href: 'mailto:rajdeepsingh20041214@gmail.com',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-6307430731',
    href: 'tel:+916307430731',
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lucknow, Uttar Pradesh, India',
    href: '#',
    color: 'text-teal-400',
    border: 'border-teal-500/30',
    bg: 'bg-teal-500/10',
  },
];

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/rajdeepietlko27', color: 'hover:text-white', bg: 'hover:bg-slate-700' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rajdeep-singh-615157282/', color: 'hover:text-blue-400', bg: 'hover:bg-blue-500/10' },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);
      setSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Let's Connect</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Open to internships, collaborations, and exciting opportunities. Let's build something great together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <div className="space-y-4">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className={`flex items-center gap-5 p-5 rounded-2xl border ${c.border} ${c.bg} hover:scale-[1.02] transition-all duration-200 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                  <c.icon size={20} className={c.color} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">{c.label}</p>
                  <p className="text-white font-medium">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="flex gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-5 py-3 bg-slate-800 ${s.bg} border border-slate-700 text-slate-400 ${s.color} rounded-xl text-sm font-medium transition-all duration-200 hover:border-slate-500 hover:-translate-y-0.5`}
                >
                  <s.icon size={16} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-slate-700/60 bg-slate-900/60">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            {/* Success message */}
            {success && (
              <div className="mb-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
                ❌ Something went wrong. Please try again or email me directly.
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-400 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Tell me about the opportunity..."
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-24 border-t border-slate-800 pt-10 text-center">
        <p className="text-slate-500 text-sm">
          Designed & built by <span className="text-cyan-400 font-semibold">Rajdeep Singh</span> — B.Tech CSE @ IET Lucknow
        </p>
      </div>
    </section>
  );
}