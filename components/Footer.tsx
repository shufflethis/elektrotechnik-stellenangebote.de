import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-1 rounded">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                E-Technik<span className="text-blue-500">Jobs</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Die spezialisierte Stellenbörse für Elektrotechnik, Automatisierung und Energie. Wir verbinden Experten mit Visionären.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Für Bewerber</h3>
            <ul className="space-y-2">
              <li><Link to="/bewerber" className="hover:text-blue-400 transition-colors text-sm">Jobsuche</Link></li>
              <li><Link to="/bewerber" className="hover:text-blue-400 transition-colors text-sm">Karrieretipps</Link></li>
              <li><Link to="/branche" className="hover:text-blue-400 transition-colors text-sm">Gehaltsvergleich</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Für Arbeitgeber</h3>
            <ul className="space-y-2">
              <li><Link to="/arbeitgeber" className="hover:text-blue-400 transition-colors text-sm">Stelle schalten</Link></li>
              <li><Link to="/arbeitgeber" className="hover:text-blue-400 transition-colors text-sm">Preise & Pakete</Link></li>
              <li><Link to="/arbeitgeber" className="hover:text-blue-400 transition-colors text-sm">Recruiting-Ratgeber</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> kontakt@e-technik-jobs.de</li>
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +49 30 403 6654 32</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Voltastraße 5, Berlin</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} elektrotechnik-stellenangebote.de. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/impressum" className="hover:text-white">Impressum</Link>
            <Link to="/impressum" className="hover:text-white">Datenschutz</Link>
            <Link to="/impressum" className="hover:text-white">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};