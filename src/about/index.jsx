import React from 'react';
import '../home/Home.css';

const About = () => {
  const images = [
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/1-6.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/2-5.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/3-5.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/4-5.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/5-3.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/6-4.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/7-1.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/8-1.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/9-1.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/10-2.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/11-2.png',
  ];

  const loopImages = images.concat(images);

  return (
    <>
      <section className="w-full bg-[#f0f0f0] overflow-hidden mt-12 pt-8">
        <div className="h-[50vh]">
          <div className="flex w-max aaaa-animate gap-4">
            {loopImages.map((src, idx) => (
              <div
                className="flex-shrink-0 h-[50vh]"
                key={`${src}-${idx}`}
              >
                <img className="h-full w-auto object-cover" src={src} alt={`Carousel ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-6" style={{ background: "url('/shared-light-pattern-bg.png') center/cover no-repeat" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center fade-up" style={{ '--delay': '0s', marginTop: '36px' }}>
            <img
              className="w-full max-w-xl rounded-2xl object-cover"
              src="/founders image about us.png"
              alt="The Boys Story"
            />
          </div>

          <div className="boys-card font-google-sans text-[#1f1f1f] fade-up" style={{ '--delay': '0.1s', marginTop: '140px' }}>
            <h2 className="boys-title">
              THE BOYS STORY!
            </h2>
            <p className="boys-body">
              P V Phani Srivatsa &amp; Satish MS quit their 10-to-7 jobs, believing Sripada Studios
              as their dream and goal, trusting their talent completely. Both are passionate about
              cinema and digital marketing, which eventually led to the development of this
              conglomerate company. If you wish to engage with Sripada Studios, you should speak
              with these individuals who will astound you with their immense potential and
              delightful sense of humour.
            </p>
            <button className="boys-btn">
              Know More <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f3f9d9] py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-geom text-center text-3xl font-extrabold gradient-geom md:text-4xl">
            MANAGEMENT TEAM
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div className="text-center fade-up" style={{ '--delay': '0.08s' }}>
              <div className="mgmt-img-wrap mx-auto max-w-sm">
                <img
                  className="aspect-[4/3] w-full object-cover"
                  src="/about%20page/team/WEBSITE-PAGE-7.png"
                  alt="P V Phani Srivatsa"
                />
              </div>
              <h3 className="mt-4 font-geom text-lg font-bold text-[#5b21b6]">
                P V PHANI SRIVATSA
              </h3>
              <p className="font-google-sans text-sm text-[#2f2f2f]">
                Founder | Head of Sales &amp; Marketing
              </p>
            </div>

            <div className="text-center fade-up" style={{ '--delay': '0.16s' }}>
              <div className="mgmt-img-wrap mx-auto max-w-sm">
                <img
                  className="aspect-[4/3] w-full object-cover"
                  src="/about%20page/team/WEBSITE-PAGE-8.png"
                  alt="Satish M S"
                />
              </div>
              <h3 className="mt-4 font-geom text-lg font-bold text-[#5b21b6]">SATISH M S</h3>
              <p className="font-google-sans text-sm text-[#2f2f2f]">
                Co-Founder | Head of Operations
              </p>
            </div>

            <div className="text-center fade-up" style={{ '--delay': '0.24s' }}>
              <div className="mgmt-img-wrap mx-auto max-w-sm">
                <img
                  className="aspect-[4/3] w-full object-cover"
                  src="/about%20page/team/WEBSITE-PAGE-9.png"
                  alt="Sathwik N J"
                />
              </div>
              <h3 className="mt-4 font-geom text-lg font-bold text-[#5b21b6]">SATHWIK N J</h3>
              <p className="font-google-sans text-sm text-[#2f2f2f]">
                Head of Human Resource
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:justify-items-center">
            <div className="text-center w-full max-w-sm fade-up" style={{ '--delay': '0.32s' }}>
              <div className="mgmt-img-wrap">
                <img
                  className="aspect-[4/3] w-full object-cover"
                  src="/about%20page/team/WEBSITE-PAGE-10.png"
                  alt="Raksha S"
                />
              </div>
              <h3 className="mt-4 font-geom text-lg font-bold text-[#5b21b6]">RAKSHA S</h3>
              <p className="font-google-sans text-sm text-[#2f2f2f]">
                Head of Strategic Management
              </p>
            </div>

            <div className="text-center w-full max-w-sm fade-up" style={{ '--delay': '0.4s' }}>
              <div className="mgmt-img-wrap">
                <img
                  className="aspect-[4/3] w-full object-cover"
                  src="/about%20page/team/WEBSITE-PAGE-11.png"
                  alt="Goutham Srinag P V"
                />
              </div>
              <h3 className="mt-4 font-geom text-lg font-bold text-[#5b21b6]">
                GOUTHAM SRINAG P V
              </h3>
              <p className="font-google-sans text-sm text-[#2f2f2f]">Head of Finance</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full h-[65vh] bg-[url('/about%20page/SSD_Website%20(15).png')] bg-fill bg-center"
        style={{ backgroundPosition: '55% center' }}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="w-full gap-24 text-white md:flex md:justify-between">
            <div className="fade-in-left">
              <h3 className="font-geom text-3xl font-extrabold text-[#b7ff4a]">VISION</h3>
              <div className="mt-2 h-[2px] w-48 bg-gradient-to-b from-[#83bf2f]/60 via-[#83bf2f]/60 to-[#aaf539]/90" />
              <p className="mt-4 max-w-xs font-google-sans text-sm leading-relaxed text-white/90">
                To build a future‑ready creative conglomerate that elevates brands through
                cinematic storytelling, data‑driven strategy, and digital innovation.
              </p>
            </div>

            <div className="fade-in-right">
              <h3 className="font-geom text-3xl font-extrabold text-[#b7ff4a]">MISSION</h3>
              <div className="mt-2 h-[2px] w-48 bg-gradient-to-b from-[#83bf2f]/60 via-[#83bf2f]/60 to-[#aaf539]/90" />
              <p className="mt-4 max-w-xs font-google-sans text-sm leading-relaxed text-white/90">
                To empower businesses and creators with bold ideas, scalable marketing systems, and
                measurable growth—delivered with passion, quality, and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-black py-16 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-geom text-3xl font-extrabold bg-gradient-to-r from-[#cfff89] to-[#e3ffb9] bg-clip-text text-transparent md:text-4xl">
            TEAM SRIPADA STUDIOS
          </h2>
          <p className="mt-2 font-google-sans text-sm text-white/80">
            Meet the Creative Minds aka our colleagues behind all the laurels and efforts
          </p>
        </div>

        <div className="mt-24 w-full">
          {(() => {
            const blackImages = [
              '/employees%20black/SSD_Website_Employees-27-scaled.png',
              '/employees%20black/SSD_Website_Employees-25-scaled.png',
              '/employees%20black/SSD_Website_Employees-26-scaled.png',
              '/employees%20black/SSD_Website_Employees-scaled.png',
              '/employees%20black/SSD_Website_Employees-2-scaled.png',
              '/employees%20black/SSD_Website_Employees-11-scaled.png',
              '/employees%20black/SSD_Website_Employees-12-scaled.png',
              '/employees%20black/SSD_Website_Employees-10-scaled.png',
              '/employees%20black/SSD_Website-3-1-scaled.png',
              '/employees%20black/SSD_Website_Employees-8-scaled.png',
              '/employees%20black/SSD_Website_Employees-4-scaled.png',
              '/employees%20black/SSD_Website_Employees-6-scaled.png',
              '/employees%20black/SSD_Website_Employees-5-scaled.png',
              '/employees%20black/SSD_Website_Employees-1-scaled.png',
              '/employees%20black/SSD_Website_Employees-7-scaled.png',
              '/employees%20black/SSD_Website_Employees-9-scaled.png',
              '/employees%20black/SSD_Website_Employees-13-scaled.png',
              '/employees%20black/SSD_Website_Employees-3-scaled.png',
            ];

            const hoverImages = [
              '/employees%20black/SSD_Website_Employees-27-scaled.png',
              '/employees%20black/SSD_Website_Employees-25-scaled.png',
              '/employees%20black/SSD_Website_Employees-26-scaled.png',
              '/employees%20black/SSD_Website_Employees-scaled.png',
              '/employees%20hover/SSD_Website_Employees-15-scaled.png',
              '/employees%20hover/SSD_Website_Employees-17-scaled.png',
              '/employees%20hover/SSD_Website_Employees-16-scaled.png',
              '/employees%20hover/SSD_Website_Employees-18-scaled.png',
              '/employees%20hover/SSD_Website_Employees-14-scaled.png',
              '/employees%20hover/SSD_Website_Employees-19-scaled.png',
              '/employees%20hover/SSD_Website_Employees-20-scaled.png',
              '/employees%20hover/SSD_Website_Employees-21-scaled.png',
              '/employees%20hover/SSD_Website_Employees-22-scaled.png',
              '/employees%20hover/SSD_Website_Employees-23-scaled.png',
              '/employees%20hover/SSD_Website_Employees-24-scaled.png',
              '/employees%20hover/SSD_Website_Employees-28-scaled.png',
              '/employees%20hover/SSD_Website_Employees-30-scaled.png',
              '/employees%20hover/SSD_Website_Employees-29-scaled.png',
            ];

            const teamMembers = [
              { name: 'PHANI SRIVATSA PV', role: 'EDITOR | DEVELOPER' },
              { name: 'SATISH MS', role: 'UX DESIGNER | EDITOR' },
              { name: 'RAKSHA S', role: 'CONTENT WRITER' },
              { name: 'SATHWIK NJ', role: 'PERFORMANCE MARKETER' },
              { name: 'GOUTHAM SRINAG', role: 'UI DESIGNER' },
              { name: 'MANISH N', role: 'PHOTOGRAPHER' },
              { name: 'VYSHNAVI AM', role: 'VIDEO EDITOR' },
              { name: 'HEMASHREE K', role: 'SOCIAL MEDIA MANAGER' },
              { name: 'ASHOK KUMAR S', role: 'FULL STACK DEVELOPER' },
              { name: 'ARPITHA M', role: 'HUMAN RESOURCE' },
              { name: 'KARTHIK D', role: 'VIDEO EDITOR' },
              { name: 'NAYANA CN', role: 'SOCIAL MEDIA ASSOCIATIVE' },
              { name: 'JITENDRANTHA', role: 'AD OPS EXECUTIVE' },
              { name: 'AMITHA SHETTY', role: 'DESIGNER' },
              { name: 'HARIPRASAD', role: 'SOCIAL MEDIA EXECUTIVE' },
              { name: 'VARUNGOWDA', role: 'CONTENT WRITER & STRATEGIST' },
              { name: 'RANJAN NAVEEN', role: 'ASSOCIATE VIDEO EDITOR' },
              { name: 'ADITYA NAYAK', role: 'JUNIOR WEB DEVELOPER' },
            ];

            return (
              <div className="grid gap-6 md:grid-cols-6">
                {blackImages.map((src, idx) => (
                  <div
                    className="relative overflow-hidden rounded-2xl bg-[#6f5bf3] team-card"
                    style={{ transform: idx % 2 === 0 ? 'translateY(-15%)' : 'translateY(0)' }}
                    key={`${src}-${idx}`}
                  >
                    <img className="team-img base" src={src} alt={`Team ${idx + 1}`} />
                    <img
                      className="team-img hover"
                      src={hoverImages[idx] || src}
                      alt={`Team hover ${idx + 1}`}
                    />
                    <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                      <div className="font-geom text-xs font-semibold uppercase">
                        {teamMembers[idx]?.name || 'TEAM MEMBER'}
                      </div>
                      <div className="font-google-sans text-[11px] text-white/80">
                        {teamMembers[idx]?.role || 'ROLE TITLE'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      <section className="contact-form-section" id="contact">
        <div className="contact-form-header">
          <h2>Contact Us</h2>
          <p>Tell us about your project and we will get back to you quickly.</p>
        </div>
        <div className="contact-form-inner">
          <div className="contact-form-image">
            <img src="/shared-contact-section-illustration.png" alt="Contact" />
          </div>

          <div>
            <form className="contact-form">
              <div className="form-row two">
                <label className="form-field">
                  <span>Name *</span>
                  <input type="text" placeholder="First" required />
                </label>
                <label className="form-field">
                  <span>&nbsp;</span>
                  <input type="text" placeholder="Last" required />
                </label>
              </div>

              <div className="form-row two">
                <label className="form-field">
                  <span>Email *</span>
                  <input type="email" placeholder="Email" required />
                </label>
                <label className="form-field">
                  <span>Numbers</span>
                  <input type="tel" placeholder="Phone" />
                </label>
              </div>

              <div className="form-row">
                <label className="form-field">
                  <span>Select your Services *</span>
                  <select required>
                    <option value="">Select your Services</option>
                    <option>Branding</option>
                    <option>Digital Marketing</option>
                    <option>Performance Marketing</option>
                    <option>Film Promotion</option>
                    <option>Web Design</option>
                  </select>
                </label>
              </div>

              <div className="form-row">
                <label className="form-field">
                  <span>Message *</span>
                  <textarea rows="5" placeholder="Comment or Message" required />
                </label>
              </div>

              <div className="form-actions">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-cta">
          <img
            className="footer-logo"
            src="https://sripadastudiosdigital.com/wp-content/uploads/2024/01/Copy-of-About-Us-Page-SSD-WEBSITE-DESIGN-1366-x-768-px-3.png"
            alt="Buzziwah"
          />
          <div className="footer-cta-text">Ready To Get Started</div>
          <button className="footer-cta-button" type="button">
            Get Started →
          </button>
        </div>

        <div className="footer-divider" />

        <div className="footer-grid">
          <div className="footer-col">
            <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
            <input className="footer-input" type="text" placeholder="Name" />
            <input className="footer-input" type="email" placeholder="Email Address" />
            <button className="footer-subscribe" type="button">
              Subscribe
            </button>
          </div>

          <div className="footer-col">
            <h4>SERVICES</h4>
            <ul>
              <li>Performance Marketing</li>
              <li>Social Media Management</li>
              <li>Website Development</li>
              <li>Branding and Re-branding</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>ABOUT</h4>
            <ul>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>NAVIGATION</h4>
            <ul>
              <li>Content Solution</li>
              <li>Video Production</li>
              <li>Search Engine Optimization</li>
              <li>Influencer Marketing</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>HELP</h4>
            <ul>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-socials">
            <span className="footer-social">f</span>
            <span className="footer-social">ig</span>
            <span className="footer-social">yt</span>
          </div>
          <div className="footer-copy">2026 Buzziwah.com | All Rights Reserved</div>
        </div>
      </footer>
    </>
  );
};

export default About;
