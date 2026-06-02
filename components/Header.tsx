'use client';

import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconHome,
  IconUser,
  IconSchool,
  IconBriefcase,
  IconCode,
  IconRocket,
  IconCertificate,
  IconMail,
} from '@tabler/icons-react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const dockItems = [
    {
      title: 'Home',
      icon: <IconHome className="h-full w-full text-white/70" />,
      href: '#home',
    },
    {
      title: 'About',
      icon: <IconUser className="h-full w-full text-white/70" />,
      href: '#about',
    },
    {
      title: 'Education',
      icon: <IconSchool className="h-full w-full text-white/70" />,
      href: '#education',
    },
    {
      title: 'Experience',
      icon: <IconBriefcase className="h-full w-full text-white/70" />,
      href: '#experience',
    },
    {
      title: 'Skills',
      icon: <IconCode className="h-full w-full text-white/70" />,
      href: '#skills',
    },
    {
      title: 'Projects',
      icon: <IconRocket className="h-full w-full text-white/70" />,
      href: '#projects',
    },
    {
      title: 'Certifications',
      icon: <IconCertificate className="h-full w-full text-white/70" />,
      href: '#certifications',
    },
    {
      title: 'Contact',
      icon: <IconMail className="h-full w-full text-white/70" />,
      href: '#contact',
    },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock
        items={dockItems}
        desktopClassName="bg-transparent border border-white/10 backdrop-blur-sm"
        mobileClassName="bg-transparent border border-white/10 backdrop-blur-sm"
      />
    </div>
  );
}
