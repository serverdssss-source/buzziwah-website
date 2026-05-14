import React from 'react';

const clienteleLogos = [
  "ACE.png",
  "Abhani.png",
  "Aikyam.png",
  "Angola Academy.png",
  "Bodhiable.png",
  "CCC.png",
  "Copper Edege Eco Resort.png",
  "Fitness Factory.png",
  "G Academy.png",
  "G Cinemas.png",
  "G9.png",
  "HearFon.png",
  "Kalpavriksha.png",
  "Lilbeez.png",
  "Little Kidz.png",
  "Neferrtiti weddings.png",
  "Nirguna Acting School.png",
  "Ramesh Arvind.png",
  "Samrat.png",
  "Skill Incarnate.png",
  "Sri Chakra.png",
  "Suraj Productions.png",
  "Total Kannada.png",
  "Wisden Clinics.png"
];

const ClienteleSection = () => {
  const uniqueLogos = Array.from(new Set(clienteleLogos));
  const baseSpeedSeconds = 90;
  const speedStepSeconds = 16;
  const rows = 1;

  return (
    <section className="clientele-section">
      <div className="clientele-inner">
        <h2 className="clientele-title retro-7">OUR CLIENTS</h2>
        <p className="clientele-subtitle">A few of the brands we have elevated lately.</p>
      </div>

      <div className="clientele-marquee">
        {[...Array(rows)].map((_, rowIndex) => {
          const offset = (rowIndex * 5) % uniqueLogos.length;
          const rowItems = uniqueLogos.slice(offset).concat(uniqueLogos.slice(0, offset));
          const loopItems = rowItems.concat(rowItems);
          const duration = baseSpeedSeconds + rowIndex * speedStepSeconds;

          return (
            <div
              className={`clientele-row ${rowIndex % 2 === 0 ? 'forward' : 'reverse'}`}
              style={{ '--duration': `${duration}s` }}
              key={`clientele-row-${rowIndex}`}
            >
              <div className="clientele-track">
                {loopItems.map((item, idx) => (
                  <div className="clientele-card" key={`${item}-${idx}`}>
                    <img
                      className="clientele-logo"
                      src={encodeURI(`/CLIENTS/${item}`)}
                      alt="Client logo"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClienteleSection;
