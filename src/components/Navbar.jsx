import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Share2, Languages, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ brandName = "XUtils", showNav = false, navLinks = [] }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh-CN' ? 'en-US' : 'zh-CN';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 glass shadow-md' : 'py-6 bg-transparent'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 200 48" className="transition-transform duration-300 group-hover:scale-105">
            <defs>
              <linearGradient id="g-brand" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
            <g transform="translate(0, 4)">
              <rect width="40" height="40" rx="10" fill="url(#g-brand)"/>
              <path d="M12 12l16 16M28 12L12 28" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            </g>
            <text x="50" y="34" fontFamily="Inter, Arial, sans-serif" fontWeight="900" fontSize="28" fill="var(--foreground)">
              X<tspan fill="#6366f1">Utils</tspan>
            </text>
          </svg>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 ml-auto mr-8" style={{ display: showNav ? 'flex' : 'none' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-all"
              style={{ 
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--muted-foreground)',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--muted-foreground)'}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-muted transition-all border border-transparent hover:border-border"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              padding: '0.375rem 0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid transparent',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--muted)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'transparent';
            }}
          >
            <Languages size={16} />
            <span>{i18n.language === 'zh-CN' ? 'EN' : '中文'}</span>
          </button>

          {/* Mobile Menu Toggle */}
          {showNav && (
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ padding: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showNav && (
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border overflow-hidden"
              style={{
                backgroundColor: 'var(--background)',
                borderTop: '1px solid var(--border)',
                overflow: 'hidden'
              }}
            >
              <div className="container py-6 flex flex-col gap-4" style={{
                padding: '1.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-lg font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      padding: '0.5rem 0',
                      textDecoration: 'none',
                      color: 'var(--foreground)'
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </nav>
  );
};

export default Navbar;
