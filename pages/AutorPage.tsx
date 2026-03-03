// HR-UPDATER: v1.0
import React from 'react';
import Autorenbox from '../components/geo/Autorenbox';

const AutorPage: React.FC = () => {
  return (
    <div className="page-container autor-page">
      <h1>Ueber den Autor</h1>
      <section className="autor-detail">
        <h2>Thomas Sander</h2>
        <p className="autor-role">Gruender & Geschaeftsfuehrer von elektrotechnik-stellenangebote.de</p>

        <div className="autor-content">
          <p>
            Thomas Sander gruendete elektrotechnik-stellenangebote.de mit der Vision, den Recruiting-Prozess
            im Bereich Elektrotechnik grundlegend zu verbessern. Als erfahrener Experte im
            Personalwesen erkannte er frueh die Notwendigkeit spezialisierter Jobportale.
          </p>
          <p>
            Durch seine langjaerige Erfahrung in der Branche versteht er sowohl die Beduerfnisse
            von Arbeitgebern als auch von Fachkraeften im Elektrotechnik-Bereich.
          </p>

          <h3>Expertise</h3>
          <ul>
            <li>Elektrotechnik & Branchenkenntnisse</li>
            <li>Personalwesen & Recruiting</li>
            <li>Digitale Jobportale & HR-Tech</li>
            <li>Arbeitsmarktanalysen im Elektrotechnik-Bereich</li>
          </ul>
        </div>
      </section>

      <Autorenbox />
    </div>
  );
};

export default AutorPage;
