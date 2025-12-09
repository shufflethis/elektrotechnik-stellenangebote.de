import React from 'react';

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Projektbasis';
  category: 'Ingenieurwesen' | 'Handwerk' | 'Techniker' | 'IT & Software';
  salaryRange?: string;
  postedDate: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SectionContent {
  title: string;
  content: string | React.ReactElement; // Allow string or pre-rendered JSX
}