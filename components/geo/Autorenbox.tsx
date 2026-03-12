// HR-UPDATER: v1.0
import React from 'react';

const Autorenbox: React.FC = () => {
  return (
    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mt-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sky-700 flex items-center justify-center text-white text-xl font-bold ring-2 ring-sky-600/30">
          TS
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-slate-900">Thomas Sander</h3>
          <p className="text-sm text-slate-500 mb-2">Gründer & Geschäftsführer, Social Media Venture GmbH</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Thomas Sander ist der Gründer von elektrotechnik-stellenangebote.de. Mit jahrelanger Erfahrung im
            Bereich Elektrotechnik und Personalwesen hat er dieses spezialisierte Jobportal
            ins Leben gerufen, um Arbeitgeber und qualifizierte Fachkräfte zusammenzubringen.
          </p>
          <div className="mt-3 flex flex-wrap gap-3 justify-center sm:justify-start">
            <a href="/#/autor/thomas-sander" className="text-sky-600 hover:text-sky-700 text-sm font-medium underline">
              Mehr über den Autor
            </a>
            <a href="https://de.linkedin.com/in/thomas-sander-520676303" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 text-sm font-medium underline">
              LinkedIn-Profil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autorenbox;
