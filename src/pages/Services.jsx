import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";
import cambridgeCardImg from "../assets/cambridge-english-card.png";

/* ---------- small inline icons (no external icon library required) ---------- */

const ArrowDownRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7L17 17M17 17V9M17 17H9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowUpRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------- subtle halftone / dotted sunburst decoration ---------- */
/* Generated once (not per-render) as a plain data array, then drawn as an SVG. */

function buildHalftoneDots() {
  const dots = [];
  const rings = 22; // concentric arcs, more rings = smoother fan
  const cx = 0; // pattern anchored at its own top-right origin
  const cy = 0;

  for (let r = 0; r < rings; r++) {
    const radius = 30 + r * 24;
    const circumference = 2 * Math.PI * radius;
    const dotSpacing = 15;
    const count = Math.max(6, Math.floor((circumference / dotSpacing) * 0.27)); // quarter-circle density
    const dotSize = 1.4 + r * 0.14;

    for (let i = 0; i < count; i++) {
      // restrict to a quarter circle sweeping from straight down to straight left,
      // matching the reference (fan opening toward the bottom-left of the section)
      const angle = Math.PI / 2 + (i / (count - 1)) * (Math.PI / 2);
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      dots.push({ x, y, size: dotSize, opacity: 0.45 - r * 0.016 });
    }
  }
  return dots;
}

function HalftoneDecoration() {
  const dots = useMemo(buildHalftoneDots, []);
  return (
    <svg
      className="svc-decoration"
      viewBox="-560 -30 590 590"
      preserveAspectRatio="xMaxYMin meet"
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.size} fill="#B9BCC2" opacity={Math.max(d.opacity, 0.05)} />
      ))}
    </svg>
  );
}

/* ---------- data ---------- */

const SERVICES = [
  {
    title: "Cambridge English\nQualifications",
    description:
      "Take internationally recognised English exams like A2 Key, B1 Preliminary, B2 First, C1 Advanced and C2 Proficiency.",
    image: cambridgeCardImg,
    link: "/cambridge-exam-details",
  },
  {
    title: "Teaching\nKnowledge Test (TKT)",
    description:
      "Globally respected qualifications for English language teachers to develop and grow their careers.",
  },
  {
    title: "Examination Centre\nServices",
    description:
      "A trusted and authorised Cambridge examination centre, providing a secure and professional testing environment.",
  },
  {
    title: "Support for Schools\n& Colleges",
    description:
      "We partner with educational institutions to offer Cambridge qualifications and support, helping students achieve more.",
  },
];

/* ---------- main component ---------- */

export default function ServicesSection() {
  return (
    <section className="svc-section">
      <HalftoneDecoration />

      <div className="svc-container">
        <div className="svc-top">
          <p className="svc-eyebrow">SERVICES</p>
          <h2 className="svc-heading">
            What We Do <ArrowDownRight className="svc-heading-arrow" />
          </h2>

          <button type="button" className="svc-cta">
            <span>Our Services</span>
            <ArrowUpRight className="svc-cta-arrow" />
          </button>
        </div>

        <div className="svc-row">
          <div className="svc-left">
            <p className="svc-tagline">
              Examinations.
              <br />
              Opportunities.
              <br />
              A Brighter Future.
            </p>
          </div>

          <div className="svc-cards">
            {SERVICES.map((service, i) => (
              <article className="svc-card" key={service.title}>
                {service.image && (
                  <div className="svc-card-image">
                    <img src={service.image} alt="" />
                  </div>
                )}

                <div className="svc-card-body">
                  <h3 className="svc-card-title">
                    {service.title.split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>

                  <span className="svc-divider" />

                  <p className="svc-card-desc">{service.description}</p>

                  {service.link ? (
                    <Link to={service.link} className="svc-card-arrow" aria-label={`Learn more about ${service.title.replace("\n", " ")}`}>
                      <ArrowRight />
                    </Link>
                  ) : (
                    <button type="button" className="svc-card-arrow" aria-label={`Learn more about ${service.title.replace("\n", " ")}`}>
                      <ArrowRight />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
