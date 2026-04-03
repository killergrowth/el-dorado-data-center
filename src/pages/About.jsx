import React from 'react';

const About = () => {
  return (
    <>
      <div className="page-banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="page-banner-label">About</span>
          <h1 className="page-banner-title">About This Effort</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="dark-prose">
          <p className="section-subtitle mb-8">
            This website is created by <a href="https://www.eldorado-inc.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-light)', textDecoration: 'underline' }}>El Dorado Inc.</a> to support informed public dialogue about potential data center development in El Dorado and Butler County.
          </p>

          <h2>Our Purpose</h2>
          <p>Major community decisions work best when residents have access to clear, balanced information. This website was created to:</p>
          <ul>
            <li>Explain complex topics in plain language</li>
            <li>Present both opportunities and concerns honestly</li>
            <li>Provide a shared reference for community conversations</li>
            <li>Acknowledge uncertainty and update as new information emerges</li>
          </ul>

          <h2>What This Site Is Not</h2>
        </div>

        <div className="dark-card p-6 my-6 space-y-3">
          {[
            { label: '✕ Not affiliated with any developer.', desc: 'This resource is created by El Dorado Inc., not by a data center developer.' },
            { label: '✕ Not a government website.', desc: 'While we use publicly available information, this is not an official government resource.' },
          ].map(({ label, desc }) => (
            <p key={label} style={{ color: 'var(--text-muted)', margin: 0 }}>
              <strong style={{ color: '#ef4444' }}>{label}</strong>{' '}{desc}
            </p>
          ))}
        </div>

        <div className="dark-prose">
          <h2>Our Principles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          {[
            { title: 'Balanced', desc: 'We try to present both potential benefits and legitimate concerns.' },
            { title: 'Transparent', desc: 'We clearly distinguish between known facts, assumptions, and open questions.' },
            { title: 'Community-Focused', desc: 'Our goal is to inform our community of the potential impact of a data center.' },
          ].map(({ title, desc }) => (
            <div key={title} className="dark-card p-5">
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-light)', marginBottom: '8px' }}>{title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        <p style={{ color: 'var(--text-faint)', fontSize: '12px', fontStyle: 'italic', marginTop: '1.5rem', lineHeight: 1.65 }}>
          This website uses publicly available information and makes reasonable assumptions where noted. It is not legal, financial, or professional advice. For official information, please contact your local government representatives.
        </p>
      </div>
    </>
  );
};

export default About;