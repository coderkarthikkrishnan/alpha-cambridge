export default function Services() {
  const pageStyle = {
    paddingTop: '72px', minHeight: 'calc(100vh - 72px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'linear-gradient(160deg,#dbeafe 0%,#eff6ff 60%,#f0f9ff 100%)',
    padding: '4rem 1.5rem',
  }
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={pageStyle}>
        <div style={{ maxWidth: '720px', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block', padding: '0.35rem 1rem',
            borderRadius: '9999px', border: '1.5px solid #60a5fa',
            color: '#1d4ed8', fontSize: '0.82rem', fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.5rem',
          }}>Our Services</span>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#0a1f44', letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Services We Offer
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.75, marginBottom: '2rem' }}>
            From exam registration and preparation support to results enquiries and certificates,
            we provide end-to-end assistance for all Cambridge English candidates and educators.
          </p>
          <a href="/contact" style={{
            display: 'inline-block', padding: '0.9rem 2.5rem',
            background: '#0a1f44', color: 'white', fontWeight: 700,
            borderRadius: '9999px', fontSize: '0.95rem',
            boxShadow: '0 8px 24px rgba(10,31,68,0.3)',
          }}>Get in Touch</a>
        </div>
      </section>
    </div>
  )
}
