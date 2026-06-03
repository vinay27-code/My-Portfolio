'use client';

import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconHome, IconUser, IconSchool, IconBriefcase,
  IconCode, IconRocket, IconCertificate, IconMail,
} from '@tabler/icons-react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const navItems = [
    { title: 'Home', id: 'home', icon: IconHome },
    { title: 'About', id: 'about', icon: IconUser },
    { title: 'Education', id: 'education', icon: IconSchool },
    { title: 'Experience', id: 'experience', icon: IconBriefcase },
    { title: 'Skills', id: 'skills', icon: IconCode },
    { title: 'Projects', id: 'projects', icon: IconRocket },
    { title: 'Certifications', id: 'certifications', icon: IconCertificate },
    { title: 'Contact', id: 'contact', icon: IconMail },
  ];

  const dockItems = navItems.map(item => ({
    title: item.title,
    href: `#${item.id}`,
    icon: (
      <item.icon
        className="h-full w-full transition-colors duration-200"
        style={{
          color: activeSection === item.id ? '#7dd3fc' : 'rgba(255,255,255,0.6)'
        }}
      />
    ),
  }));

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock
        items={dockItems}
        desktopClassName="bg-transparent border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(100,200,255,0.2)]"
        mobileClassName="bg-transparent border border-white/10 backdrop-blur-sm"
      />
    </div>
  );
}
