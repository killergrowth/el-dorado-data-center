import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight } from 'lucide-react';

const CommunityConcerns = () => {
  const concerns = [
    {
      color: '#22c55e',
      label: 'Water',
      title: 'Water Use & Treatment',
      concern: 'Water usage is a topic worth understanding, and El Dorado is well positioned to address it.',
      findings: [
        <>El Dorado has <a href="https://www.developeldorado.com/industrial-water" target="_blank" rel="noopener noreferrer">approximately 10 million gallons per day of industrial water capacity</a> specifically earmarked for large industrial users — backed by El Dorado Reservoir and a <a href="https://www.eldoks.gov/340/El-Dorado-Regional-Water-Supply" target="_blank" rel="noopener noreferrer">direct contract with the U.S. Army Corps of Engineers</a></>,
        'Modern cooling systems increasingly use closed-loop designs that recirculate water, reducing the rate of fresh water consumption',
        'Water discharged from the cooling loop is properly treated before release — similar to how a municipal wastewater treatment plant operates',
        'Treated discharge can be safely released or made available for reuse in other industrial applications, minimizing waste',
        'This infrastructure and capacity was designed with large industrial users in mind — not as an afterthought',
      ],
      safeguard: 'Specific water usage caps, treatment standards, and discharge requirements should be written into the development agreement as binding terms before any project is approved. El Dorado\'s city-owned water system and dedicated industrial capacity give community leaders significant leverage to set and enforce these standards.',
    },
    {
      color: '#5b7fff',
      label: 'Noise',
      title: 'Noise from Cooling Systems & Generators',
      concern: 'Large HVAC systems and backup generators can produce noise, and that\'s a fair thing to ask about. For residents near a facility, this deserves a clear answer — not a dismissal.',
      findings: [
        'Cooling equipment runs 24/7 and produces ambient noise; modern acoustic engineering has made significant advances in reducing this',
        'Generator testing (typically monthly) adds brief noise events, but these are scheduled and infrequent',
        'Sound barriers, acoustic enclosures, and vegetation buffers are standard mitigation tools used at facilities nationwide',
        'Thoughtful site selection — distance from residential areas — is the single most effective safeguard',
        'Many communities near established data centers report the facilities are barely noticeable day-to-day',
      ],
      safeguard: 'Independent noise impact studies should be completed before approval, with enforceable decibel limits at property lines built into the development agreement. These are standard practices that responsible developers expect and accept. Residents of Northern Virginia\'s data center corridor have shared their first-hand experiences on Reddit — the consensus is that facilities are largely inaudible from nearby neighborhoods.',
      redditLink: 'https://www.reddit.com/r/nova/comments/1q67c31/can_you_hear_data_centers/',
    },
    {
      color: '#f59e0b',
      label: 'Emissions',
      title: 'Backup Generators & Air Quality',
      concern: 'Large facilities maintain diesel generators as backup power. This is a reasonable thing to understand — and the answers are more reassuring than the concern might suggest.',
      findings: [
        'Backup generators exist for emergencies and scheduled monthly tests — they are not running continuously',
        <>Generators must meet <a href="https://www.epa.gov/stationary-sources-air-pollution/diesel-engines-stationary-sources" target="_blank" rel="noopener noreferrer">EPA emission standards</a>; permit requirements are enforceable by state regulators</>,
        'Modern generator technology has improved significantly; tier-4 engines produce dramatically lower emissions than older models',
        'Fuel storage is regulated under fire and environmental codes that are strictly enforced',
        'Data centers operating in places like Ashburn, Virginia — surrounded by homes, schools, and businesses — have done so without measurable community air quality impacts for decades',
      ],
      safeguard: 'Air quality monitoring during construction and operation can be made a binding requirement in the development agreement — and should be. This is a reasonable ask that responsible developers readily accommodate.',
    },
    {
      color: '#ef4444',
      label: 'Fire Risk',
      title: 'Fire Risk from Batteries & Equipment',
      concern: 'Questions about battery fire safety are completely reasonable — and the industry has invested heavily in exactly this problem. Modern data centers are built with robust, layered safety systems that address this directly.',
      findings: [
        <><a href="https://www.nfpa.org/codes-and-standards/nfpa-855-standard-for-the-installation-of-stationary-energy-storage-systems/free-access" target="_blank" rel="noopener noreferrer">NFPA 855</a> and <a href="https://www.ul.com/services/ul-9540a-test-method" target="_blank" rel="noopener noreferrer">UL 9540A</a> set rigorous safety standards for battery systems — these are not optional guidelines but enforceable code requirements</>,
        'Modern facilities include dedicated fire suppression systems designed specifically for battery fires, independent of municipal response',
        'Data center operators work closely with local fire departments before opening — training and familiarization tours are standard practice',
        'The industry\'s track record across thousands of facilities worldwide demonstrates that proper engineering controls work',
        'Any development agreement should specify coordination with the local fire marshal and include funding for any needed training or equipment',
      ],
      safeguard: 'Fire safety requirements — including on-site suppression systems, emergency response planning, and fire department coordination — should be written into the development agreement before approval. These are well-established requirements that reputable operators already expect.',
    },
    {
      color: '#a78bfa',
      label: 'Visual Impact',
      title: 'Visual Impact & Property Values',
      concern: 'Questions about facility appearance and property values are completely understandable. The evidence from communities that have lived alongside data centers for years is actually quite encouraging.',
      findings: [
        'Ashburn, Virginia — the data center capital of the world with 100–200 facilities — is one of the most desirable places to live in the country. It is not a ghost town.',
        <><a href="https://schar.gmu.edu/news/2025-11/study-home-prices-are-higher-when-house-near-data-center" target="_blank" rel="noopener noreferrer">A 2025 George Mason University study</a> found homes near data centers in Northern Virginia sell at higher prices — attributed to the strong infrastructure data centers require, which benefits surrounding neighborhoods</>,
        <><a href="https://youtu.be/wumluVRmxyA?si=kCBE3N_O9OecgYn-" target="_blank" rel="noopener noreferrer">Viewers of the Linus Tech Tips Equinix facility tour</a> frequently comment in surprise at how understated and quiet the facilities appear — many data centers are designed to blend into their surroundings</>,
        'Modern data centers are often built with landscaping, setbacks, and architectural standards that make them far less visually intrusive than other industrial uses',
        'Lighting can be designed to be directional and shielded — this is a standard requirement in well-written development agreements',
      ],
      safeguard: 'Architectural standards, landscaping requirements, and lighting restrictions should be written into zoning and development agreements. These are straightforward requirements that responsible developers expect — and the Ashburn example shows communities can thrive alongside data centers when development is thoughtfully handled.',
    },
  ];

  return (
    <>
      <div className="page-banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="page-banner-label">Community Concerns</span>
          <h1 className="page-banner-title">Community Concerns &amp; Safety</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p className="section-subtitle mb-10">
          Residents have raised serious, legitimate concerns about noise, safety, emissions, and quality of life — and those concerns deserve honest answers. The good news is that data centers have been operating safely in communities across the country for decades. With the right requirements in place, these concerns are manageable. Here's what we've found, what protections exist, and what El Dorado's leadership should ensure are in place before any project moves forward.
        </p>

        <div className="space-y-6">
          {concerns.map((c) => (
            <div key={c.label} className="dark-card">
              <div style={{ borderLeft: `3px solid ${c.color}` }}>
                <div className="dark-card-header">
                  <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: c.color }}>{c.label}</span>
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.15rem', textTransform: 'uppercase', color: '#fff', margin: 0 }}>{c.title}</h2>
                </div>
                <div className="p-6 dark-prose">
                  <p><strong style={{ color: '#e2e8f0' }}>The Concern:</strong> {c.concern}</p>
                  <p><strong style={{ color: '#e2e8f0' }}>What We Found:</strong></p>
                  <ul style={{ marginBottom: '1rem' }}>
                    {c.findings.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                  <div style={{ background: 'rgba(91,127,255,0.07)', border: '1px solid rgba(91,127,255,0.18)', borderRadius: '8px', padding: '14px 18px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-light)', display: 'block', marginBottom: '4px' }}>Community Safeguard</span>
                    <p style={{ margin: c.redditLink ? '0 0 10px' : '0' }}>{c.safeguard}</p>
                    {c.redditLink && (
                      <a href={c.redditLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-light)', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
                        Read what Northern Virginia residents say on Reddit ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dark-card mt-8 p-6">
          <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.3rem', textTransform: 'uppercase', color: '#fff', marginBottom: '10px' }}>The Bottom Line: Questions Are Good. The Answers Are Reassuring.</h3>
          <p className="section-subtitle" style={{ marginBottom: '1rem' }}>
            Asking hard questions before major decisions is exactly what engaged community members should do — and El Dorado's leadership is committed to doing the same.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '1rem' }}>
            Data centers have been operating safely in communities across the United States for decades. Ashburn, Virginia has more data centers per square mile than anywhere on earth — and it remains a thriving, sought-after community. The concerns raised here are real, but they are also well-understood problems with well-established solutions.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '1rem' }}>
            El Dorado is not new to evaluating major industry. El Dorado has a long history of supporting major industry, including the local refinery, which has been part of this community for decades. When the refinery was established, it brought jobs, investment, and long-term economic growth. Today, it employs approximately 400 workers and continues to play a significant role in the community and regional economy. Those operations are highly regulated and have provided long-term economic benefit while operating alongside our community. El Dorado knows how to ask the right questions, set expectations, and ensure projects operate responsibly.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7 }}>
            El Dorado's community leaders are conducting genuine due diligence. The goal isn't to rubber-stamp a project — it's to make sure that if this moves forward, the right requirements are in place from day one. With proper planning, binding commitments, and responsible development practices, a data center can be a significant long-term asset to El Dorado without compromising quality of life.
          </p>
        </div>

        {/* Video callout */}
        <div style={{ background: 'rgba(91,127,255,0.07)', border: '1px solid rgba(91,127,255,0.18)', borderRadius: '12px', padding: '20px 24px', margin: '2rem 0' }}>
          <p style={{ fontWeight: 700, color: '#fff', marginBottom: '6px', fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>See What a Data Center Actually Looks Like</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, marginBottom: '10px' }}>
            Before forming an opinion about visual impact or facility design, it helps to see what a modern data center actually looks like. Linus Tech Tips toured an Equinix facility — a useful, unbiased reference.
          </p>
          <a href="https://youtu.be/wumluVRmxyA?si=kCBE3N_O9OecgYn-" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '13px', padding: '10px 20px' }}>
            Watch the Tour on YouTube ↗
          </a>
        </div>

        <div className="flex gap-4 mt-10 flex-wrap">
          <Link to={createPageUrl('FAQ')} className="btn-accent">
            View FAQ <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link to={createPageUrl('Home')} className="btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default CommunityConcerns;