import { Users, Heart, BookOpen } from 'lucide-react';

const responsibilities = [
  {
    icon: Heart,
    title: 'Fundraising Coordinator',
    description: 'Organized fundraising events to gather educational supplies for underprivileged students in the community.',
  },
  {
    icon: Users,
    title: 'Workshop Leader',
    description: 'Led workshops and awareness sessions to involve the broader community in supporting educational initiatives.',
  },
  {
    icon: BookOpen,
    title: 'Academic Mentor',
    description: 'Provided academic tutoring and mentorship to help students with their studies and personal growth.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Giving Back</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Experience</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Beyond code — contributing to community and making an impact</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-10 rounded-3xl border border-slate-700/60 bg-slate-950/60 overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <Users size={26} className="text-cyan-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-black text-white">Parmarth — Social Club</h3>
                  <span className="text-slate-500 text-sm font-medium">IET Lucknow</span>
                </div>
                <p className="text-cyan-400 font-semibold mb-3">Member — Position of Responsibility</p>
                <p className="text-slate-400 leading-relaxed">
                  Active member of Parmarth, IET Lucknow's social club dedicated to uplifting underprivileged
                  communities through education, awareness, and mentorship programs.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {responsibilities.map((r) => (
                <div key={r.title} className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-cyan-500/30 transition-all duration-200">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <r.icon size={16} className="text-cyan-400" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">{r.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
