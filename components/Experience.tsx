
'use client';

export default function Experience() {
  const experienceData = [
    {
      title: 'Front-End Developer Intern',
      company: 'SLS Solutions',
      location: 'Vienna, VA (Remote)',
      period: 'Jan 2024 – Mar 2024',
      type: 'Internship',
      responsibilities: [
        'Developed responsive web interfaces using React.js, JavaScript, and TypeScript, following component-based architecture and best practices',
        'Built reusable UI components and styled with HTML5, CSS3, and Material-UI',
        'Utilized React Hooks and Context API for efficient state management and data flow',
        'Implemented client-side routing with React Router to build seamless SPA experiences',
        'Practiced Agile development with sprint planning, standups, and code reviews'
      ],
      technologies: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Material-UI', 'React Router']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <div className="w-20 h-1 bg-white/30 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            My professional journey in software development, gaining hands-on experience with modern technologies.
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400">
                    {exp.type}
                  </span>
                  <span className="text-white/60 text-sm">{exp.period}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <h4 className="text-xl text-white/90 mb-2">{exp.company}</h4>
                <p className="text-white/70 mb-6">{exp.location}</p>
                
                <div className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <div key={respIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/80 leading-relaxed">{resp}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Key Achievements</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-4">
                <i className="ri-code-s-slash-line w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Component Architecture</h4>
              <p className="text-white/70">Built reusable UI components following best practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-4">
                <i className="ri-smartphone-line w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Responsive Design</h4>
              <p className="text-white/70">Developed mobile-first responsive web interfaces</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-4">
                <i className="ri-team-line w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Agile Development</h4>
              <p className="text-white/70">Experienced in sprint planning and code reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
