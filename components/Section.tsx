import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark';
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  background = 'white',
  className = ''
}) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-slate-50',
    dark: 'bg-slate-900 text-white'
  };

  return (
    <section className={`py-16 md:py-24 ${bgColors[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 max-w-3xl mx-auto">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${background === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg ${background === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};