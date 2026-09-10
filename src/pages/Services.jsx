import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import cambridgeImg from '../assets/student.png'; // or high quality banner asset

export default function Services() {
  return (
    <div className="services-page-wrapper">
      {/* Background Radial Dotted Pattern */}
      <div className="dot-matrix-pattern" aria-hidden="true"></div>

      <div className="services-container">
        
        {/* Header Block */}
        <div className="services-header">
          <div className="header-left">
            <span className="services-badge">SERVICES</span>
            <h1 className="services-title">
              What We Do <span className="title-arrow">↴</span>
            </h1>
          </div>
          
          <div className="header-right">
            <Link to="/contact" className="pill-btn-services">
              Our Services
              <span className="btn-arrow">↗</span>
            </Link>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="services-cards-grid">
          
          {/* Card 1: Cambridge English Qualifications */}
          <div className="service-card service-card-featured">
            <div className="card-image-box">
              <div className="cambridge-badge-overlay">
                <span className="cambridge-logo-text">CAMBRIDGE English</span>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-service-title">Cambridge English<br />Qualifications</h3>
              <div className="card-line-divider"></div>
              <p className="card-service-desc">
                Take internationally recognised English exams like A2 Key, B1 Preliminary, B2 First, C1 Advanced and C2 Proficiency.
              </p>
              
              <Link to="/contact" className="circle-arrow-btn" aria-label="Learn about Cambridge English Qualifications">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 2: Teaching Knowledge Test (TKT) */}
          <div className="service-card">
            <div className="card-body standalone-body">
              <h3 className="card-service-title">Teaching<br />Knowledge Test (TKT)</h3>
              <div className="card-line-divider"></div>
              <p className="card-service-desc">
                Globally respected qualifications for English language teachers to develop and grow their careers.
              </p>
              
              <Link to="/contact" className="circle-arrow-btn" aria-label="Learn about Teaching Knowledge Test">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 3: Examination Centre Services */}
          <div className="service-card">
            <div className="card-body standalone-body">
              <h3 className="card-service-title">Examination Centre<br />Services</h3>
              <div className="card-line-divider"></div>
              <p className="card-service-desc">
                A trusted and authorised Cambridge examination centre, providing a secure and professional testing environment.
              </p>
              
              <Link to="/contact" className="circle-arrow-btn" aria-label="Learn about Examination Centre Services">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 4: Support for Schools & Colleges */}
          <div className="service-card">
            <div className="card-body standalone-body">
              <h3 className="card-service-title">Support for Schools<br />& Colleges</h3>
              <div className="card-line-divider"></div>
              <p className="card-service-desc">
                We partner with educational institutions to offer Cambridge qualifications and support, helping students achieve more.
              </p>
              
              <Link to="/contact" className="circle-arrow-btn" aria-label="Learn about Support for Schools & Colleges">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Left Tagline */}
        <div className="services-bottom-tagline">
          Examinations.<br />
          Opportunities.<br />
          A Brighter Future.
        </div>

      </div>
    </div>
  );
}
