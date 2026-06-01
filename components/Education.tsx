'use client';

export default function Education() {
  const educationData = [
    {
      degree: 'Master of Information Technology',
      school: 'Arizona State University',
      location: 'Tempe, AZ',
      period: 'Aug 2024 – May 2026',
      cgpa: '4.0 / 4.0',
      status: 'Current',
      logo: 'https://static.readdy.ai/image/2fbf82138adadc00bd27f8c5eec01ddf/8426411a782f0daba61235096a08a52e.png'
    },
    {
      degree: 'Bachelor of Technology, Computer Science and Engineering',
      school: 'Jawaharlal Nehru Technological University',
      location: 'Hyderabad, India',
      period: 'Jul 2020 – Jul 2024',
      cgpa: '8.53 / 10.0 — Gold Medal, Top 2%',
      status: 'Completed',
      logo: 'https://static.readdy.ai/image/2fbf82138adadc00bd27f8c5eec01ddf/7dd7902d7b4576cc1dacc31253a372d6.jfif'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/40 max-w-xl mx-auto text-sm">
            Academic foundation in computer science and information technology.
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 p-3">
                  <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      edu.status === 'Current'
                        ? 'bg-green-500/15 text-green-400 border border-green-500/20'
                        : 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                    }`}>
                      {edu.status}
                    </span>
                    <span className="text-white/30 text-sm">{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-white/60 mb-1">{edu.school}</p>
                  <p className="text-white/30 text-sm mb-3">{edu.location}</p>
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm">
                    {edu.cgpa}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
