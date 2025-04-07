import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

export default function RightNavigation() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Semi-transparent background layer */}
      <motion.div
        className={`
          absolute right-0 rounded-l-xl bg-primary/80 backdrop-blur-sm
          ${isHovered ? 'border border-white/10' : ''}
        `}
        initial={{ 
          width: '48px',
          height: '100%',
          right: '-8px',
        }}
        animate={{ 
          width: isHovered ? '160px' : '48px',
          right: isHovered ? '-12px' : '-8px',
        }}
        transition={{ duration: 0.3 }}
        style={{
          top: '-40px',
          bottom: '-40px',
        }}
      />

      <div className="flex flex-col items-end gap-6 relative z-10 py-4 -translate-y-10">
        {sections.map(({ id, label }) => (
          <div key={id} className="group relative flex items-center">
            <ScrollLink
              to={id}
              smooth={true}
              duration={1200}
              spy={true}
              className="cursor-pointer flex items-center"
            >
              {/* Label tooltip - Now part of the clickable area */}
              <motion.div 
                className="
                  absolute right-full mr-8
                  text-sm text-surface
                  whitespace-nowrap
                  text-right
                  font-medium
                  cursor-pointer
                  group-hover:text-accent-green
                  transition-colors duration-300
                "
                initial={{ opacity: 0, x: 10 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
              >
                {label}
              </motion.div>

              {/* Dot */}
              <motion.div 
                className={`
                  w-1.5 h-1.5 rounded-full 
                  ${activeSection === id ? 'bg-surface' : 'bg-surface/40'}
                  transition-colors duration-300
                  group-hover:bg-accent-green
                `}
              />
              
              {/* Animated line */}
              <motion.div 
                className={`
                  h-0.5 ml-1
                  ${activeSection === id ? 'bg-surface' : 'bg-surface/40'}
                  transition-colors duration-300
                  group-hover:bg-accent-green
                `}
                initial={{ width: '8px' }}
                animate={{ 
                  width: isHovered ? '24px' : '8px',
                }}
                transition={{ duration: 0.3 }}
              />
            </ScrollLink>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 