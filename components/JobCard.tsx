import React from 'react';
import { Briefcase, MapPin, Clock, Euro } from 'lucide-react';
import { JobListing } from '../types';
import { Button } from './Button';

interface JobCardProps {
  job: JobListing;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 line-clamp-2">{job.title}</h3>
          <p className="text-blue-600 font-medium">{job.company}</p>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {job.category}
        </span>
      </div>
      
      <div className="space-y-2 text-sm text-slate-600 mb-6 flex-grow">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2 text-slate-400" />
          {job.location}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2 text-slate-400" />
          {job.type}
        </div>
        {job.salaryRange && (
          <div className="flex items-center">
            <Euro className="w-4 h-4 mr-2 text-slate-400" />
            {job.salaryRange}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map((tag, idx) => (
          <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400">Gepostet: {job.postedDate}</span>
        <Button variant="outline" size="sm">Details ansehen</Button>
      </div>
    </div>
  );
};