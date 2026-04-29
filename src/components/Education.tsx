import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    institution: 'Institute of Engineering and Technology, Lucknow',
    degree: 'B.Tech — Computer Science and Engineering',
    period: 'Sep 2023 – May 2027',
    location: 'Lucknow, UP, India',
    score: '9.48 / 10',
    scoreLabel: 'CGPA',
    current: true,
    highlights: [
      'ACM ICPC Asia West Regionalist from this institution',
      'Active member of Parmarth Social Club',
      'Focus on competitive programming and full-stack development',
    ],
  },
  {
    institution: 'St. Francis School, Ramnagar',
    degree: 'Class XII — Physics, Chemistry, Maths, Computer Science',
    period: 'Apr 2020 – Jun 2022',
    location: 'Varanasi, UP, India',
    score: '92.6%',
    scoreLabel: 'Score',
    current: false,
    highlights: [
      'Strong foundation in Mathematics and Computer Science',
      'Completed senior secondary with distinction',
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Academic Background</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Education</h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-blue-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((e) => (
              <div key={e.institution} className="relative flex gap-6 md:gap-10">
                <div className="hidden md:flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center flex-shrink-0 ${
                    e.current ? 'bg-cyan-500/20 border-cyan-500 shadow-lg shadow-cyan-500/20' : 'bg-slate-800 border-slate-600'
                  }`}>
                    <GraduationCap size={24} className={e.current ? 'text-cyan-400' : 'text-slate-400'} />
                  </div>
                </div>

                <div className={`flex-1 p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
                  e.current
                    ? 'bg-slate-900/80 border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/40 border-slate-700/60'
                }`}>
                  {e.current && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-semibold rounded-full mb-4">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                      Currently Enrolled
                    </span>
                  )}

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-white mb-1">{e.institution}</h3>
                      <p className="text-slate-400 font-medium">{e.degree}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className={`text-3xl font-black ${e.current ? 'text-cyan-400' : 'text-slate-300'}`}>{e.score}</div>
                      <div className="text-slate-500 text-sm">{e.scoreLabel}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {e.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {e.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <Award size={13} className={`mt-0.5 flex-shrink-0 ${e.current ? 'text-cyan-400' : 'text-slate-500'}`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
