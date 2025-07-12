
'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Python', level: 88 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'SQL', level: 90 }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 92 },
        { name: 'Material-UI', level: 88 },
        { name: 'React Router', level: 90 }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Flask', level: 82 },
        { name: 'FastAPI', level: 80 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'AWS', level: 85 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'WireShark', level: 75 },
        { name: 'PyCharm', level: 88 }
      ]
    }
  ];

  const techStackLogos = {
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    'Material-UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'React Router': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/reactrouter.svg',
    'pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    'Matplotlib': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/plotly.svg',
    'WireShark': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wireshark.svg',
    'PyCharm': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg',
    'IntelliJ': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
    'Eclipse': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/eclipseide.svg',
    'Visual Studio': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg'
  };

  const allSkills = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL', 'PostgreSQL',
    'React', 'Node.js', 'Flask', 'Material-UI', 'FastAPI', 'HTML5', 'CSS3',
    'Git', 'AWS', 'Docker', 'VS Code', 'React Router', 'pandas', 'NumPy',
    'Matplotlib', 'WireShark', 'PyCharm', 'IntelliJ', 'Eclipse', 'Visual Studio'
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="w-20 h-1 bg-white/30 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing digital experiences.
          </p>
        </div>

        {/* Enhanced Infinite Horizontal Scroll Animation */}
        <div className="mb-16 overflow-hidden py-12">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of skills */}
            {allSkills.map((skill, index) => (
              <div key={`skill-1-${index}`} className="flex-shrink-0 mx-6">
                <div className="bg-white/10 rounded-3xl px-8 py-8 flex flex-col items-center space-y-4 min-w-fit hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-2xl">
                    <img 
                      src={techStackLogos[skill as keyof typeof techStackLogos] || `https://via.placeholder.com/80/ffffff/000000?text=${skill.charAt(0)}`}
                      alt={skill}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-white font-semibold text-xl text-center">{skill}</span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {allSkills.map((skill, index) => (
              <div key={`skill-2-${index}`} className="flex-shrink-0 mx-6">
                <div className="bg-white/10 rounded-3xl px-8 py-8 flex flex-col items-center space-y-4 min-w-fit hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-2xl">
                    <img 
                      src={techStackLogos[skill as keyof typeof techStackLogos] || `https://via.placeholder.com/80/ffffff/000000?text=${skill.charAt(0)}`}
                      alt={skill}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-white font-semibold text-xl text-center">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="text-white/70 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-white/80 to-white/60 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">What I Bring to Your Project</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mx-auto mb-4">
                <i className="ri-code-line w-6 h-6 flex items-center justify-center text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Clean Code</h4>
              <p className="text-white/70">
                Writing maintainable, scalable, and well-documented code that follows best practices and industry standards.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mx-auto mb-4">
                <i className="ri-palette-line w-6 h-6 flex items-center justify-center text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">UI/UX Focus</h4>
              <p className="text-white/70">
                Creating intuitive, accessible, and visually appealing interfaces that provide excellent user experiences.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mx-auto mb-4">
                <i className="ri-rocket-line w-6 h-6 flex items-center justify-center text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Performance</h4>
              <p className="text-white/70">
                Optimizing applications for speed, efficiency, and scalability to ensure the best possible performance.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}
