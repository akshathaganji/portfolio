import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface MobileNavProps {
  navItems: { name: string; href: string }[];
  activeSection: string;
}

export default function MobileNav({ navItems, activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isOpen &&
        !target.closest('[data-mobile-nav]') &&
        !target.closest('[data-mobile-trigger]')
      ) {
        setIsOpen(false);
      }
    };

    // Close menu when user clicks a nav link
    const handleNavClick = () => {
      setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);

    // Add event listeners to all nav links
    const navLinks = document.querySelectorAll('[data-nav-link]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      document.removeEventListener('click', handleClickOutside);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, [isOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        data-mobile-trigger
        className="relative z-50 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-mobile-nav
            className="fixed inset-0 z-40 bg-white"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="p-4">
                <ul className="flex flex-col items-center space-y-8">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="w-full text-center"
                    >
                      <Link
                        data-nav-link
                        href={item.href}
                        className={`text-xl font-medium py-2 px-4 relative block
                          ${
                            activeSection === item.href.substring(1)
                              ? 'text-primary'
                              : 'text-gray-800'
                          }`}
                      >
                        {item.name}
                        {activeSection === item.href.substring(1) && (
                          <motion.span
                            layoutId="mobileUnderline"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mx-auto w-1/2"
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
