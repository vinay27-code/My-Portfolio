
'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-20 h-1 bg-white/30 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Hey! I'm Vinay Babu Machha, a web developer who loves building clean, responsive, and user-friendly interfaces using React, TypeScript, JavaScript, HTML, and CSS.</h3>
              <p className="text-white/70 leading-relaxed">I'm currently focused on learning full-stack development and growing my skills one project at a time. I enjoy solving problems, working with modern web tools, and turning ideas into working applications. I'm also diving deeper into cloud technologies and backend development to round out my skill set.</p>
              <p className="text-white/70 leading-relaxed">Outside of tech, you'll usually find me at the gym or exploring something new to learn. I'm always open to exciting opportunities, collaborations, or just chatting with like-minded developers.</p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-white/90">Frontend Development</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-white/90">UI/UX Design</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-white/90">Full Stack</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                <img 
                  src="https://static.readdy.ai/image/2fbf82138adadc00bd27f8c5eec01ddf/703ce7014b387e945a8195fe10442ebe.png"
                  alt="Vinay Babu Machha"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-white/20 to-white/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
