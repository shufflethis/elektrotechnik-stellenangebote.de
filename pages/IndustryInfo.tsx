import React from 'react';
import { Section } from '../components/Section';
import { INDUSTRY_TEXT } from '../data/content';

export const IndustryInfo: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Branchenwissen: Elektrotechnik</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Trends, Entwicklungen und Zukunftsperspektiven in Deutschlands Schlüsselindustrie.
          </p>
        </div>
      </div>

      <Section background="white">
        <article className="prose prose-lg prose-slate max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Ein Sektor im Wandel</h2>
          {INDUSTRY_TEXT}
          
          <div className="my-12 p-6 bg-slate-100 rounded-xl border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Zukunftstrend: IoT und Smart Grid</h3>
            <p className="text-slate-700">
              Die Verschmelzung von klassischer Elektrotechnik und Informatik ist unaufhaltsam. Wer heute Kompetenzen 
              in beiden Welten mitbringt (z.B. Elektrotechnik-Studium + Python-Kenntnisse), gehört zu den gefragtesten 
              Experten auf dem Markt.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Regionale Schwerpunkte</h3>
          <p className="text-slate-700 mb-4">
            Während in Süddeutschland (Stuttgart, München) die Automobilindustrie und Automatisierungstechnik dominiert, 
            finden sich im Norden (Hamburg, Küste) viele Arbeitgeber im Bereich Windenergie und maritime Technik. 
            Das Ruhrgebiet und NRW bleiben stark in der klassischen Industrietechnik und Energieversorgung.
          </p>

          <img 
            src="https://picsum.photos/1200/600?random=3" 
            alt="Schaltschrankbau und Planung" 
            className="w-full h-auto rounded-lg shadow-lg my-8"
          />
        </article>
      </Section>
    </div>
  );
};