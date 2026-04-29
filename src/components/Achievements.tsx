import { Trophy, Star, Target, Zap } from 'lucide-react';

const platforms = [
  {
    name: 'LeetCode',
    badge: 'Knight',
    rating: '2077',
    color: 'from-orange-500 to-amber-500',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
    highlight: 'Global Rank 421 — Biweekly Contest 178',
    stars: 5,
    icon: '🏅',
    link: 'https://leetcode.com/u/rajdeeep_231305/', // 🔁 Replace with your profile URL
  },
  {
    name: 'Codeforces',
    badge: 'Specialist',
    rating: '1465',
    color: 'from-cyan-500 to-blue-500',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    highlight: 'Global Rank 959 — Round 1037 (Div. 3) out of 25000+',
    stars: 4,
    icon: '⚡',
    link: 'https://codeforces.com/profile/RajdeepSingh_23', // 🔁 Replace with your profile URL
  },
  {
    name: 'CodeChef',
    badge: '4 Stars',
    rating: '1812',
    color: 'from-yellow-500 to-orange-400',
    border: 'border-yellow-500/30',
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
    highlight: 'Global Rank 150 — Starters 211 Division 2',
    stars: 4,
    icon: '🌟',
    link: 'https://www.codechef.com/users/rajdeep_2313', // 🔁 Replace with your profile URL
  },
  {
    name: 'AtCoder',
    badge: '5 Kyu',
    rating: '1019',
    color: 'from-green-500 to-teal-500',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    highlight: 'Global Rank 1588 — ABC 430',
    stars: 3,
    icon: '🎯',
    link: 'https://atcoder.jp/users/Rajdeepsingh_23', // 🔁 Replace with your profile URL
  },
];

const contests = [
  {
    title: 'ACM ICPC Asia West Regionalist',
    detail: 'Secured AIR-65 at Chennai Regionals',
    icon: Trophy,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  {
    title: 'IICPC Regionalist 2026',
    detail: 'Secured AIR-508 out of 13,900 candidates',
    icon: Target,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
  },
  {
    title: '2500+ Problems Solved',
    detail: 'Across LeetCode, Codeforces, CodeChef, AtCoder & more',
    icon: Zap,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Competitive Programming</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Achievements</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Top-ranked across global competitive programming platforms</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contests.map((c) => (
            <div key={c.title} className={`p-6 rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}>
              <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                <c.icon size={22} className={c.color} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{c.title}</h3>
              <p className="text-slate-400 text-sm">{c.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={`relative p-6 rounded-2xl border ${p.border} bg-slate-900/60 backdrop-blur-sm hover:scale-[1.02] hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer block`}
            >
              {/* Overlay — pointer-events-none so it never blocks clicks */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-2xl mb-1">{p.icon}</p>
                  <h3 className="text-white font-bold text-lg">{p.name}</h3>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-lg ${p.bg} ${p.text} font-semibold border ${p.border}`}>
                  {p.badge}
                </span>
              </div>

              <div className={`text-4xl font-black ${p.text} mb-1`}>{p.rating}</div>
              <p className="text-slate-500 text-xs mb-4">Highest Rating</p>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < p.stars ? p.text : 'text-slate-700'}
                    fill={i < p.stars ? 'currentColor' : 'none'}
                  />
                ))}
              </div>

              <p className="text-slate-400 text-xs leading-relaxed border-t border-slate-800 pt-4">{p.highlight}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}