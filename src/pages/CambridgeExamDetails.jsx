import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CambridgeExamDetails.css';

const EXAM_LEVELS = [
  {
    level: "Young Learners",
    title: "PreA1 Starters",
    type: "PB and CB",
    description: "Scores will be represented as Shields up to 5.",
    components: ["Reading and writing", "Listening", "Speaking"]
  },
  {
    level: "Young Learners",
    title: "A1 Movers",
    type: "PB and CB",
    description: "Scores will be represented as Shields up to 5.",
    components: ["Reading and writing", "Listening", "Speaking"]
  },
  {
    level: "Young Learners",
    title: "A2 Flyers",
    type: "Only PB",
    description: "Scores will be represented as Shields up to 5.",
    components: ["Reading and writing", "Listening", "Speaking"]
  },
  {
    level: "School & General",
    title: "A2 Key for Schools / A2 Key",
    type: "PB and CB",
    description: "Scores range (120-139).",
    components: ["Reading and writing", "Listening", "Speaking"]
  },
  {
    level: "School & General",
    title: "B1 Preliminary for Schools / B1 Preliminary",
    type: "PB and CB",
    description: "Scores range (140-159).",
    components: ["Reading", "Writing", "Listening", "Speaking"]
  },
  {
    level: "Higher Education",
    title: "B2 First",
    type: "PB and CB",
    description: "Scores range (160-179).",
    components: ["Reading and use of english", "Writing", "Listening", "Speaking"]
  },
  {
    level: "Higher Education",
    title: "C1 Advanced",
    type: "PB and CB",
    description: "Scores range (180-199).",
    components: ["Reading and use of english", "Writing", "Listening", "Speaking"]
  },
  {
    level: "Educators",
    title: "TKT (Teachers Knowledge Test)",
    type: "PB and CB",
    description: "Module 1, 2, 3 | TKT CLIL | TKT YL. Score will be represented as Band 1, 2, 3.",
    components: []
  }
];

export default function CambridgeExamDetails() {
  // Ensure we start at the top of the page when this mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleEnquireClick = (e) => {
    e.preventDefault();
    navigate('/');
    // Add a tiny delay to allow the Home component to render before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="exam-details-wrapper">
      
      {/* Hero Section */}
      <section className="exam-hero animate-fade-in">
        <div className="exam-hero-container">
          <span className="exam-badge">Alpha Cambridge</span>
          <h1 className="exam-title">Cambridge English Qualifications</h1>
          <p className="exam-subtitle">
            Cambridge Assessment English is part of the world-famous university in the UK. 
            The Cambridge English tests are an excellent way of motivating children and showing 
            the progress they have made.
          </p>
        </div>
      </section>

      {/* Various Levels Grid */}
      <section className="exam-levels-section">
        <div className="container">
          <div className="section-header">
            <h2>Various Levels of Exams</h2>
            <p>From Young Learners to Advanced Professionals</p>
          </div>
          
          <div className="levels-grid">
            {EXAM_LEVELS.map((exam, idx) => (
              <div className="level-card" key={idx}>
                <div className="level-card-header">
                  <span className="level-category">{exam.level}</span>
                  <span className="level-type">{exam.type}</span>
                </div>
                <h3>{exam.title}</h3>
                <p className="level-desc">{exam.description}</p>
                
                {exam.components.length > 0 && (
                  <div className="level-components">
                    <strong>Components:</strong>
                    <ul>
                      {exam.components.map((comp, i) => (
                        <li key={i}>{comp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Eligibility Info */}
      <section className="exam-info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3>Eligibility Criteria</h3>
              <p>These exams are globally recognized and open to everyone. <strong>Anyone can apply for this exam.</strong></p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <h3>Registration Deadlines</h3>
              <p>
                <strong>PB (Paper Based Exam):</strong> Register before 45 days.<br/>
                <strong>CB (Computer Based / Digital Exam):</strong> Register before 15 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="exam-cta">
        <div className="container">
          <h2>Ready to book your exam?</h2>
          <p>Get in touch with us to start your registration process.</p>
          <a href="/#contact" onClick={handleEnquireClick} className="btn-primary">Enquire Now</a>
        </div>
      </section>
    </div>
  );
}
