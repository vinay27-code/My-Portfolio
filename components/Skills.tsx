'use client';

export default function Skills() {
  const logos: Record<string, string> = {
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  };

  const allSkills = Object.keys(logos);

  const categories = [
    { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'SQL', 'C++'] },
    { title: 'Frontend', skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Next.js'] },
    { title: 'Backend & Databases', skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { title: 'AI & Cloud', skills: ['GPT-4o', 'LangChain', 'RAG', 'TensorFlow', 'PyTorch', 'AWS', 'Azure', 'Docker', 'CI/CD'] },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/40 max-w-xl mx-auto text-sm">
            Technologies and tools I work with to build production-grade applications.
          </p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden mb-14">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center gap-2 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 hover:bg-white/[0.06] transition-all cursor-default">
                <img
                  src={logos[skill]}
                  alt={skill}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-white/50 text-xs">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, j) => (
                  <span key={j} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm">
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
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
