import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight } from 'lucide-react';

const Infrastructure = () => {
  return (
    <>
      <div className="page-banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="page-banner-label">Infrastructure</span>
          <h1 className="page-banner-title">Power, Water &amp; Infrastructure</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p className="section-subtitle mb-10">
          Data centers have significant infrastructure requirements. Understanding how these are managed — and what safeguards exist — is essential for informed community discussion.
        </p>

        <div className="dark-prose">
          <h2>Electric Power</h2>

          <h3>Large-Load Tariffs</h3>
          <p>Major electric customers like data centers typically operate under special rate structures called "large-load tariffs." These are negotiated separately from residential rates and include provisions for the unique demands of industrial users.</p>

          <h3>Concerns About Electric Bill Increases</h3>
          <p>In some states, data center development has contributed to higher electric bills for residents when infrastructure costs were spread across all customers. This is a legitimate concern, and El Dorado residents are right to ask about it directly. Kansas has taken steps to address this:</p>
          <ul>
            <li><strong>Kansas law requires cost responsibility:</strong> By law, data centers pay the full cost of their power usage with no discounted electricity rates. They cannot pass infrastructure costs to residential customers.</li>
            <li><strong>Kansas protections (Nov 2025):</strong> The <a href="https://www.kcc.ks.gov/news-11-6-25" target="_blank" rel="noopener noreferrer">Kansas Corporation Commission approved new rules</a> requiring large power users to pay for their own transmission lines and path to power, and operate under separate rate structures from residential customers</li>
            <li><strong>Federal proposal (Jan 2026):</strong> The <a href="https://www.energy.gov/articles/trump-administration-calls-emergency-power-auction-build-big-power-plants-again" target="_blank" rel="noopener noreferrer">Trump administration proposed policies</a> requiring data centers to fund new power generation, specifically to protect residential ratepayers</li>
            <li>Large customers are expected to pay for dedicated infrastructure improvements and connection costs</li>
          </ul>
          <p>These protections work together to ensure residents and small businesses are shielded from cost-shifting. Data centers are required to pay the full cost of their infrastructure needs.</p>

          <h3>Grid Impact</h3>
          <p>Before any major load is added to the grid, utilities conduct interconnection studies to assess capacity and identify needed upgrades. These studies determine what improvements are needed and who pays for them.</p>
          <p style={{ fontStyle: 'italic' }}>Specific rate structures and cost allocation depend on utility agreements and regulatory approvals. These details would be part of any formal proposal.</p>

          <h2>Water Use</h2>

          <h3>Closed-Loop Cooling Systems</h3>
          <p>Modern large-scale data centers like the type being discussed for El Dorado most commonly use <strong>closed-loop cooling systems</strong>. These systems recirculate the same water through the cooling loop continuously, rather than drawing fresh water on every cycle. Water usage varies depending on facility design, cooling technology, and climate conditions.</p>
        </div>

        <div className="dark-prose">
          <h3>What Happens to the Water</h3>
          <p>Water used in data center cooling loops doesn't simply disappear. Water discharged from the cooling system is properly treated — similar to how a municipal wastewater treatment plant operates — and is then either safely released or made available for reuse in other industrial applications. This closed-loop-plus-treatment approach is standard practice at well-operated facilities, and El Dorado's leadership is well-positioned to require it as a binding term in any development agreement.</p>

          <h3>Conservation Requirements</h3>
          <p>Modern data centers increasingly use water-efficient designs. Communities can require water efficiency standards as part of development agreements, including targets for water use effectiveness (WUE) metrics.</p>

          <h3>El Dorado's Unique Water Position</h3>
          <p>El Dorado has a water system unusually well-suited for evaluating large industrial proposals:</p>
          <ul>
            <li><strong>Firm water supply:</strong> <a href="https://www.developeldorado.com/industrial-water" target="_blank" rel="noopener noreferrer">Approximately 10 million gallons per day</a> available for industrial use, planned to remain available even during drought conditions</li>
            <li><strong>Reservoir-based:</strong> El Dorado Reservoir provides long-term planning certainty and reduced risk of depletion</li>
            <li><strong>Direct control:</strong> <a href="https://www.eldoks.gov/340/El-Dorado-Regional-Water-Supply" target="_blank" rel="noopener noreferrer">The city is the sole owner</a> of its water system and contracts directly with the U.S. Army Corps of Engineers</li>
            <li><strong>Industrial history:</strong> Infrastructure designed with industrial demand in mind, not just residential growth</li>
            <li><strong>Revenue opportunity:</strong> The City of El Dorado has actively marketed water for sale for years. Water sales to industrial users create a revenue stream for the city that can support local services and infrastructure — including reinvestment in the lake itself through silt removal, erosion reduction, and habitat improvements.</li>
            <li><strong>Capacity study:</strong> The City completed a feasibility study with Black & Veatch confirming the ability to sell an additional 8.5 billion gallons per year (23 million gallons per day) beyond current sales, while maintaining all existing commitments to residents and current regional customers.</li>
          </ul>

          <h3>Water Capacity in Context</h3>
          <p>To understand what El Dorado's 10 million gallon per day industrial capacity means in practice, consider how a data center's usage compares:</p>
        </div>

        <div className="dark-prose">
          <p>El Dorado's <a href="https://www.developeldorado.com/industrial-water" target="_blank" rel="noopener noreferrer">10 million gallons per day of dedicated industrial water capacity</a> was built specifically for large industrial users and is separate from residential water infrastructure. Any formal proposal should specify exact usage figures and binding caps.</p>
          <p style={{ fontStyle: 'italic' }}>Water requirements depend on facility design and cooling technology. Any formal proposal should specify exact figures and binding usage caps.</p>

          <h2>Infrastructure Footprint</h2>
          <p>Compared to other large-scale developments with similar investment levels, data centers typically have a lighter infrastructure footprint:</p>
        </div>

        <div className="dark-card overflow-hidden my-8">
          <table className="dark-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Data Center</th>
                <th>Manufacturing Plant</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Road Traffic', 'Minimal (small staff, few deliveries)', 'Significant (large workforce, supply chain)'],
                ['Housing Demand', 'Low (dozens to hundreds of jobs)', 'High (thousands of workers)'],
                ['School Impact', 'Minimal', 'Significant growth pressure'],
                ['City Services', 'Limited demand', 'Substantial increase'],
              ].map(([factor, dc, mfg]) => (
                <tr key={factor}>
                  <td style={{ color: '#e2e8f0', fontWeight: 600 }}>{factor}</td>
                  <td>{dc}</td>
                  <td>{mfg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dark-prose">
          <p>This doesn't mean data centers have no impact — they do require significant power and may use water — but the community infrastructure burden is often lower than other industrial developments of similar investment scale.</p>

          <h2>A Proven Track Record</h2>
          <p>Data centers aren't new. They've been operating in American communities for decades — and the results speak for themselves:</p>
          <ul>
            <li><strong>Ashburn, Virginia</strong> is the data center capital of the world, home to 100–200 facilities and the hub of a significant share of the world's internet traffic. It is one of the most desirable communities in the country — not despite the data centers, but in part because of the infrastructure investment they brought.</li>
            <li>Residents of established data center communities frequently report that the facilities are barely noticeable — quiet, low-traffic, and professionally managed. Many people don't even realize they live near one.</li>
            <li>The Linus Tech Tips tour of an Equinix data center drew comments from viewers who were struck by how unassuming and well-integrated the facility appeared.</li>
            <li>The industry's track record across thousands of operational facilities demonstrates that — with proper planning — these concerns are manageable and the benefits are real.</li>
          </ul>
          <h2>Key Safeguards</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { title: 'Utility Coordination', desc: 'Grid studies and capacity planning before approval' },
            { title: 'Cost Allocation', desc: 'Large users typically pay for their infrastructure needs' },
            { title: 'Water Planning', desc: 'Usage must fit within long-term community water plans' },
            { title: 'Regulatory Oversight', desc: 'State and federal agencies review major utility changes' },
          ].map(({ title, desc }) => (
            <div key={title} className="dark-card p-5">
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-light)', marginBottom: '8px' }}>{title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Video callout */}
        <div style={{ background: 'rgba(91,127,255,0.07)', border: '1px solid rgba(91,127,255,0.18)', borderRadius: '12px', padding: '20px 24px', margin: '2rem 0' }}>
          <p style={{ fontWeight: 700, color: '#fff', marginBottom: '6px', fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Want to See Inside a Data Center?</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, marginBottom: '10px' }}>
            Linus Tech Tips produced an unbiased tour of an Equinix data center — one of the largest operators in the world. It's a good way to understand what these facilities actually look like and how they operate.
          </p>
          <a href="https://youtu.be/wumluVRmxyA?si=kCBE3N_O9OecgYn-" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '13px', padding: '10px 20px' }}>
            Watch the Tour on YouTube ↗
          </a>
        </div>

        <Link to={createPageUrl('CommunityConcerns')} className="btn-accent">
          Next: Community Concerns &amp; Safety <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </>
  );
};

export default Infrastructure;