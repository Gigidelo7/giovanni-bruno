import React from 'react';
import { REVIEWS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 px-4 bg-white dark:bg-tech-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-tech-blue font-mono text-sm block mb-2">03. FEEDBACK</span>
          Dicono dei Pazienti
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 relative">
              <Quote className="text-tech-blue/20 absolute top-4 right-4" size={40} />
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic mb-6 text-sm leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center border-t border-slate-200 dark:border-slate-700 pt-4">
                <span className="font-bold text-slate-800 dark:text-white">{review.patientName}</span>
                <span className="text-xs font-mono text-tech-blue bg-tech-blue/10 px-2 py-1 rounded">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;