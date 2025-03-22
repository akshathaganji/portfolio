'use client';

import Link from 'next/link';
import { AnimatedElement } from './ui/animated-element';
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import MobileNav from './mobile-nav';

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Use useMemo to prevent recreating navItems on each render
  const navItems = useMemo(() => [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ], []);

  // Handle scroll events to update active section and navbar styling
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      setScrolled(window.scrollY > 20);

      // Find active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  return (
    <header className={`fixed top-0 left-0 w-full py-4 px-4 md:px-8 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <AnimatedElement type="slideIn" direction="left">
          <Link href="/" className="text-xl md:text-2xl font-medium text-primary">
            Akshatha Ganji
          </Link>
        </AnimatedElement>

        {/* Desktop Navigation */}
        <nav className="hidden md:block bg-white/80 backdrop-blur-sm shadow-sm rounded-full px-4 py-2">
          <ul className="flex gap-4 md:gap-8">
            {navItems.map((item, index) => (
              <AnimatedElement
                key={item.name}
                type="slideIn"
                direction="down"
                delay={index * 0.1}
              >
                <li>
                  <Link
                    href={item.href}
                    className={`text-sm md:text-base font-medium transition-colors duration-200 relative px-2 py-1
                      ${activeSection === item.href.substring(1)
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                      }`}
                  >
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <motion.span
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-primary rounded-full"
                        layoutId="underline"
                      />
                    )}
                  </Link>
                </li>
              </AnimatedElement>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav navItems={navItems} activeSection={activeSection} />
      </div>
    </header>
  );
}
