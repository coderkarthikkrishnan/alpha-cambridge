import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const GOOGLE_SCRIPT_WEB_APP_URL = '';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      if (GOOGLE_SCRIPT_WEB_APP_URL) {
        await fetch(GOOGLE_SCRIPT_WEB_APP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ email }),
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('Error submitting email to Google Sheets:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <footer className="footer">
      <div className="card-container">
        {/* Left Brand Card */}
        <div className="brand-panel">
          <div className="brand-header">
            {/* Cambridge Crest Logo Shield */}
            <div className="brand-logo-shield">
              <svg viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Shield outer contour */}
                <path d="M3 3h48v32c0 13-12 21-24 24C15 56 3 48 3 35V3z" fill="#002b80" stroke="#E2B842" strokeWidth="1.5" />
                <line x1="27" y1="3" x2="27" y2="59" stroke="#E2B842" strokeWidth="1.2" />
                <line x1="3" y1="23" x2="51" y2="23" stroke="#E2B842" strokeWidth="1.2" />

                {/* Top Left Quadrant - Red with crowns */}
                <path d="M3 3h24v20H3V3z" fill="#b91c1c" />
                <rect x="6" y="6" width="7" height="5" fill="#E2B842" rx="1" />
                <rect x="16" y="6" width="7" height="5" fill="#E2B842" rx="1" />
                <rect x="6" y="14" width="7" height="5" fill="#E2B842" rx="1" />
                <rect x="16" y="14" width="7" height="5" fill="#E2B842" rx="1" />

                {/* Top Right Quadrant - White with red lion */}
                <path d="M27 3h24v20H27V3z" fill="#ffffff" />
                <path d="M31 10h16v3H31z" fill="#b91c1c" />
                <circle cx="39" cy="11.5" r="3" fill="#E2B842" />

                {/* Bottom Left Quadrant - Red */}
                <path d="M3 23h24v12C27 42 18 47 15 48.5 12 47 3 42 3 35V23z" fill="#b91c1c" />
                <text x="15" y="38" fontSize="13" fill="#E2B842" fontWeight="bold" textAnchor="middle">★</text>

                {/* Bottom Right Quadrant - Gold with blue motif */}
                <path d="M27 23h24v12c0 7.5-9 13-12 14.5-3-1.5-12-7-12-14.5V23z" fill="#E2B842" />
                <text x="39" y="38" fontSize="13" fill="#002b80" fontWeight="bold" textAnchor="middle">♞</text>

                {/* Bottom Banner */}
                <path d="M7 51 Q27 56 47 51 L49 54 Q27 60 5 54 Z" fill="#E2B842" />
              </svg>
            </div>
            <h3 className="brand-title">
              Alpha Cambridge<br />Exam Centre
            </h3>
          </div>

          <div className="brand-footer-text">
            <div className="brand-divider"></div>
            <p className="brand-tagline">
              Examinations.<br />
              Opportunities.<br />
              A Brighter Future.
            </p>
          </div>
        </div>

        {/* Right Light Card */}
        <div className="content-panel">
          {/* Floating 3D Badge on Top Right */}
          <div className="floating-badge">
            <div className="book-icon-3d" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-3d-book">
                <defs>
                  <linearGradient id="book-page-grad-left" x1="12" y1="14" x2="30" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" />
                    <stop offset="0.75" stopColor="#F8FAFC" />
                    <stop offset="1" stopColor="#E2E8F0" />
                  </linearGradient>
                  <linearGradient id="book-page-grad-right" x1="52" y1="14" x2="34" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" />
                    <stop offset="0.75" stopColor="#F8FAFC" />
                    <stop offset="1" stopColor="#E2E8F0" />
                  </linearGradient>
                  <linearGradient id="book-spine-shadow" x1="30" y1="14" x2="34" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(15, 23, 42, 0.18)" />
                    <stop offset="1" stopColor="rgba(15, 23, 42, 0.04)" />
                  </linearGradient>
                  <filter id="book-soft-glow" x="4" y="6" width="56" height="52" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#0f172a" floodOpacity="0.16" />
                  </filter>
                </defs>
                <g filter="url(#book-soft-glow)">
                  {/* Left Page (Curved 3D open book) */}
                  <path
                    d="M32 16.5 C26 12 18 12.5 12 14 C10.8 14.3 10 15.3 10 16.6 V43.5 C10 44.8 11.2 45.8 12.5 45.5 C18 44.2 25.5 45 32 49 Z"
                    fill="url(#book-page-grad-left)"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  {/* Right Page (Curved 3D open book) */}
                  <path
                    d="M32 16.5 C38 12 46 12.5 52 14 C53.2 14.3 54 15.3 54 16.6 V43.5 C54 44.8 52.8 45.8 51.5 45.5 C46 44.2 38.5 45 32 49 Z"
                    fill="url(#book-page-grad-right)"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  {/* Spine Crease / Center Fold Shadow */}
                  <path d="M31.5 16.5 V49 C31.8 49.2 32.2 49.2 32.5 49 V16.5 Z" fill="url(#book-spine-shadow)" />
                  <path d="M32 16.5 V49" stroke="rgba(148, 163, 184, 0.35)" strokeWidth="1" strokeLinecap="round" />
                </g>
              </svg>
            </div>
            <div className="tagline-vertical">
              <span>Learn</span>
              <span>Grow</span>
              <span>Belong</span>
              <svg className="script-underline" viewBox="0 0 70 12" fill="none">
                <path d="M2 9C20 3 50 2 68 8" stroke="#5c6f84" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Top Links Row */}
          <div className="links-row">
            <div className="nav-column">
              <h4>NAVIGATION</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cambridge-exams">Cambridge Exams</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="nav-divider"></div>

            <div className="nav-column">
              <h4>INFORMATION</h4>
              <ul>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Row: Copyright + Newsletter */}
          <div className="bottom-row">
            <div className="footer-copyright">
              <p>© 2026 Alpha Training and Consultancy Services.</p>
              <p>All rights reserved.</p>
            </div>

            <div className="newsletter-section">
              <span className="col-label">STAY UPDATED</span>
              <h4 className="newsletter-title">
                Get the latest updates<br />and announcements.
              </h4>
              
              <form className="input-group" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  required
                />
                <button type="submit" disabled={status === 'loading'}>
                  {status === 'loading' 
                    ? 'Subscribing...' 
                    : status === 'success' 
                    ? 'Subscribed!' 
                    : status === 'error' 
                    ? 'Error! Try again' 
                    : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
