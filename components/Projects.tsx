'use client';

import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      num: '01',
      title: 'DevAssist AI',
      subtitle: 'Full-Stack AI SaaS Platform',
      category: 'AI / Full Stack',
      description: 'Production SaaS platform with GPT-4o-powered code review, RAG pipeline for codebase intelligence, Kanban project management, multi-tenant architecture, JWT authentication, RBAC, and Stripe billing. Deployed on AWS ECS Fargate with CI/CD via GitHub Actions.',
      metrics: ['99.9% uptime', '60% effort reduction', '1,000+ docs indexed'],
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'PGVector', 'GPT-4o', 'LangChain', 'RAG', 'Stripe', 'AWS'],
      liveUrl: 'https://d14ibyhkpahx28.cloudfront.net',
      githubUrl: 'https://github.com/vinay27-code/devassist-ai',
    },
    {
      num: '02',
      title: 'FinSight AI',
      subtitle: 'Real-Time Financial Intelligence Dashboard',
      category: 'AI / FinTech',
      description: 'Real-time financial dashboard streaming live stock and crypto prices via WebSockets with sub-100ms latency. GPT-4o anomaly detection with severity classification, portfolio P&L tracking with live mark-to-market valuation, and Redis caching reducing API calls by 80%.',
      metrics: ['Sub-100ms latency', '80% API reduction', 'Live market data'],
      tech: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'PostgreSQL', 'Redis', 'GPT-4o', 'AWS ECS Fargate'],
      liveUrl: 'https://d3912z30eazd41.cloudfront.net',
      githubUrl: 'https://github.com/vinay27-code/finsight-ai',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/40 max-w-xl mx-auto text-sm">
            Production AI-powered platforms built from scratch and deployed on AWS, serving real users.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.num} className="border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.07)] p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-white/20 font-bold text-2xl">{p.num}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{p.title}</h3>
                      <span className="text-white/30 text-xs">{p.subtitle} · {p.category}</span>
                    </div>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-5">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.metrics.map((m, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs">
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.07)] text-white/40 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex lg:flex-col gap-3 flex-shrink-0">
                  <Link href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#080808] rounded-xl shadow-[0_0_20px_rgba(100,200,255,0.2)] text-sm font-semibold hover:bg-white/90 transition-all whitespace-nowrap">
                    <i className="ri-external-link-line"></i>
                    Live Demo
                  </Link>
                  <Link href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white/70 rounded-xl text-sm hover:bg-white/10 transition-all whitespace-nowrap">
                    <i className="ri-github-line"></i>
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.07)] p-8 bg-white/[0.02]">
          <p className="text-white/40 text-sm mb-4">More projects and experiments on GitHub</p>
          <Link href="https://github.com/vinay27-code" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white/60 rounded-xl text-sm hover:bg-white/10 transition-all">
            <i className="ri-github-line"></i>
            Visit My GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
