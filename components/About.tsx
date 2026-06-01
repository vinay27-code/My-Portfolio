'use client';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-px bg-white/20 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/vinay.JPG"
                  alt="Vinay Babu Machha"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Subtle glow */}
              <div className="absolute -inset-1 bg-white/5 rounded-2xl blur-xl -z-10"></div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-white">
              Software Engineer who builds things that actually work in production.
            </h3>
            <p className="text-white/60 leading-relaxed">
              I recently completed my Master's in Information Technology at Arizona State University
              with a 4.0 GPA, and bring 2+ years of professional full-stack development experience
              from my co-op at SLS Solutions. I've shipped production applications across React,
              TypeScript, Node.js, Python, Java, and AWS.
            </p>
            <p className="text-white/60 leading-relaxed">
              Outside of work I've built two live AI-powered platforms from scratch — DevAssist AI
              (GPT-4o code review, RAG pipeline, Stripe billing) and FinSight AI (real-time financial
              data, anomaly detection, portfolio tracking), both deployed on AWS and serving real users.
            </p>
            <p className="text-white/60 leading-relaxed">
              Outside of tech you'll usually find me at the gym or exploring something new. Always
              open to exciting opportunities or just chatting with like-minded engineers.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['Full Stack Development', 'AI / GenAI Engineering', 'Cloud Architecture', 'Microsoft Dynamics 365'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
