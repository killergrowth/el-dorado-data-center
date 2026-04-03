import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Scale, Zap, Shield, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/images/qtrypzzcjebvfcihiynt_supabase_co_69178dc75_3622fbf0-7ff3-47f1-91ce-38124115084e_fcd149c3.png)' }} />
        
        <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(6,6,17,0.88) 0%, rgba(10,12,35,0.75) 60%, rgba(6,6,17,0.65) 100%)' }} />
        {/* Subtle accent glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 20% 50%, rgba(91,127,255,0.1) 0%, transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <span className="section-label">Community Information Resource</span>
            <span className="accent-rule" />
            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              color: '#fff',
              letterSpacing: '-0.01em',
              marginBottom: '1.5rem'
            }}>
              El Dorado<br />Data Center<br />Impact
            </h1>
            <p style={{ color: 'rgba(232,234,246,0.75)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '560px', marginBottom: '1.5rem' }}>
              Clear, balanced information about what a large data center investment could mean for El Dorado, Kansas and Butler County — including potential benefits, risks, and safeguards.
            </p>
            <div
              style={{
                background: 'rgba(91,127,255,0.07)',
                border: '1px solid rgba(91,127,255,0.2)',
                borderRadius: '12px',
                padding: '18px 22px',
                marginBottom: '2rem'
              }}>
              
              <p style={{ color: 'rgba(232,234,246,0.7)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#fff' }}>Why this site exists:</strong>{' '}
                Created by{' '}
                <a href="https://www.eldorado-inc.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-light)', textDecoration: 'underline' }}>El Dorado Inc.</a>
                {' '}to help residents understand a complex topic using publicly available information.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl('WhyThisMatters')} className="btn-accent">
                Why are we talking about this? <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* ── KEY POINTS ── */}
      <section className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 mt-20">
        <div className="mb-12">
          <span className="section-label">Topics</span>
          <h2 className="section-title">The Key Points</h2>
          <p className="section-subtitle">Here's what you need to know. Click any topic to explore the details.</p>
        </div>

        <div className="space-y-6">
          {/* Card 1 */}
          <div className="dark-card">
            <Link to={createPageUrl('TaxAbatements')} className="dark-card-header hover:bg-opacity-80 transition-colors" style={{ textDecoration: 'none' }}>
              <Scale className="w-5 h-5" style={{ color: 'var(--accent-light)' }} />
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#fff', margin: 0 }}>
                Tax Abatements &amp; Fiscal Impact
              </h3>
            </Link>
            <div className="p-6">
              <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: '16px' }}>The Short Version</h4>
              <ul className="space-y-3 dark-prose" style={{ paddingLeft: '1.25rem', marginBottom: '1.25rem' }}>
                <li>El Dorado's EDX policy allows abating of property taxes for up to 10 years. During that window, schools and services receive significantly less revenue than they would from a fully-taxed property.
                </li>
                <li>After abatements end, the facility pays full property taxes — which could grow the tax base and, if budgets remain stable, reduce mill levy rates for everyone.</li>
                <li>Whether residents actually see lower taxes depends entirely on future budget decisions by local officials — it is not automatic.</li>
                <li><strong>The tradeoff is real:</strong> Near-term revenue reduction in exchange for a potential long-term benefit. Residents are right to weigh this carefully.</li>
              </ul>
              <Link to={createPageUrl('TaxAbatements')} style={{ color: 'var(--accent-light)', fontWeight: 600, fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Read the full tax impact explanation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="dark-card">
            <Link to={createPageUrl('Infrastructure')} className="dark-card-header hover:bg-opacity-80 transition-colors" style={{ textDecoration: 'none' }}>
              <Zap className="w-5 h-5" style={{ color: 'var(--accent-light)' }} />
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#fff', margin: 0 }}>
                Power, Water &amp; Infrastructure
              </h3>
            </Link>
            <div className="p-6">
              <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: '16px' }}>The Short Version</h4>
              <div className="space-y-4 dark-prose" style={{ marginBottom: '1.25rem' }}>
                <div>
                  <p style={{ marginBottom: '4px' }}><strong style={{ color: '#e2e8f0' }}>Electric Bills:</strong>{' '}
                    No. By Kansas law, data centers pay the full cost of their power usage with no discounted rates. Kansas put new protections in place in <a href="https://www.kcc.ks.gov/news-11-6-25" target="_blank" rel="noopener noreferrer">November 2025</a> requiring large users to pay for their own transmission lines and infrastructure. Residents are protected from cost-shifting.
                  </p>
                </div>
                <div>
                  <p style={{ marginBottom: '4px' }}><strong style={{ color: '#e2e8f0' }}>Water:</strong>{' '}
                    Modern large-scale facilities typically use closed-loop cooling systems that recirculate water. El Dorado has <a href="https://www.developeldorado.com/industrial-water" target="_blank" rel="noopener noreferrer">10 million gallons per day of industrial water capacity</a> available, backed by El Dorado Reservoir. Water sales also create revenue for the city that supports local services and lake maintenance.
                  </p>
                </div>
                <div>
                  <p style={{ marginBottom: '4px' }}><strong style={{ color: '#e2e8f0' }}>Jobs:</strong>{' '}
                    Data centers create skilled, well-paid permanent positions — typically 30–150 jobs per facility. While fewer than manufacturing, this actually benefits El Dorado by requiring minimal new housing, schools, and infrastructure compared to revenue generated.
                  </p>
                </div>
              </div>
              <Link to={createPageUrl('Infrastructure')} style={{ color: 'var(--accent-light)', fontWeight: 600, fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Read the full infrastructure analysis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="dark-card">
            <Link to={createPageUrl('CommunityConcerns')} className="dark-card-header hover:bg-opacity-80 transition-colors" style={{ textDecoration: 'none' }}>
              <Shield className="w-5 h-5" style={{ color: 'var(--accent-light)' }} />
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#fff', margin: 0 }}>
                Community Concerns &amp; Safety
              </h3>
            </Link>
            <div className="p-6">
              <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: '16px' }}>The Short Version</h4>
              <div className="space-y-3 dark-prose" style={{ marginBottom: '1.25rem' }}>
                <p><strong style={{ color: '#e2e8f0' }}>Noise:</strong> Modern acoustic engineering has made data centers far quieter than most people expect. Many residents near Ashburn, Virginia's 100+ facilities report barely noticing them. Independent noise studies and enforceable limits should still be part of any development agreement.</p>
                <p><strong style={{ color: '#e2e8f0' }}>Emissions:</strong> Backup generators run only during emergencies and scheduled monthly tests — not continuously. Modern tier-4 engines meet strict EPA standards, and air quality monitoring can be made a binding requirement.</p>
                <p><strong style={{ color: '#e2e8f0' }}>Fire Risk:</strong> Modern facilities are built with dedicated suppression systems under rigorous <a href="https://www.ul.com/services/ul-9540a-test-method" target="_blank" rel="noopener noreferrer">UL 9540A</a> and NFPA 855 standards. Operators coordinate with local fire departments before opening — this is standard practice industry-wide.</p>
                <p><strong style={{ color: '#e2e8f0' }}>Property Values:</strong> A <a href="https://schar.gmu.edu/news/2025-11/study-home-prices-are-higher-when-house-near-data-center" target="_blank" rel="noopener noreferrer">2025 George Mason University study</a> found homes near data centers in Northern Virginia sell at higher prices. Ashburn, VA — the world's data center capital — is one of the most desirable communities in the country.</p>
              </div>
              <Link to={createPageUrl('CommunityConcerns')} style={{ color: 'var(--accent-light)', fontWeight: 600, fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Read the detailed safety analysis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LTT VIDEO CALLOUT ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div style={{ background: 'rgba(91,127,255,0.07)', border: '1px solid rgba(91,127,255,0.2)', borderRadius: '14px', padding: '24px 28px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }} className="mt-6 mb-2">
          <div style={{ flex: 1, minWidth: '220px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-light)', display: 'block', marginBottom: '8px' }}>See It For Yourself</span>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.25rem', textTransform: 'uppercase', color: '#fff', marginBottom: '8px' }}>What Does a Data Center Actually Look Like?</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, margin: '0 0 16px' }}>
              Before forming an opinion, it helps to see one. Linus Tech Tips toured an Equinix facility — one of the world's largest operators.
            </p>
            <a href="https://youtu.be/wumluVRmxyA?si=kCBE3N_O9OecgYn-" target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ fontSize: '13px', padding: '10px 22px' }}>
              Watch the Tour on YouTube ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── COMMITMENT STRIP ── */}
      <section style={{ background: 'linear-gradient(135deg, #0a0b20 0%, #0d0f28 100%)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Our Commitment</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Balanced. Transparent. Updated.</h2>
            <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              Our goal is to present facts clearly and help you understand the tradeoffs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
              { title: 'Balanced', desc: 'We present both potential benefits and legitimate concerns.' },
              { title: 'Transparent', desc: 'We show our assumptions and acknowledge what we don\'t know.' },
              { title: 'Updated', desc: 'We\'ll add new information as it becomes available.' }].
              map(({ title, desc }) =>
              <div key={title} style={{ background: 'rgba(91,127,255,0.07)', border: '1px solid rgba(91,127,255,0.15)', borderRadius: '12px', padding: '24px 20px', textAlign: 'left' }}>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', color: '#fff', marginBottom: '8px' }}>{title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Have Questions?</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Browse our frequently asked questions or learn more about this community information effort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={createPageUrl('FAQ')} className="btn-accent">View FAQ</Link>
            <Link to={createPageUrl('About')} className="btn-outline">About This Effort</Link>
          </div>
        </div>
      </section>
    </>);

};

export default Home;