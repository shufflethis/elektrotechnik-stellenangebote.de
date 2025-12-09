import React from 'react';
import { Section } from '../components/Section';
import { CANDIDATE_INFO, MOCK_JOBS, FAQ_ITEMS } from '../data/content';
import { JobCard } from '../components/JobCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqAccordion: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-slate-900">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-600 pr-8">
          {answer}
        </div>
      )}
    </div>
  );
};

export const ForCandidates: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-slate-900 text-white py-20 text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Karrierewegweiser Elektrotechnik</h1>
            <p className="text-xl text-slate-300">
               Entdecken Sie Jobs, die wirklich zu Ihren Fähigkeiten passen.
            </p>
         </div>
      </div>

      <Section title="Ihr Profil - Ihre Möglichkeiten" background="white">
         <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
            {CANDIDATE_INFO}
         </div>
      </Section>

      <Section title="Aktuelle Stellenangebote" background="light">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {MOCK_JOBS.map(job => (
            <JobCard key={job.id} job={job as any} />
          ))}
        </div>
      </Section>

      <Section title="Häufige Fragen (FAQ)" subtitle="Antworten für Bewerber" background="white">
        <div className="max-w-3xl mx-auto bg-slate-50 rounded-xl p-8 border border-slate-200">
          {FAQ_ITEMS.map((item, idx) => (
            <FaqAccordion key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Section>
    </div>
  );
};