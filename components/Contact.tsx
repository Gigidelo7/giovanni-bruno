import React from 'react';
import { Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Decorative Code Bg */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none font-mono text-xs overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
             010101010100010110101010 function(booking) return true; 1010101
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for an Upgrade?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Prenota una consulenza specialistica. Analisi digitale del sorriso e piano di cura su misura.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
           <a 
             href="mailto:info@giovannibruno.it" 
             className="inline-flex items-center justify-center gap-2 bg-tech-blue hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-tech-blue/25"
           >
             Invia Email <Mail size={18} />
           </a>
           <a 
             href="https://instagram.com/gio1.7" 
             target="_blank"
             rel="noreferrer"
             className="inline-flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 hover:border-slate-500 text-white px-8 py-4 rounded-lg font-bold transition-all"
           >
             DM Instagram <Instagram size={18} />
           </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
         <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Dr. Giovanni Bruno. P.IVA 12345678900
         </div>
         
         <div className="flex gap-6">
            <a href="https://instagram.com/gio1.7" className="text-slate-400 hover:text-tech-blue transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-tech-blue transition-colors"><Linkedin size={20} /></a>
         </div>
      </div>
    </footer>
  );
};

export default Contact;