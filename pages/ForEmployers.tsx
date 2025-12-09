import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { EMPLOYER_INFO } from '../data/content';
import { CheckCircle } from 'lucide-react';

export const ForEmployers: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-800 text-white py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Finden Sie die Experten, die Ihre Technologie verstehen.</h1>
              <p className="text-xl text-blue-100 mb-8">
                 Spezialisierte Personalgewinnung für die Elektrotechnik-Branche. 
                 Effizienter als Generalisten-Portale, präziser als Social Media.
              </p>
              <Button variant="secondary" size="lg">Jetzt Inserat aufgeben</Button>
            </div>
            <div className="bg-blue-700 p-8 rounded-lg shadow-lg border border-blue-600">
                <h3 className="font-bold text-xl mb-4">Warum elektrotechnik-stellenangebote.de?</h3>
                <ul className="space-y-3">
                   {[
                     "100% Fokus auf Elektrotechnik", 
                     "Zugriff auf 15.000+ Kandidatenprofile", 
                     "KI-gestützte Matching-Technologie", 
                     "Google for Jobs Integration inklusive"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center">
                       <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                       <span>{item}</span>
                     </li>
                   ))}
                </ul>
            </div>
         </div>
      </div>

      <Section title="Recruiting im Wandel" background="white">
         <div className="prose prose-lg prose-slate max-w-4xl mx-auto">
            {EMPLOYER_INFO}
         </div>
      </Section>

      <Section title="Unsere Preismodelle" background="light">
         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
               <h3 className="text-xl font-bold text-slate-900">Standard</h3>
               <div className="my-4 text-3xl font-bold text-slate-900">299€ <span className="text-sm font-normal text-slate-500">/ 30 Tage</span></div>
               <p className="text-slate-600 text-sm mb-6">Perfekt für einzelne Vakanzen im Handwerk.</p>
               <Button variant="outline" className="w-full">Wählen</Button>
            </div>
             {/* Pro */}
             <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600 relative">
               <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Beliebt</div>
               <h3 className="text-xl font-bold text-slate-900">Professional</h3>
               <div className="my-4 text-3xl font-bold text-slate-900">499€ <span className="text-sm font-normal text-slate-500">/ 60 Tage</span></div>
               <p className="text-slate-600 text-sm mb-6">Inkl. Logo im Header & Refresh alle 7 Tage.</p>
               <Button variant="primary" className="w-full">Wählen</Button>
            </div>
             {/* Enterprise */}
             <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
               <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
               <div className="my-4 text-3xl font-bold text-slate-900">Individuell</div>
               <p className="text-slate-600 text-sm mb-6">Flatrate, Schnittstellen (API) & Active Sourcing.</p>
               <Button variant="outline" className="w-full">Kontaktieren</Button>
            </div>
         </div>
      </Section>
    </div>
  );
};