import { ExternalLink, Calendar, GitBranch } from "lucide-react";

const projects = [
  {
    name: "Spott",
    date: "Apr 2026",
    tagline: "AI-Powered Event Management Platform",
    description:
      "A full-stack event management platform with real-time data sync via Convex, AI event generation using the Claude API, QR-code ticketing, and a live organizer dashboard. Features Clerk-based Free/Pro subscriptions and location-based event filtering across India.",
    points: [
      "AI event generator using Claude API — generates title, description, and category from a prompt",
      "QR code tickets with a real-time scanner for on-site attendee check-in",
      "Organizer dashboard with live capacity, check-in rate, revenue stats, and CSV export",
      "Clerk Free/Pro subscription system with location-based filtering by state and city across India",
    ],
    stack: [
      "Next.js 14",
      "Convex",
      "Clerk",
      "Claude API",
      "TailwindCSS",
      "shadcn/ui",
      "Zod",
      "Unsplash API",
    ],
    color: "from-violet-600 to-indigo-600",
    border: "border-violet-500/30",
    accent: "bg-violet-500/10",
    accentText: "text-violet-400",
    image:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/rajdeepietlko27/soptt", // 🔁 Replace
    link: "https://soptt.vercel.app/", // 🔁 Replace
  },

  {
    name: "Prept",
    date: "Apr 2026",
    tagline: "AI-Powered Mock Interview Platform",
    description:
      "A full-stack mock interview platform with AI-powered feedback generation using Gemini. Features automatic transcription via Stream, credit-based booking, and real-time video sessions with live chat, auto-recording, and post-call AI analysis.",
    points: [
      "AI feedback generation on technical skills, communication, and problem-solving",
      "Stream Video Chat SDK for real-time interviews with live chat and auto-recording",
      "Credit-based booking system with Prisma + PostgreSQL backend",
      "Arcjet security and Resend transactional emails",
    ],
    stack: [
      "Next.js",
      "Gemini AI",
      "Stream",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "TailwindCSS",
    ],
    color: "from-teal-600 to-green-600",
    border: "border-teal-500/30",
    accent: "bg-teal-500/10",
    accentText: "text-teal-400",
    image: "/prept.png",
    github: "https://github.com/rajdeepietlko27/Prept", // 🔁 Replace with your real GitHub link
    link: "https://prept-pied.vercel.app",
  },
  {
    name: "JOBSCO",
    date: "Mar 2026",
    tagline: "Full-Stack Job Portal",
    description:
      "A full-stack job portal with role-based access for recruiters and candidates, featuring smart filtering and application tracking. Integrated Stripe subscription payments with webhook handling for premium memberships and Clerk authentication with full onboarding flow and cascade delete logic.",
    points: [
      "Role-based access control for recruiters and candidates",
      "Stripe subscriptions with webhook handling for premium memberships",
      "Clerk authentication with onboarding flow and profile management",
      "Deployed on Vercel with Next.js 14 Server Actions",
    ],
    stack: ["Next.js 14", "MongoDB", "Stripe", "Clerk", "TailwindCSS"],
    color: "from-blue-600 to-cyan-600",
    border: "border-blue-500/30",
    accent: "bg-blue-500/10",
    accentText: "text-blue-400",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/rajdeepietlko27/JOBSCO", // 🔁 Replace with your real GitHub link
    link: "https://jobsco-ochre.vercel.app/", // 🔁 Replace with your real live link
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            What I've Built
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-balance">
            Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto text-balance">
            Production-ready applications built with modern tech stacks
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`group relative bg-slate-950/60 border ${p.border} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] reveal-on-scroll glow-card`}
            >
              {/* ✅ pointer-events-none so overlay never blocks clicks */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              />

              <div
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="lg:w-2/5 relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-64 lg:h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* ✅ pointer-events-none on image overlays too */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-20 pointer-events-none`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent lg:from-transparent lg:via-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${p.accent} border ${p.border} rounded-full text-xs ${p.accentText} font-semibold backdrop-blur-sm`}
                    >
                      <Calendar size={11} />
                      {p.date}
                    </span>
                  </div>
                </div>

                <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <p className={`text-sm font-semibold ${p.accentText} mb-2`}>
                      {p.tagline}
                    </p>
                    <h3 className="text-3xl font-black text-white mb-4">
                      {p.name}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-sm text-slate-400"
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full ${p.accentText} flex-shrink-0`}
                          style={{ background: "currentColor" }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium rounded-lg ${p.accent} ${p.accentText} border ${p.border}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 relative z-10">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-sm rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                      >
                        <GitBranch size={16} />
                        View Code
                      </a>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${p.color} text-white text-sm rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg cursor-pointer`}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
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
