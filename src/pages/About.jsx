import React from 'react';
import { Link } from 'react-router-dom';
import studentImg from '../assets/student.png';
import collegeImg from '../assets/college.png';
import './About.css';

export default function About() {
  return (
    <div className="about-page-wrapper">
      
      {/* Hero Section */}
      <section className="about-hero animate-fade-in">
        <span className="badge">ABOUT US</span>
        <h1>
          More than examinations.<br />
          <span className="text-primary-blue">A brighter future.</span>
        </h1>
        <p>
          At Alpha Cambridge Exam Centre, we connect learners, educators and institutions with globally recognised opportunities.
        </p>
      </section>

      {/* Bento Grid */}
      <section className="bento-grid">
        
        {/* Card 1: Student */}
        <div className="bento-card bento-card-student animate-fade-in delay-1">
          <div className="student-img-container">
            <img src={studentImg} alt="Student writing" />
          </div>
          <div className="student-content">
            <span className="card-label">WHO WE ARE</span>
            <h2 className="card-title">Committed to<br />Your Progress</h2>
            <p className="card-text" style={{ marginBottom: '24px' }}>
              Alpha Training and Consultancy Services (ATCS) operates as an examination and certification centre, providing access to internationally recognised examination opportunities.
            </p>
            <Link to="/services" className="btn-learn-more">
              Explore Services
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* Card 2: Purpose */}
        <div className="bento-card bento-card-purpose animate-fade-in delay-2">
          <span className="card-label">OUR PURPOSE</span>
          <h2 className="card-title">Creating Opportunities Through Global Recognition</h2>
          <p className="card-text">
            We enable individuals and institutions to access internationally recognised examinations and certifications, supporting lifelong learning and greater opportunities.
          </p>
        </div>

        {/* Card 3: College */}
        <div className="bento-card bento-card-college animate-fade-in delay-3">
          <div className="college-bg">
            <img src={collegeImg} alt="Alpha Arts and Science College" />
          </div>
          <div className="college-overlay"></div>
          <div className="college-content">
            <h2 className="card-title" style={{ marginBottom: '8px' }}>A Trusted<br />Examination Centre</h2>
            <p className="card-text" style={{ fontSize: '0.9rem' }}>Delivering a professional and well-organised examination experience.</p>
          </div>
        </div>

        {/* Card 4: Global */}
        <div className="bento-card bento-card-global animate-fade-in delay-2">
          <div className="icon-container">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#1D61E7" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h2 className="card-title">Global<br />Opportunities</h2>
          <p className="card-text">English skills for a brighter tomorrow.</p>
        </div>

        {/* Card 5: Serve */}
        <div className="bento-card bento-card-serve animate-fade-in delay-3">
          <div className="icon-container square-icon-container">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#2B4B77">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
          </div>
          <span className="card-label">WHO WE SERVE</span>
          <h2 className="card-title" style={{ fontSize: '1.4rem' }}>Students, Teachers,<br />Schools & Institutions</h2>
          <p className="card-text" style={{ fontSize: '0.9rem' }}>Supporting a diverse community of learners and educators.</p>
          
          <div className="avatar-group">
            <div className="avatar"><img src="https://i.pravatar.cc/100?img=33" alt="User" /></div>
            <div className="avatar"><img src="https://i.pravatar.cc/100?img=47" alt="User" /></div>
            <div className="avatar"><img src="https://i.pravatar.cc/100?img=11" alt="User" /></div>
            <div className="avatar"><img src="https://i.pravatar.cc/100?img=5" alt="User" /></div>
            <div className="avatar avatar-plus">+</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section animate-fade-in delay-4">
        <span className="badge">TESTIMONIALS</span>
        <h2>What our clients say</h2>
        <p>Hear from learners, educators and institutions who trust Alpha Cambridge Exam Centre.</p>

        <div className="testimonials-grid">
          
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="testimonial-text">"A smooth and well-organised examination experience. The support from the ATCS team was excellent throughout the process."</p>
            <div className="testimonial-author">
              <div className="author-avatar"><img src="https://i.pravatar.cc/100?img=33" alt="Emma Rodriguez" /></div>
              <div className="author-info">
                <span className="author-name">Emma Rodriguez</span>
                <span className="author-role">Student</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="testimonial-text">"A professional and reliable examination centre. We are very pleased with the support given to our students."</p>
            <div className="testimonial-author">
              <div className="author-avatar"><img src="https://i.pravatar.cc/100?img=11" alt="Daniel Tan" /></div>
              <div className="author-info">
                <span className="author-name">Daniel Tan</span>
                <span className="author-role">Teacher</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="testimonial-text">"ATCS provides clear guidance and a well-organised examination environment."</p>
            <div className="testimonial-author">
              <div className="author-avatar"><img src="https://i.pravatar.cc/100?img=47" alt="Sarah Lim" /></div>
              <div className="author-info">
                <span className="author-name">Sarah Lim</span>
                <span className="author-role">School Representative</span>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="testimonial-card">
            <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="testimonial-text">"As an international candidate, I found the process simple and well-supported. Highly recommend ATCS."</p>
            <div className="testimonial-author">
              <div className="author-avatar"><img src="https://i.pravatar.cc/100?img=68" alt="Michael Chen" /></div>
              <div className="author-info">
                <span className="author-name">Michael Chen</span>
                <span className="author-role">International Candidate</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
