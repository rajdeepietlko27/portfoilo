import { Code, Wrench, Brain } from 'lucide-react';

const categories = [
  {
    icon: Code,
    title: 'Languages',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    icon: Wrench,
    title: 'Tools & Frameworks',
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    skills: ['React', 'Next.js', 'Node.js', 'TailwindCSS', 'OpenCV', 'GitHub', 'VS Code'],
  },
  {
    icon: Brain,
    title: 'Technical Skills',
    color: 'text-teal-400',
    border: 'border-teal-500/30',
    bg: 'bg-teal-500/10',
    skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'OOP', 'Operating Systems', 'System Design'],
  },
];

const proficiencies = [
  { skill: 'Data Structures & Algorithms', level: 95 },
  { skill: 'Full-Stack Development', level: 82 },
  { skill: 'Competitive Programming', level: 90 },
  { skill: 'Database Design', level: 75 },
  { skill: 'System Design', level: 70 },
  { skill: 'Problem Solving', level: 96 },
];

export default function Skills() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-balance">Skills</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto text-balance">A well-rounded technical foundation built through competitive programming and real-world projects</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start reveal-on-scroll">
          <div>
            <div className="space-y-4 mb-10">
              {categories.map((cat) => (
                <div key={cat.title} className={`p-6 rounded-2xl border ${cat.border} bg-slate-950/60 hover:scale-[1.01] transition-all duration-300 glow-card`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${cat.bg} border ${cat.border} flex items-center justify-center`}>
                      <cat.icon size={18} className={cat.color} />
                    </div>
                    <h3 className="text-white font-bold">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span key={s} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${cat.bg} ${cat.color} border ${cat.border} hover:scale-105 transition-transform duration-200`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-8">Proficiency Overview</h3>
            <div className="space-y-6">
              {proficiencies.map((p) => (
                <div key={p.skill}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 text-sm font-medium">{p.skill}</span>
                    <span className="text-cyan-400 text-sm font-bold">{p.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${p.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl border border-slate-700/60 bg-slate-950/60">
              <h4 className="text-white font-bold mb-4">Quick Facts</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Current CGPA', value: '9.44 / 10' },
                  { label: 'Graduation', value: 'May 2027' },
                  { label: 'XII Percentage', value: '92.6%' },
                  { label: 'Location', value: 'Lucknow, India' },
                ].map((f) => (
                  <div key={f.label} className="bg-slate-800/60 rounded-xl p-3">
                    <p className="text-slate-500 text-xs mb-1">{f.label}</p>
                    <p className="text-white font-semibold text-sm">{f.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
