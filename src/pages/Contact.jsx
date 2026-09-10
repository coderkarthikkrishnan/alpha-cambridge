import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    examType: '',
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ examType: '', fullName: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        
        {/* Left Column: Support Team Info */}
        <div className="contact-info-col">
          <span className="contact-badge">CONTACT</span>
          <h1 className="contact-title">Talk to our<br />support team</h1>
          <p className="contact-desc">
            Feel free to reach out to us for enquiries about Cambridge English qualifications, the Teaching Knowledge Test, or examination services. Our team will be happy to assist you.
          </p>

          <div className="contact-details-list">
            
            {/* Detail Item 1: Email */}
            <div className="contact-detail-item">
              <div className="detail-icon-tile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="M22 6L12 13L2 6" />
                </svg>
              </div>
              <div className="detail-text">
                <span className="detail-label">Email</span>
                <span className="detail-value">enquiries@alphacambridge.com</span>
              </div>
            </div>

            {/* Detail Item 2: Address */}
            <div className="contact-detail-item">
              <div className="detail-icon-tile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="detail-text">
                <span className="detail-label">Address</span>
                <span className="detail-value">123 Learning Avenue, Singapore</span>
              </div>
            </div>

            {/* Detail Item 3: Call & WhatsApp */}
            <div className="contact-detail-item">
              <div className="detail-icon-tile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="detail-text">
                <span className="detail-label">Call & WhatsApp</span>
                <span className="detail-value">+65 1234 5678</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="form-success-state">
              <div className="success-icon">✓</div>
              <h3>Thank you for reaching out!</h3>
              <p>Our support team will contact you at <strong>{formData.email || 'your email'}</strong> within 24 hours.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              
              {/* Field 1: Exam Type */}
              <div className="form-group">
                <label htmlFor="examType">Exam Type <span className="req">*</span></label>
                <div className="select-wrapper">
                  <select
                    id="examType"
                    name="examType"
                    value={formData.examType}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled hidden>Select an exam type</option>
                    <option value="A2 Key (KET)">A2 Key (KET)</option>
                    <option value="B1 Preliminary (PET)">B1 Preliminary (PET)</option>
                    <option value="B2 First (FCE)">B2 First (FCE)</option>
                    <option value="C1 Advanced (CAE)">C1 Advanced (CAE)</option>
                    <option value="C2 Proficiency (CPE)">C2 Proficiency (CPE)</option>
                    <option value="Teaching Knowledge Test (TKT)">Teaching Knowledge Test (TKT)</option>
                    <option value="General Enquiry">General / Institutional Enquiry</option>
                  </select>
                  <svg className="select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* Field 2: Full Name */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name <span className="req">*</span></label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Field 3: Email Address */}
              <div className="form-group">
                <label htmlFor="email">Email Address <span className="req">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Field 4: Phone Number */}
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Field 5: Message */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-yellow-btn">
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
