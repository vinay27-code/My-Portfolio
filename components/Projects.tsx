
'use client';

import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Swiggy Clone',
      description: 'A full-featured food delivery application clone built with React, featuring restaurant listings, menu browsing, cart functionality, and order management with a modern, responsive UI.',
      githubUrl: 'https://github.com/vinay27-code/swiggy-clone-using-React.git',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Material-UI'],
      category: 'Web Application'
    },
    {
      id: 2,
      title: 'Deep Learning Skin Lesion Classification',
      description: 'Advanced machine learning project implementing SMOTE technique for improved skin lesion classification using deep learning algorithms, achieving enhanced accuracy in medical image analysis.',
      githubUrl: 'https://github.com/vinay27-code/Deep-Learning-with-SMOTE-for-Improved-Skin-Lesion-Classification.git',
      technologies: ['Python', 'TensorFlow', 'Deep Learning', 'SMOTE', 'Medical AI'],
      category: 'Machine Learning'
    },
    {
      id: 3,
      title: 'Crypto Rankings Viewer',
      description: 'Real-time cryptocurrency tracking application that displays current market rankings, prices, and trends with interactive charts and comprehensive market data visualization.',
      githubUrl: 'https://github.com/vinay27-code/crypto-rankings-viewer.git',
      technologies: ['React', 'JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
      category: 'Web Application'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Projects</h2>
          <div className="w-20 h-1 bg-white/30 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in React, TypeScript, and full-stack development.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <span className="text-white/60 text-sm">{project.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm font-medium border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 lg:flex-col lg:min-w-fit">
                  <Link 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 border border-white/20 hover:border-white/40 whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-github-line w-5 h-5 flex items-center justify-center text-lg"></i>
                    <span className="font-medium">View Code</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-6">
              <i className="ri-code-box-line w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">More Projects Coming Soon</h3>
            <p className="text-white/70 max-w-md mx-auto mb-6">
              I'm constantly working on new projects and learning new technologies. Check my GitHub for the latest updates!
            </p>
            <Link 
              href="https://github.com/vinay27-code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 cursor-pointer"
            >
              <i className="ri-github-line w-5 h-5 flex items-center justify-center text-lg"></i>
              <span className="font-medium">Visit My GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
