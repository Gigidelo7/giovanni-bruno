import React from 'react';
import { LOCATIONS } from '../constants';
import { MapPin, ExternalLink } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <span className="text-tech-blue font-mono text-sm mb-2 block">02. NETWORK</span>
                <h2 className="text-3xl font-bold">Dove mi trovi</h2>
            </div>
            <div className="h-px bg-slate-300 dark:bg-slate-700 flex-1 ml-8 hidden md:block mb-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {LOCATIONS.map((loc, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <MapPin size={60} />
                    </div>
                    <h3 className="text-4xl font-bold text-slate-200 dark:text-slate-700 absolute -bottom-2 -right-2 select-none">
                        0{idx + 1}
                    </h3>
                    
                    <div className="relative z-10">
                        <div className="w-10 h-10 bg-tech-blue rounded-full flex items-center justify-center text-white mb-4">
                            <span className="font-mono font-bold">{loc.city.substring(0, 2).toUpperCase()}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{loc.city}</h3>
                        <p className="text-tech-blue font-medium text-sm mb-4">{loc.clinicName}</p>
                        <a href="#" className="inline-flex items-center text-sm text-slate-500 hover:text-tech-blue transition-colors gap-1">
                            Apri Mappa <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;