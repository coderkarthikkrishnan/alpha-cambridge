const pageStyle = {
  paddingTop: '72px',
  minHeight: 'calc(100vh - 72px)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: 'linear-gradient(160deg,#dbeafe 0%,#eff6ff 60%,#f0f9ff 100%)',
  padding: '4rem 1.5rem',
}
const innerStyle = { maxWidth: '720px', textAlign: 'center' }
const badgeStyle = {
  display: 'inline-block', padding: '0.35rem 1rem',
  borderRadius: '9999px', border: '1.5px solid #60a5fa',
  color: '#1d4ed8', fontSize: '0.82rem', fontWeight: 600,
  letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.5rem',
}
const h1Style = {
  fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#0a1f44',
  letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.2,
}
const bodyStyle = { fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.75, marginBottom: '2rem' }
const btnStyle = {
  display: 'inline-block', padding: '0.9rem 2.5rem',
  background: '#0a1f44', color: 'white', fontWeight: 700,
  borderRadius: '9999px', fontSize: '0.95rem',
  boxShadow: '0 8px 24px rgba(10,31,68,0.3)',
}

export default function CambridgeExams() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={pageStyle}>
        <div style={innerStyle}>
          <span style={badgeStyle}>Cambridge Exams</span>
          <h1 style={h1Style}>Cambridge English Qualifications</h1>
          <p style={bodyStyle}>
            Alpha Cambridge offers the complete range of Cambridge Assessment English qualifications —
            from A2 Key to C2 Proficiency — as well as the Teaching Knowledge Test (TKT) for educators.
            Each qualification is globally recognized and benchmarked to the CEFR.
          </p>
          <a href="/contact" style={btnStyle}>Enquire Now</a>
        </div>
      </section>
    </div>
  )
}
