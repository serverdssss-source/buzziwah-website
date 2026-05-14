const Section2 = () => {
  const items = ['WE DESIGN', 'WE DEVELOP', 'WE PRMOTE', 'WE GROW'];

  return (
    <section style={{
      background: 'linear-gradient(135deg, #070312 0%, #150930 50%, #070312 100%)',
      padding: '0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Purple glow blobs */}
      <div style={{
        position: 'absolute', top: '50%', left: '5%',
        width: 80, height: 80, borderRadius: '50%',
        background: 'rgba(124,58,237,0.55)',
        filter: 'blur(22px)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', right: '6%',
        width: 60, height: 60, borderRadius: '50%',
        background: 'rgba(124,58,237,0.45)',
        filter: 'blur(18px)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '10%', left: '30%',
        width: 40, height: 40, borderRadius: '50%',
        background: 'rgba(124,58,237,0.3)',
        filter: 'blur(14px)',
        pointerEvents: 'none',
      }} />

      {/* Static row — 4 items evenly spread */}
      <div className="marquee-row" style={{
        display: 'flex',
        width: '100%',
      }}>
        {items.map((item, i) => (
          <div key={i} className="marquee-item" style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(18px, 2.5vw, 38px)',
              fontWeight: 800,
              color: '#c8ff00',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              textAlign: 'center',
            }}>
              {item}
            </span>
            {i < items.length - 1 && (
              <div className="marquee-divider" style={{
                position: 'absolute',
                right: 0,
                width: 2,
                height: 32,
                background: '#5b21b6',
              }} />
            )}
          </div>
        ))}
      </div>

      <style>{`
        .marquee-item {
          padding: 52px 8px;
        }
        @media (max-width: 768px) {
          .marquee-row {
            flex-wrap: wrap !important;
          }
          .marquee-item {
            flex: 1 1 50% !important;
            padding: 30px 4px !important;
          }
          .marquee-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Section2;
