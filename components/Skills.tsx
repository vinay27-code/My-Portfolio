'use client';

import { useRef, useEffect, useState } from 'react';

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const logos: Record<string, string> = {
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    'GCP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  };

  const allSkills = Object.keys(logos);

  const categories = [
    { title: 'Languages', skills: ['Python', 'Java 21', 'TypeScript', 'JavaScript', 'SQL', 'HTML5', 'CSS3'] },
    { title: 'Agentic AI & Retrieval', skills: ['Anthropic Claude', 'OpenAI API', 'Gemini API', 'LangChain', 'LangGraph', 'RAG', 'MCP', 'Tool Calling', 'Structured Outputs', 'pgvector', 'Supabase'] },
    { title: 'Backend & Frontend', skills: ['Spring Boot 3', 'FastAPI', 'Node.js', 'REST APIs', 'Microservices', 'Pydantic v2', 'React', 'Angular 18', 'Next.js', 'Redux', 'Tailwind CSS'] },
    { title: 'Data, Cloud & DevOps', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Apache Kafka', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD', 'Grafana'] },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/40 max-w-xl mx-auto text-sm">
            Technologies and tools I use across full-stack engineering, agentic AI, distributed systems, and cloud infrastructure.
          </p>
        </div>

        <div className="overflow-hidden mb-14">
          <div
            className="flex gap-6 whitespace-nowrap"
            style={{
              animation: isVisible ? 'marquee 30s linear infinite' : 'none',
            }}
          >
            {[...allSkills, ...allSkills].map((skill, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center gap-2 bg-white/[0.03] border border-white/10 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.07)] px-5 py-4 hover:bg-white/[0.06] transition-colors cursor-default">
                <img
                  src={logos[skill]}
                  alt={skill}
                  loading="lazy"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-white/50 text-xs">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="border border-white/10 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.07)] p-6 bg-white/[0.02]">
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, j) => (
                  <span key={j} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.07)] text-white/70 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        div:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
