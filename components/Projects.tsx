'use client';

import { motion, useInView, type Variants } from 'framer-motion';

import Link from 'next/link';
import { useRef } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      num: '01',
      title: 'LegacyForge',
      subtitle: 'Agentic AI Legacy Java Migration Platform',
      category: 'Agentic AI / Full Stack',
      description: 'Agentic AI platform that analyzes legacy Java repositories, embeds source files in pgvector for semantic search, generates phased migration plans, runs parallel LLM agents to produce Spring Boot 3 and Angular 18 equivalents, validates generated Java, and closes dependency gaps through a self-healing feedback loop.',
      metrics: ['208 artifacts generated', '$0.06 OpenAI spend', '6 parallel LLM agents'],
      tech: ['Java 21', 'Spring Boot 3', 'Angular 18', 'pgvector', 'OpenAI', 'Supabase', 'GCP Cloud Run', 'Docker'],
      liveUrl: 'https://legacyforge.vercel.app',
      githubUrl: 'https://github.com/vinay27-code/legacyforge',
    },
    {
      num: '02',
      title: 'DocuStream',
      subtitle: 'LLM-Powered Document Intelligence Platform',
      category: 'AI / Backend',
      description: 'Local LLM-powered document processing platform that classifies invoices, purchase orders, and contracts, extracts structured fields, scores confidence, routes low-confidence results to human review, and evaluates field-level extraction accuracy against ground truth.',
      metrics: ['95% extraction accuracy', '120 evaluated fields', '20 automated tests'],
      tech: ['Python', 'FastAPI', 'Ollama', 'PostgreSQL', 'Pydantic', 'Docker', 'Pytest'],
      githubUrl: 'https://github.com/vinay27-code/docustream',
    },
    {
      num: '03',
      title: 'PulseFlow',
      subtitle: 'Real-Time Data Intelligence Platform',
      category: 'Data / Distributed Systems',
      description: 'Production-style event streaming pipeline that ingests, validates, deduplicates, and analyzes high-volume e-commerce events in real time using Kafka, PostgreSQL, dbt, FastAPI, and Grafana, with dead-letter queue handling and at-least-once delivery.',
      metrics: ['1M events processed', '405 events/sec', '98.97% valid rate'],
      tech: ['Python', 'Kafka', 'PostgreSQL', 'dbt', 'FastAPI', 'Grafana', 'Docker', 'Pydantic'],
      githubUrl: 'https://github.com/vinay27-code/pulseflow',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/40 max-w-xl mx-auto text-sm">
            Production-style systems spanning agentic AI, document intelligence, and distributed data engineering.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          {projects.map((p) => (
            <motion.div
              key={p.num}
              variants={fadeUp}
              whileHover={{
                scale: 1.01,
                rotateX: 1,
                rotateY: 1,
                boxShadow: '0 0 30px rgba(100,200,255,0.15)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] shadow-[0_0_20px_rgba(255,255,255,0.07)] cursor-default"
              style={{ transformStyle: 'preserve-3d' }}
            >
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
                      <span key={i} className="px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded-lg text-white/40 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex lg:flex-col gap-3 flex-shrink-0">
                  {'liveUrl' in p && p.liveUrl && (
                    <Link href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#080808] rounded-xl text-sm font-semibold hover:bg-white/90 transition-all whitespace-nowrap shadow-[0_0_20px_rgba(100,200,255,0.2)]">
                      <i className="ri-external-link-line"></i>
                      Live Demo
                    </Link>
                  )}
                  <Link href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white/70 rounded-xl text-sm hover:bg-white/10 transition-all whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.07)]">
                    <i className="ri-github-line"></i>
                    View Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="mt-8 text-center border border-white/10 rounded-2xl p-8 bg-white/[0.02] shadow-[0_0_20px_rgba(255,255,255,0.07)]"
        >
          <p className="text-white/40 text-sm mb-4">More projects and experiments on GitHub</p>
          <Link href="https://github.com/vinay27-code" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white/60 rounded-xl text-sm hover:bg-white/10 transition-all">
            <i className="ri-github-line"></i>
            Visit My GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
