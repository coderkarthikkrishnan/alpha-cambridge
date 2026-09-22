import React, { useState } from 'react';
import './FAQ.css';

const FAQ_DATA = [
  {
    question: "What Cambridge English examinations do you offer?",
    answer: "Alpha Cambridge Exam Centre offers a full suite of Cambridge Assessment English qualifications, including A2 Key (KET), B1 Preliminary (PET), B2 First (FCE), C1 Advanced (CAE), C2 Proficiency (CPE), and the Teaching Knowledge Test (TKT) for educators.",
    category: "General"
  },
  {
    question: "How do I register for an examination?",
    answer: "You can register online through our Contact & Registration page, or visit our centre in person. Select your desired exam type, provide candidate details, and choose an available exam session date.",
    category: "Registration"
  },
  {
    question: "When and where are exams held?",
    answer: "Examinations are held regularly throughout the year at our authorised examination centre in Singapore, as well as designated institutional venues for institutional candidates. Detailed timetables are provided upon registration confirmation.",
    category: "Exams"
  },
  {
    question: "How long does it take to receive examination results and certificates?",
    answer: "Computer-based exam results are typically available within 2 to 3 weeks, while paper-based exam results take 4 to 6 weeks. Official Cambridge Assessment English certificates are dispatched approximately 2 weeks after results are released.",
    category: "Results"
  },
  {
    question: "What is the Teaching Knowledge Test (TKT)?",
    answer: "TKT is a series of flexible, modular teaching qualifications test designed by Cambridge to test core areas of English language teaching knowledge for primary, secondary, and adult education teachers.",
    category: "General"
  },
  {
    question: "Can schools and colleges partner with Alpha Cambridge Exam Centre?",
    answer: "Yes! We work closely with educational institutions to provide institutional exam registration, preparation resources, on-site test administration, and dedicated teacher support.",
    category: "Institutional"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'General', 'Registration', 'Exams', 'Results', 'Institutional'];

  const filteredFaqs = activeCategory === 'All' 
    ? FAQ_DATA 
    : FAQ_DATA.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-page-wrapper">
      <div className="faq-container">
        
        {/* Header */}
        <div className="faq-header">
          <span className="faq-badge">FAQ</span>
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">
            Find answers to common questions about Cambridge English examinations, registration procedures, and candidate support.
          </p>

          {/* Category Filter Pills */}
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Expandable Accordion List */}
        <div className="faq-accordion-list">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleAccordion(idx)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="faq-icon-toggle">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </div>

                {isOpen && (
                  <div className="faq-answer-row">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
