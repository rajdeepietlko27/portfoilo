import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ChevronDown, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const roles = ['Full-Stack Developer', 'Competitive Programmer', 'Problem Solver', 'CS Undergrad @ IET Lucknow'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight mb-4 leading-none">
          Rajdeep
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Singh
          </span>
        </h1>

        <div className="h-10 mb-8">
          <p className="text-xl md:text-2xl text-slate-400 font-light">
            <span className="text-cyan-400 font-medium">{displayed}</span>
            <span className="animate-pulse text-cyan-400">|</span>
          </p>
        </div>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          B.Tech CSE student at IET Lucknow with a 9.48 CGPA, ACM ICPC Asia West Regionalist,
          and LeetCode Knight with 2500+ problems solved across competitive programming platforms.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a href="mailto:rajdeepsingh20041214@gmail.com" className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-300 hover:text-white rounded-xl text-sm transition-all duration-200 backdrop-blur-sm group">
            <Mail size={15} className="text-cyan-400 group-hover:scale-110 transition-transform" />
            rajdeepsingh20041214@gmail.com
          </a>
          <a href="tel:+916307430731" className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-300 hover:text-white rounded-xl text-sm transition-all duration-200 backdrop-blur-sm group">
            <Phone size={15} className="text-cyan-400 group-hover:scale-110 transition-transform" />
            +91-6307430731
          </a>
          <span className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/80 border border-slate-700/60 text-slate-400 rounded-xl text-sm backdrop-blur-sm">
            <MapPin size={15} className="text-cyan-400" />
            Lucknow, UP, India
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="https://github.com/rajdeepietlko27" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl font-medium transition-all duration-200 hover:border-slate-500 hover:-translate-y-0.5">
            <FaGithub size={18} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rajdeep-singh-615157282/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-cyan-500/25">
            <FaLinkedin size={18} />
            LinkedIn
          </a>
          <a href="/resume.pdf" download="Rajdeep_Singh_Resume.pdf" className="flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-cyan-500/10 border border-cyan-500/60 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10">
            <Download size={18} />
            Resume
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { value: '9.48', label: 'CGPA' },
            { value: 'AIR 65', label: 'ICPC Asia West' },
            { value: '2500+', label: 'Problems Solved' },
            { value: '2077', label: 'LeetCode Rating' },
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-4 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-2xl font-black text-cyan-400">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-slate-600" />
      </div>
    </section>
  );
}