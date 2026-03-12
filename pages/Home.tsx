import React from 'react';
import { Search, MapPin, Briefcase, Zap, ChevronDown, ChevronUp, Building2, TrendingUp, GraduationCap, Shield } from 'lucide-react';
import { Section } from '../components/Section';
import { JobCard } from '../components/JobCard';
import { Button } from '../components/Button';
import { HERO_TITLE, HERO_SUBTITLE, MOCK_JOBS, FAQ_ITEMS } from '../data/content';
import { Link } from 'react-router-dom';

const GERMAN_CITIES = [
  { name: 'Berlin', region: 'Berlin' },
  { name: 'Hamburg', region: 'Hamburg' },
  { name: 'München', region: 'Bayern' },
  { name: 'Köln', region: 'NRW' },
  { name: 'Frankfurt am Main', region: 'Hessen' },
  { name: 'Stuttgart', region: 'Baden-Württemberg' },
  { name: 'Düsseldorf', region: 'NRW' },
  { name: 'Leipzig', region: 'Sachsen' },
  { name: 'Dortmund', region: 'NRW' },
  { name: 'Essen', region: 'NRW' },
  { name: 'Bremen', region: 'Bremen' },
  { name: 'Dresden', region: 'Sachsen' },
  { name: 'Hannover', region: 'Niedersachsen' },
  { name: 'Nürnberg', region: 'Bayern' },
  { name: 'Duisburg', region: 'NRW' },
  { name: 'Bochum', region: 'NRW' },
  { name: 'Wuppertal', region: 'NRW' },
  { name: 'Mannheim', region: 'Baden-Württemberg' },
  { name: 'Augsburg', region: 'Bayern' },
  { name: 'Karlsruhe', region: 'Baden-Württemberg' },
  { name: 'Aachen', region: 'NRW' },
  { name: 'Braunschweig', region: 'Niedersachsen' },
  { name: 'Wolfsburg', region: 'Niedersachsen' },
  { name: 'Erlangen', region: 'Bayern' },
  { name: 'Ulm', region: 'Baden-Württemberg' },
];

const HomeFaqAccordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-slate-900">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0 ml-2" /> : <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0 ml-2" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-600 pr-8">{answer}</div>
      )}
    </div>
  );
};

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 sm:mb-6 leading-tight">
              {HERO_TITLE}
            </h1>
            <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-10 leading-relaxed">
              {HERO_SUBTITLE}
            </p>

            {/* Search Box */}
            <div className="bg-white p-2 rounded-lg shadow-xl flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 bg-slate-50 rounded border border-slate-200 h-12">
                <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Jobtitel, Begriff (z.B. SPS, Planer)"
                  className="bg-transparent w-full focus:outline-none text-slate-900 placeholder-slate-500"
                />
              </div>
              <div className="flex-1 flex items-center px-4 bg-slate-50 rounded border border-slate-200 h-12">
                <MapPin className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
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

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-4 text-sm text-slate-400">
              <span className="font-semibold text-slate-300">Beliebt:</span>
              <span className="hover:text-white cursor-pointer underline decoration-dotted">Automatisierungstechnik</span>
              <span className="hover:text-white cursor-pointer underline decoration-dotted">TGA Planung</span>
              <span className="hover:text-white cursor-pointer underline decoration-dotted">E-Mobilität</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs - mobile first, shown at top */}
      <Section title="Aktuelle Top-Jobs" subtitle="Die neusten Positionen führender Unternehmen" background="light">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MOCK_JOBS.slice(0, 6).map(job => (
            <JobCard key={job.id} job={job as any} />
          ))}
        </div>
        <div className="mt-8 sm:mt-12 text-center">
          <Link to="/bewerber">
             <Button variant="outline" size="lg">Alle Stellenanzeigen ansehen</Button>
          </Link>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section className="border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Wir sprechen Ihre Sprache</h2>
            <div className="prose text-slate-600">
              <p className="mb-4">
                Anders als bei allgemeinen Jobbörsen verstehen wir den Unterschied zwischen Nieder- und Mittelspannung,
                zwischen C++ und IEC 61131-3. Unsere Algorithmen und Kategorien sind speziell auf die Elektrotechnik zugeschnitten.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded mr-4 mt-1 flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Branchenspezifisch</h4>
                    <p className="text-sm">Von Handwerk bis High-Tech Forschung.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded mr-4 mt-1 flex-shrink-0">
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
          <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
             <img
              src="https://picsum.photos/800/800?random=2"
              alt="Ingenieur bei der Arbeit"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Geo SEO Section - Elektrotechnik Jobs in German Cities */}
      <Section title="Elektrotechnik Jobs nach Standort" subtitle="Finden Sie Stellenangebote in Ihrer Region" background="light">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {GERMAN_CITIES.map((city) => (
            <div key={city.name} className="bg-white rounded-lg p-3 sm:p-4 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 text-center">
              <MapPin className="w-4 h-4 text-blue-500 mx-auto mb-1" />
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">{city.name}</h3>
              <p className="text-xs text-slate-500">{city.region}</p>
              <p className="text-xs text-blue-600 mt-1">Elektrotechnik Jobs</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Career Info Section */}
      <Section title="Karriere in der Elektrotechnik" subtitle="Berufsbilder, Gehälter und Zukunftsperspektiven" background="white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Gehalt</h3>
              <p className="text-sm text-slate-600">Elektroingenieure verdienen im Schnitt 55.000 - 75.000 EUR brutto/Jahr. Mit Berufserfahrung und Spezialisierung sind 90.000+ EUR möglich.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
              <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Ausbildung</h3>
              <p className="text-sm text-slate-600">Vom Elektroniker-Lehrberuf über den staatl. geprüften Techniker bis zum Master in Elektrotechnik -- vielfältige Karrierewege.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Jobsicherheit</h3>
              <p className="text-sm text-slate-600">Fachkräftemangel im MINT-Bereich bedeutet hervorragende Jobaussichten. Die Arbeitslosenquote liegt unter 2%.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Branchen</h3>
              <p className="text-sm text-slate-600">Automotive, Energiewende, Gebäudetechnik, Automatisierung, IoT -- Elektrotechniker werden überall gebraucht.</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Warum Elektrotechnik eine Zukunftsbranche ist</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Die Elektrotechnik steht im Zentrum der wichtigsten Megatrends unserer Zeit: Energiewende, Digitalisierung, Elektromobilität und Industrie 4.0.
              Deutschland als Industriestandort ist auf hochqualifizierte Elektrotechnik-Fachkräfte angewiesen -- vom Elektroniker für Betriebstechnik bis
              zum Entwicklungsingenieur für Leistungselektronik. Die Nachfrage übersteigt das Angebot seit Jahren deutlich.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Besonders gefragt sind Spezialisten in den Bereichen SPS-Programmierung (Siemens TIA Portal, Beckhoff TwinCAT),
              Schaltschrankbau nach DIN EN 61439, EMV-gerechtes Design, Energiemanagement nach ISO 50001 sowie Planung und Projektierung
              von Starkstromanlagen. Auch der Bereich Smart Home und KNX-Programmierung wächst rasant.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Für Berufseinsteiger bietet die Branche attraktive Einstiegsgehälter und schnelle Aufstiegsmöglichkeiten. Wer sich kontinuierlich
              weiterbildet -- etwa zum Meister, Techniker oder durch ein berufsbegleitendes Studium -- kann in Führungspositionen oder
              hochspezialisierte Expertenlaufbahnen wechseln.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="Häufig gestellte Fragen" subtitle="Alles rund um Elektrotechnik-Stellenangebote" background="light">
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          {FAQ_ITEMS.map((item, idx) => (
            <HomeFaqAccordion key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Section>
    </>
  );
};