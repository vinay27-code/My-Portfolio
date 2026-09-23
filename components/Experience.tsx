'use client';

import { motion, useInView, type Variants } from 'framer-motion';

import { useRef } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const hclResponsibilities = [
    'Built LLM-powered and agentic product features integrating Anthropic models through LangChain with structured tool and function calling, delivering 3 capabilities through iterative production releases over 6 weeks.',
    'Built and optimized a Retrieval Augmented Generation pipeline over enterprise data with an emphasis on correctness and safety, profiled the retrieval stack, and lifted field-level extraction accuracy from 40% to 85% across 120 fields.',
    'Wired MCP tool servers connecting agents to 5 enterprise REST APIs, replaced per-team connector rewrites with a shared TypeScript library, and cut new tool integration from 3 days to under 4 hours.',
    'Developed async Python FastAPI backend services backed by persistent PostgreSQL state, applied Pydantic v2 structured output validation and confidence scoring, and routed low-confidence responses for human review.',
    'Instrumented agent services with Amazon CloudWatch telemetry and Grafana dashboards capturing tool call latency, failure rates, and output anomalies, participated in on-call rotations, and debugged reliability issues in production.',
    'Applied Claude Code and GitHub Copilot for scaffolding, unit-test generation, debugging, and refactoring while independently reviewing generated code for correctness and maintainability across 3 shipped capabilities.'
  ];

  const hclTechnologies = ['Python', 'TypeScript', 'LangChain', 'RAG', 'MCP', 'FastAPI', 'PostgreSQL', 'Pydantic v2', 'Amazon CloudWatch', 'Grafana'];

  const responsibilities = [
    'Spearheaded full-stack development of 8+ production-ready web applications using React, TypeScript, Python, and Node.js, delivering clean maintainable code over a 2-year tenure',
    'Designed and consumed 23+ RESTful APIs with SQL database connections supporting real-time data exchange for machine learning-driven features; reduced UI regressions by 28% through CI/CD pipelines',
    'Established JWT-based authentication achieving 30% faster login; optimized front-end performance through lazy loading, memoization, and code-splitting reducing bandwidth usage by 27%',
    'Integrated AI-powered analytics into application workflows, collaborating with R&D teams to prototype, test, and iterate on new features',
    'Participated actively in Agile sprint planning, stand-ups, and retrospectives delivering 15+ features on schedule'
  ];

  const technologies = ['React', 'TypeScript', 'Python', 'Node.js', 'Java', 'SQL', 'REST APIs', 'JWT', 'CI/CD', 'Git'];

  return (
    <section id="experience" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/40 max-w-xl mx-auto text-sm">My professional journey building production software with modern technologies.</p>
        </motion.div>

        <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={stagger}>
          <motion.div variants={fadeUp} className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] shadow-[0_0_20px_rgba(255,255,255,0.07)] mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/10">Full Time</span>
              <span className="text-white/30 text-sm">May 2025 – Present</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Full Stack AI Developer</h3>
            <p className="text-white/60 mb-1">HCLTech</p>
            <p className="text-white/30 text-sm mb-8">Phoenix, AZ</p>
            <motion.div className="space-y-4 mb-8" variants={stagger}>
              {hclResponsibilities.map((r, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/30 mt-2.5 flex-shrink-0"></div>
                  <p className="text-white/60 leading-relaxed text-sm">{r}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex flex-wrap gap-2">
              {hclTechnologies.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/50 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] shadow-[0_0_20px_rgba(255,255,255,0.07)]">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/10">Full Time</span>
              <span className="text-white/30 text-sm">May 2022 – Jun 2024</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Software Engineer</h3>
            <p className="text-white/60 mb-1">SLS Solutions</p>
            <p className="text-white/30 text-sm mb-8">Hyderabad, India</p>
            <motion.div className="space-y-4 mb-8" variants={stagger}>
              {responsibilities.map((r, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/30 mt-2.5 flex-shrink-0"></div>
                  <p className="text-white/60 leading-relaxed text-sm">{r}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/50 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { num: '8+', label: 'Production Apps' },
              { num: '23+', label: 'APIs Integrated' },
              { num: '15+', label: 'Features Shipped' }
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(100,200,255,0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="border border-white/10 rounded-xl p-6 text-center bg-white/[0.02] shadow-[0_0_20px_rgba(255,255,255,0.07)]"
              >
                <div className="text-3xl font-bold text-white mb-1">{s.num}</div>
                <div className="text-white/40 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}