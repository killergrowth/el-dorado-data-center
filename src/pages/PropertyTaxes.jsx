import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight } from 'lucide-react';

const PropertyTaxes = () => {
  return (
    <>
      <div className="page-banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="page-banner-label">Fiscal Impact</span>
          <h1 className="page-banner-title">Tax Abatements &amp; Fiscal Impact</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p className="section-subtitle mb-10">
          Understanding El Dorado's tax abatement policy, what it means for the community, and how a major data center investment could affect the local tax base over time.
        </p>

        <div className="dark-prose">
          <h2>El Dorado's EDX Abatement Policy</h2>
          <p>The City of El Dorado's Economic Development Exemption (EDX) policy provides property tax abatements scaled to the level of capital investment and job creation.</p>
        </div>

        <div className="dark-prose">
          <p>For a large data center investment — potentially exceeding $1 billion — the actual abatement percentage is negotiated based on the project's scope. For purposes of illustration throughout this page, we use a hypothetical 85% abatement, which represents a plausible outcome for a qualifying large-scale project. The abatement period typically runs up to 10 years, after which the facility pays full property taxes.</p>
          <p><strong>Note on valuation:</strong> Property tax on a data center is assessed on real property (land and buildings), not on personal property like servers and equipment. The taxable assessed value of the physical facility may be significantly lower than the total capital investment figure.</p>

          <h2>What an Abatement Is — and Isn't</h2>
          <p>A tax abatement is not a reduction in existing funding. Schools, services, and infrastructure continue to be funded by existing taxpayers just as before. The abatement simply means the new facility phases into its full tax contribution over time rather than starting at 100% on day one.</p>
          <p>During the abatement period, the facility still contributes economically through construction activity, local spending, sales taxes, and employment. And because data centers require very few employees relative to their investment size, there is minimal new demand placed on schools, roads, or city services. The community gains a major future taxpayer with almost none of the infrastructure costs that typically come with large-scale economic development.</p>

          <h2>Hypothetical Tax Revenue Illustration</h2>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>The following uses hypothetical numbers for illustration only. Actual assessed values, mill levies, and abatement terms would be established through formal agreements.</p>
        </div>

        {/* Hypothetical scenario boxes */}
        <div style={{ background: 'rgba(91,127,255,0.07)', border: '1px solid rgba(91,127,255,0.18)', borderRadius: '12px', padding: '24px', margin: '1.5rem 0' }}>
          <p style={{ fontWeight: 700, color: '#fff', marginBottom: '16px', fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Hypothetical: $500M facility, $150M assessed building value, 174 mill levy, 85% abatement</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Full Annual Tax (no abatement)', value: '$6.5M+', note: 'At 25% assessed value × 174 mills' },
              { label: 'During 85% Abatement', value: '~$975K/yr', note: '15% of full taxes collected for up to 10 years' },
              { label: 'After Abatement (Year 11+)', value: '$6.5M+/yr', note: 'Full taxes collected annually, every year' },
            ].map(({ label, value, note }) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: '6px' }}>{label}</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: '4px' }}>{value}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="dark-prose">
          <h2>How Does That Compare to Homes?</h2>
          <p>To put that in perspective, consider how many single-family homes it would take to generate equivalent tax revenue. Using El Dorado's median home value of approximately <strong>$150,000</strong> and the same 174 mill levy:</p>
        </div>

        <div style={{ background: 'rgba(91,127,255,0.07)', border: '1px solid rgba(91,127,255,0.18)', borderRadius: '12px', padding: '24px', margin: '1.5rem 0' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: '6px' }}>Median Home (Est. $150K)</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: '4px' }}>~$3,000/yr</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>$17,250 assessed × 0.174 mills</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: '6px' }}>Equivalent Homes Needed</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: '4px' }}>~2,100+ homes</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>To match one data center's annual tax revenue</div>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '16px', marginBottom: 0, fontStyle: 'italic' }}>These are hypothetical illustrations. El Dorado has approximately 11,000 residents and around 4,300 housing units. A single data center could contribute tax revenue equivalent to nearly half the city's entire residential tax base — without the corresponding demand for schools, roads, or city services.</p>
        </div>

        <div className="dark-prose">
          <h2>What This Could Mean for Homeowners</h2>
          <p><strong>During abatement (Years 1–10):</strong> The facility pays a reduced share of its eventual full tax contribution — approximately 15% under an 85% abatement. Existing funding for schools, roads, and services is unaffected. The facility still contributes through sales taxes, construction activity, and local economic spending, while generating minimal new demand for city services.</p>
          <p><strong>After abatement (Year 11+):</strong> Once full taxes begin, the data center becomes a major contributor to the local tax base. If that new revenue is larger than budget increases, it could help <strong>stabilize or reduce mill levy rates</strong> for all property owners. Whether that happens depends entirely on future budget decisions by local officials — it is not automatic or guaranteed.</p>
          <p><strong>The honest answer:</strong> Tax abatements are a calculated investment in long-term economic development. The community accepts a reduced contribution in the early years in exchange for a significant long-term taxpayer — one that places almost no new demands on the services that tax revenue funds.</p>
          <p style={{ fontStyle: 'italic' }}>These illustrations are not guarantees. Actual assessed values, abatement terms, and budget outcomes vary significantly.</p>

          <h2>Key Takeaways</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            { title: 'Reduced — Not Zero', desc: "An 85% abatement means roughly 15% of full taxes are still collected during the abatement period — not nothing. Existing funding is not reduced." },
            { title: 'Long-Term Scale', desc: "After abatement, a single data center could match the tax contribution of thousands of homes — with minimal demand for services." },
            { title: 'Negotiable', desc: "Abatement percentage and duration are negotiated. Communities can and should attach conditions and requirements to any agreement." },
            { title: 'Low Infrastructure Demand', desc: "With only 50–150 employees, a data center adds almost no new demand for schools, roads, emergency services, or housing." },
          ].map(({ title, desc }) => (
            <div key={title} className="dark-card p-5">
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-light)', marginBottom: '8px' }}>{title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        <Link to={createPageUrl('Infrastructure')} className="btn-accent">
          Next: Power, Water &amp; Infrastructure <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </>
  );
};

export default PropertyTaxes;