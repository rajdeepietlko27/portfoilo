import { Trophy, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    organization: 'ICPC Team – IET Lucknow',
    location: 'I.E.T. Lucknow',
    role: 'Competitive Programmer and Team Representative',
    period: 'Sep 2024 – Present',
    icon: Trophy,
    points: [
      'Represented IET Lucknow at ICPC Asia West Regionals 2026, securing AIR 65 at Chennai Regionals.',
      'Mentored 50+ junior students in Data Structures and Algorithms using C++ and competitive programming strategies.',
      'Conducted mock contest discussions, reviewed solutions, and shared competitive programming strategies with teammates to strengthen IET Lucknow’s ICPC preparation.',
    ],
    highlights: [
      { label: 'Regional Rank', value: 'AIR 65 (Chennai)' },
      { label: 'Mentorship', value: '50+ Juniors Mentored' },
      { label: 'Core Focus', value: 'DSA & Competitive Programming' },
    ]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Leadership & Responsibility</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-balance">
            Experience / Position of Responsibility
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto text-balance">
            Competitive programming representation, team leadership, and mentorship
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.organization}
              className="relative p-8 md:p-10 rounded-3xl border border-slate-700/60 bg-slate-950/60 overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 reveal-on-scroll glow-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <exp.icon size={28} className="text-cyan-400" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-black text-white">{exp.organization}</h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                      <MapPin size={14} className="text-cyan-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <p className="text-cyan-400 font-semibold text-base md:text-lg">{exp.role}</p>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium rounded-full">
                      <Calendar size={12} className="text-cyan-400" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>
                        Represented IET Lucknow at ICPC Asia West Regionals 2026, securing <strong className="text-cyan-400 font-bold">AIR 65</strong> at Chennai Regionals.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>
                        Mentored <strong className="text-slate-200 font-medium">50+ junior students</strong> in Data Structures and Algorithms using C++ and competitive programming strategies.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>
                        Conducted mock contest discussions, reviewed solutions, and shared competitive programming strategies with teammates to strengthen IET Lucknow’s ICPC preparation.
                      </span>
                    </li>
                  </ul>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800/80 pt-6">
                    {exp.highlights.map((item) => (
                      <div key={item.label} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <p className="text-slate-500 text-xs">{item.label}</p>
                        <p className="text-white font-bold text-sm mt-0.5">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

