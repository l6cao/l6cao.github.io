import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [language, setLanguage] = useState('en');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  // Sections within the home page
  const homeSubItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Research', to: 'research' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  // Top-level navigation items
  const navItems = [
    { name: 'Home', type: 'dropdown', items: homeSubItems },
    { name: 'CV', type: 'link', path: '/cv' },
    { name: 'Chat', type: 'coming-soon', message: 'Chat feature coming soon! Tune in for updates :D' },
    { name: 'More', type: 'coming-soon', message: 'More features yet to implement. Tune in for updates :D' },
    { name: 'Contact', type: 'scroll', to: 'contact' },
    // Commented out language toggle for future implementation
    /*
    { 
      name: language === 'en' ? '中文' : 'English', 
      type: 'language-toggle',
    }
    */
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? 'bg-primary/80 backdrop-blur-lg' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <span className="text-accent-green font-bold text-xl font-title">Linbo Cao</span>
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group flex items-center">
                {item.type === 'dropdown' ? (
                  <div 
                    className="
                      text-surface hover:text-accent-green
                      transition-colors duration-300
                      cursor-pointer text-sm flex items-center
                    "
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    <svg 
                      className="ml-1 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="
                            absolute top-full -left-4 mt-2
                            bg-black/90 backdrop-blur-xl
                            border border-white/20
                            rounded-md shadow-lg
                            py-2 w-25
                            z-50
                          "
                        >
                          {item.items.map((subItem) => (
                            <ScrollLink
                              key={subItem.name}
                              to={subItem.to}
                              smooth={true}
                              duration={500}
                              className="
                                block px-4 py-2
                                text-surface hover:text-accent-green
                                transition-colors duration-300
                                cursor-pointer text-sm
                              "
                            >
                              {subItem.name}
                            </ScrollLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.type === 'scroll' ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="
                      text-surface hover:text-accent-green
                      transition-colors duration-300
                      cursor-pointer text-sm flex items-center
                    "
                  >
                    {item.name}
                  </ScrollLink>
                ) : item.type === 'coming-soon' ? (
                  <div 
                    className="
                      text-surface hover:text-accent-green
                      transition-colors duration-300
                      cursor-pointer text-sm flex items-center
                    "
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    <svg 
                      className="ml-1 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                    
                    {/* Coming Soon Message */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="
                            absolute top-full -left-20 mt-2
                            bg-black/90 backdrop-blur-xl
                            border border-white/20
                            rounded-md shadow-lg
                            py-3 px-4 w-64
                            z-50
                          "
                        >
                          <p className="text-surface/80 text-sm">{item.message}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.type === 'language-toggle' ? (
                  <div
                    className="
                      text-surface hover:text-accent-green
                      transition-colors duration-300
                      cursor-pointer text-sm flex items-center
                    "
                    onClick={toggleLanguage}
                  >
                    {item.name}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="
                      text-surface hover:text-accent-green
                      transition-colors duration-300
                      cursor-pointer text-sm flex items-center
                    "
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-surface hover:text-accent-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary/95 backdrop-blur-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.type === 'dropdown' ? (
                    <>
                      <div 
                        className="
                          block px-3 py-2
                          text-surface hover:text-accent-green
                          transition-colors duration-300 font-medium
                          cursor-pointer text-sm
                        "
                      >
                        {item.name}
                      </div>
                      <div className="pl-4">
                        {item.items.map((subItem) => (
                          <ScrollLink
                            key={subItem.name}
                            to={subItem.to}
                            smooth={true}
                            duration={500}
                            className="
                              block px-3 py-2
                              text-surface/80 hover:text-accent-green
                              transition-colors duration-300
                              cursor-pointer text-sm
                            "
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </ScrollLink>
                        ))}
                      </div>
                    </>
                  ) : item.type === 'scroll' ? (
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      className="
                        block px-3 py-2
                        text-surface hover:text-accent-green
                        transition-colors duration-300
                        cursor-pointer text-sm
                      "
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </ScrollLink>
                  ) : item.type === 'coming-soon' ? (
                    <>
                      <div 
                        className="
                          block px-3 py-2
                          text-surface hover:text-accent-green
                          transition-colors duration-300 font-medium
                          cursor-pointer text-sm
                        "
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                      </div>
                      {activeDropdown === item.name && (
                        <div className="pl-4 px-3 py-2 text-surface/80 text-sm">
                          {item.message}
                        </div>
                      )}
                    </>
                  ) : item.type === 'language-toggle' ? (
                    <div
                      className="
                        block px-3 py-2
                        text-surface hover:text-accent-green
                        transition-colors duration-300
                        cursor-pointer text-sm
                      "
                      onClick={toggleLanguage}
                    >
                      {item.name}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className="
                        block px-3 py-2
                        text-surface hover:text-accent-green
                        transition-colors duration-300
                        cursor-pointer text-sm
                      "
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
