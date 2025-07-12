
'use client';

export default function Education() {
  const educationData = [
    {
      degree: 'Masters in Information Technology',
      school: 'Arizona State University',
      location: 'Tempe, AZ',
      period: 'Aug 2024 – May 2026',
      cgpa: '4.0/4.0',
      status: 'Current',
      logo: 'https://static.readdy.ai/image/2fbf82138adadc00bd27f8c5eec01ddf/8426411a782f0daba61235096a08a52e.png'
    },
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'JawaharLal Nehru Technological University',
      location: 'Hyderabad, INDIA',
      period: 'July 2020 – July 2024',
      cgpa: '8.53/10.0',
      status: 'Completed',
      logo: 'https://static.readdy.ai/image/2fbf82138adadc00bd27f8c5eec01ddf/7dd7902d7b4576cc1dacc31253a372d6.jfif'
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
          <div className="w-20 h-1 bg-white/30 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            My academic journey in computer science and information technology, building a strong foundation for my career.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="grid md:grid-cols-4 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center p-4">
                    <img 
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {edu.status}
                    </span>
                    <span className="text-white/60 text-sm">{edu.period}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-xl text-white/90 mb-2">{edu.school}</h4>
                  <p className="text-white/70 mb-4">{edu.location}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-white/90 font-semibold">CGPA: {edu.cgpa}</span>
                    </div>
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
