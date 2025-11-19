import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-tech-blue font-mono text-lg block mb-2">01. SERVICES</span>
            Eccellenza Clinica & Tech
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Protocolli minimamente invasivi supportati dalle ultime tecnologie digitali. 
            Dal microscopio operatorio alla pianificazione implantare computer-guidata.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-xl hover:shadow-tech-blue/10 border border-slate-100 dark:border-slate-700 hover:border-tech-blue/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-tech-blue mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-tech-blue transition-colors">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;