import HeroSlider from '../components/HeroSlider/HeroSlider'

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* ---- About Section Preview ---- */}
      <section className="section-about" aria-labelledby="about-heading">
        <div className="container">
          <div className="section-about__inner">
            <div className="section-about__badge">About Us</div>
            <h2 id="about-heading" className="section-about__heading">
              Your Gateway to <span>Cambridge Excellence</span>
            </h2>
            <p className="section-about__body">
              Alpha Cambridge Exam Centre is an authorized exam centre of Cambridge Assessment English,
              offering globally recognized qualifications that open doors to academic and professional
              opportunities worldwide. We serve students and educators with integrity, expert support,
              and a commitment to excellence.
            </p>
            <div className="section-about__stats">
              {[
                { number: '500+', label: 'Candidates Placed' },
                { number: '15+', label: 'Years Experience' },
                { number: '98%', label: 'Pass Rate' },
                { number: '3',   label: 'Exam Centres' },
              ].map(stat => (
                <div key={stat.label} className="section-about__stat">
                  <span className="section-about__stat-number">{stat.number}</span>
                  <span className="section-about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Exams Section Preview ---- */}
      <section className="section-exams" aria-labelledby="exams-heading">
        <div className="container">
          <div className="section-exams__header">
            <div className="section-about__badge" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.15)' }}>
              Our Examinations
            </div>
            <h2 id="exams-heading" className="section-exams__heading">
              Cambridge English Qualifications
            </h2>
            <p className="section-exams__sub">
              From foundational to advanced, we offer the full suite of Cambridge English qualifications.
            </p>
          </div>
          <div className="section-exams__grid">
            {[
              { code: 'A2', name: 'Key English Test', desc: 'Foundation level qualification for basic communication skills.' },
              { code: 'B1', name: 'Preliminary English Test', desc: 'Mid-level qualification for everyday language use.' },
              { code: 'B2', name: 'First Certificate', desc: 'Upper-intermediate for academic and professional settings.' },
              { code: 'C1', name: 'Advanced (CAE)', desc: 'High-level qualification recognized by top universities worldwide.' },
              { code: 'C2', name: 'Proficiency (CPE)', desc: 'The highest level — near-native English mastery.' },
              { code: 'TKT', name: 'Teaching Knowledge Test', desc: 'Professional development for English language teachers.' },
            ].map(exam => (
              <div key={exam.code} className="exam-card">
                <div className="exam-card__code">{exam.code}</div>
                <h3 className="exam-card__name">{exam.name}</h3>
                <p className="exam-card__desc">{exam.desc}</p>
                <a href="/contact" className="exam-card__cta">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Contact CTA ---- */}
      <section id="contact" className="section-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="section-cta__inner">
            <h2 id="cta-heading" className="section-cta__heading">
              Ready to Begin Your Journey?
            </h2>
            <p className="section-cta__body">
              Speak with our team today to find the right Cambridge qualification for your goals.
            </p>
            <a href="/contact" className="section-cta__btn" aria-label="Enquire Now about Cambridge exams">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* --- About Section --- */
        .section-about {
          padding: 5rem 0;
          background: var(--color-white);
        }
        .section-about__inner {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .section-about__badge {
          display: inline-block;
          padding: 0.35rem 1rem;
          border-radius: 9999px;
          border: 1.5px solid var(--color-blue-400);
          color: var(--color-blue-700);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .section-about__heading {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: var(--color-blue-900);
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .section-about__heading span {
          color: var(--color-blue-600);
        }
        .section-about__body {
          font-size: 1.05rem;
          color: var(--color-gray-600);
          line-height: 1.7;
          max-width: 600px;
        }
        .section-about__stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          width: 100%;
          margin-top: 1rem;
        }
        .section-about__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 1.25rem;
          background: var(--color-blue-50);
          border-radius: 1rem;
          border: 1px solid var(--color-blue-100);
        }
        .section-about__stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-blue-800);
          letter-spacing: -0.03em;
        }
        .section-about__stat-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-gray-600);
          text-align: center;
        }
        @media (max-width: 640px) {
          .section-about__stats { grid-template-columns: repeat(2, 1fr); }
        }

        /* --- Exams Section --- */
        .section-exams {
          padding: 5rem 0;
          background: linear-gradient(160deg, var(--color-blue-900) 0%, #0d2d6e 100%);
        }
        .section-exams__header {
          text-align: center;
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .section-exams__heading {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 700;
          color: var(--color-white);
          letter-spacing: -0.02em;
        }
        .section-exams__sub {
          font-size: 1rem;
          color: rgba(255,255,255,0.7);
          max-width: 480px;
        }
        .section-exams__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .exam-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 1rem;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          backdrop-filter: blur(8px);
          transition: background 0.2s, transform 0.2s;
        }
        .exam-card:hover {
          background: rgba(255,255,255,0.12);
          transform: translateY(-3px);
        }
        .exam-card__code {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-blue-400);
          background: rgba(59,130,246,0.15);
          display: inline-block;
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          width: fit-content;
        }
        .exam-card__name {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-white);
          line-height: 1.3;
        }
        .exam-card__desc {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.6;
          flex: 1;
        }
        .exam-card__cta {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-blue-300, #93c5fd);
          transition: color 0.2s;
        }
        .exam-card__cta:hover { color: var(--color-white); }
        @media (max-width: 900px) {
          .section-exams__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .section-exams__grid { grid-template-columns: 1fr; }
        }

        /* --- CTA Section --- */
        .section-cta {
          padding: 5rem 0;
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #e0f2fe 100%);
        }
        .section-cta__inner {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }
        .section-cta__heading {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 700;
          color: var(--color-blue-900);
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .section-cta__body {
          font-size: 1.05rem;
          color: var(--color-gray-600);
          line-height: 1.7;
        }
        .section-cta__btn {
          display: inline-block;
          padding: 0.9rem 2.5rem;
          background: var(--color-blue-800);
          color: white;
          font-size: 0.95rem;
          font-weight: 700;
          border-radius: 9999px;
          box-shadow: 0 8px 24px rgba(10,31,68,0.3);
          transition: background 0.2s, transform 0.15s;
        }
        .section-cta__btn:hover {
          background: var(--color-blue-700);
          transform: translateY(-2px);
        }
      `}</style>
    </>
  )
}
