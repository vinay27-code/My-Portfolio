'use client';

export default function Copyright() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-[#080808]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-sm">© {new Date().getFullYear()} Vinay Babu Machha. All rights reserved.</p>
        <div className="flex gap-4">
          {[
            { href: 'https://github.com/vinay27-code', icon: 'ri-github-line' },
            { href: 'https://linkedin.com/in/vinaybabumachha', icon: 'ri-linkedin-line' },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              className="text-white/20 hover:text-white/50 transition-colors">
              <i className={`${s.icon} text-lg`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
