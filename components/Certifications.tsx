'use client';

export default function Certifications() {
  const certs = [
    {
      name: 'Microsoft Certified: Power Platform Solutions Architect',
      issuer: 'Microsoft',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    },
    {
      name: 'Microsoft Certified: Power Platform Fundamentals',
      issuer: 'Microsoft',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    },
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/40 max-w-xl mx-auto text-sm">
            Industry certifications validating expertise in cloud and enterprise platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {certs.map((c, i) => (
            <div key={i} className="flex items-center gap-4 border border-white/10 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.07)] p-5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 p-2">
                <img src={c.logo} alt={c.issuer} className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-white font-medium text-sm leading-snug">{c.name}</p>
                <p className="text-white/30 text-xs mt-1">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
