import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Moon, Sun, Menu, X, Code2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Check system pref
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="bg-tech-blue text-white p-1.5 rounded-lg">
             <Code2 size={20} />
          </div>
          <span className="hidden sm:inline">DR. BRUNO</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-tech-blue dark:hover:text-tech-blue transition-colors"
            >
              <span className="text-tech-blue/50 mr-1 font-mono">&lt;</span>
              {item.label}
              <span className="text-tech-blue/50 ml-1 font-mono">/&gt;</span>
            </a>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-600" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
             <button onClick={toggleTheme} className="p-2">
                {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-600" />}
             </button>
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
             {NAV_ITEMS.map(item => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 dark:text-slate-200 py-2 border-b border-slate-100 dark:border-slate-800"
                >
                  {item.label}
                </a>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;