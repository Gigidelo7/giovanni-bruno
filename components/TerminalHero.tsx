import React, { useState, useEffect } from 'react';
import { BIO_TEXT } from '../constants';
import { Terminal, ChevronRight, MapPin, Instagram } from 'lucide-react';

const TerminalHero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = BIO_TEXT.trim();

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section id="about" className="relative pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-10 dark:opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-tech-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-blue/10 text-tech-blue text-sm font-mono border border-tech-blue/20">
              <span className="w-2 h-2 rounded-full bg-tech-blue animate-pulse"></span>
              System Online: V.2.0.24
           </div>
           
           <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
             Dr. Giovanni <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-indigo-500">Bruno</span>
           </h1>
           
           <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light">
             Odontoiatra. Chirurgo Orale. <span className="font-mono text-tech-blue">Digital Native.</span>
           </h2>

           <p className="text-slate-600 dark:text-slate-400 max-w-lg">
             L'odontoiatria moderna incontra la precisione digitale. Specializzato in chirurgia avanzata e riabilitazioni complesse, opero con protocolli innovativi per garantire estetica e funzione.
           </p>

           <div className="flex flex-wrap gap-4 pt-4">
             <a href="#contact" className="px-6 py-3 bg-tech-blue hover:bg-cyan-600 text-white font-medium rounded-lg shadow-lg shadow-tech-blue/25 transition-all transform hover:-translate-y-1">
               Prenota Visita
             </a>
             <a href="https://instagram.com/gio1.7" target="_blank" rel="noreferrer" className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-tech-blue text-slate-700 dark:text-slate-200 rounded-lg flex items-center gap-2 transition-all group">
               <Instagram size={20} className="group-hover:text-pink-500 transition-colors" />
               <span>@gio1.7</span>
             </a>
           </div>

           <div className="flex items-center gap-4 text-sm text-slate-500 font-mono pt-4">
             <MapPin size={16} />
             <span>Verona</span>
             <span className="text-tech-blue">•</span>
             <span>Merano</span>
             <span className="text-tech-blue">•</span>
             <span>Firenze</span>
           </div>
        </div>

        {/* Terminal Window */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-tech-blue to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-slate-400 font-mono flex items-center gap-2">
                <Terminal size={12} />
                user@giovanni-bruno:~/profile
              </div>
            </div>
            <div className="p-6 font-mono text-sm md:text-base text-slate-300 min-h-[300px] overflow-y-auto">
               <div className="mb-2 text-green-400">$ cat bio.json</div>
               <pre className="whitespace-pre-wrap text-blue-300">
                 {text}
                 <span className="animate-cursor-blink inline-block w-2 h-5 bg-tech-blue ml-1 align-middle"></span>
               </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TerminalHero;