import React from 'react';
import { Section } from '../components/Section';

export const Impressum: React.FC = () => {
  return (
    <Section title="Impressum" background="white">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <p>Angaben gemäß § 5 TMG</p>
        
        <h3>Betreiber der Website</h3>
        <p>
          <strong>ElektroJob Vermittlungs GmbH</strong><br />
          Voltastraße 5<br />
          10179 Berlin<br />
          Deutschland
        </p>

        <h3>Kontakt</h3>
        <p>
          Telefon: +49 (0) 30 12345678<br />
          E-Mail: kontakt@elektrotechnik-stellenangebote.de<br />
          Website: www.elektrotechnik-stellenangebote.de
        </p>

        <h3>Vertretung</h3>
        <p>
          Vertreten durch den Geschäftsführer: Dipl.-Ing. Max Mustermann
        </p>

        <h3>Registereintrag</h3>
        <p>
          Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Berlin-Charlottenburg<br />
          Registernummer: HRB 123456
        </p>

        <h3>Umsatzsteuer-ID</h3>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE 123 456 789
        </p>

        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
        <p>
          Max Mustermann<br />
          Voltastraße 5<br />
          10179 Berlin
        </p>

        <h3>Haftungsausschluss (Disclaimer)</h3>
        <p>
          <strong>Haftung für Inhalte</strong><br />
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
        </p>
        
        <h3>Bildnachweise</h3>
        <p>
            Bilder von Picsum Photos (Lorem Picsum). Icons von Lucide React.
        </p>
      </div>
    </Section>
  );
};