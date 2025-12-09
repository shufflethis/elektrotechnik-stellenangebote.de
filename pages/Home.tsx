import React from 'react';
import { Search, MapPin, Briefcase, Zap } from 'lucide-react';
import { Section } from '../components/Section';
import { JobCard } from '../components/JobCard';
import { Button } from '../components/Button';
import { HERO_TITLE, HERO_SUBTITLE, MOCK_JOBS } from '../data/content';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0 opacity-20">
            <img 
                src="https://picsum.photos/1920/1080?grayscale" 
                alt="Industrieanlage Elektrotechnik" 
                className="w-full h-full object-cover"
            />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              {HERO_TITLE}
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              {HERO_SUBTITLE}
            </p>
            
            {/* Search Box */}
            <div className="bg-white p-2 rounded-lg shadow-xl flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 bg-slate-50 rounded border border-slate-200 h-12">
                <Search className="w-5 h-5 text-slate-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Jobtitel, Begriff (z.B. SPS, Planer)" 
                  className="bg-transparent w-full focus:outline-none text-slate-900 placeholder-slate-500"
                />
              </div>
              <div className="flex-1 flex items-center px-4 bg-slate-50 rounded border border-slate-200 h-12">
                <MapPin className="w-5 h-5 text-slate-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Ort oder PLZ" 
                  className="bg-transparent w-full focus:outline-none text-slate-900 placeholder-slate-500"
                />
              </div>
              <Button size="lg" className="md:w-auto w-full">
                Jobs finden
              </Button>
            </div>
            
            <div className="mt-8 flex gap-4 text-sm text-slate-400">
              <span className="font-semibold text-slate-300">Beliebt:</span>
              <span className="hover:text-white cursor-pointer underline decoration-dotted">Automatisierungstechnik</span>
              <span className="hover:text-white cursor-pointer underline decoration-dotted">TGA Planung</span>
              <span className="hover:text-white cursor-pointer underline decoration-dotted">E-Mobilität</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs */}
      <Section title="Aktuelle Top-Jobs" subtitle="Die neusten Positionen führender Unternehmen" background="light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_JOBS.slice(0, 3).map(job => (
            <JobCard key={job.id} job={job as any} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/bewerber">
             <Button variant="outline" size="lg">Alle Stellenanzeigen ansehen</Button>
          </Link>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section className="border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Wir sprechen Ihre Sprache</h2>
            <div className="prose text-slate-600">
              <p className="mb-4">
                Anders als bei allgemeinen Jobbörsen verstehen wir den Unterschied zwischen Nieder- und Mittelspannung, 
                zwischen C++ und IEC 61131-3. Unsere Algorithmen und Kategorien sind speziell auf die Elektrotechnik zugeschnitten.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded mr-4 mt-1">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Branchenspezifisch</h4>
                    <p className="text-sm">Von Handwerk bis High-Tech Forschung.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded mr-4 mt-1">
                    <Zap className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Geprüfte Qualität</h4>
                    <p className="text-sm">Wir prüfen Unternehmen und Stellen auf Seriosität.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                 <Link to="/branche">
                    <Button variant="secondary">Mehr über die Branche erfahren</Button>
                 </Link>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
             <img 
              src="https://picsum.photos/800/800?random=2" 
              alt="Ingenieur bei der Arbeit" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
};