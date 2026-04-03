import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ChevronDown, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqSections = [
    {
      category: "Land Use & Zoning",
      faqs: [
        {
          question: "What zoning changes or variances are being requested?",
          paragraphs: [
            "Any project would be required to comply with existing zoning or go through a public process for any changes. This includes Planning Commission review and City Commission approval. No specific project has been proposed at this time, so no specific zoning requests are pending.",
          ]
        },
        {
          question: "Are residential or mixed-use areas being rezoned to accommodate them?",
          paragraphs: [
            "No, no areas have been zoned for this purpose at this time. Any proposed rezoning would be reviewed publicly and evaluated for compatibility with surrounding land uses.",
          ]
        },
        {
          question: "How does this align with the city's long-term development plan?",
          paragraphs: [
            "Projects are evaluated against the City's comprehensive plan and long-term growth strategy. A key focus has been growing El Dorado's industrial base to strengthen the tax base and reduce reliance on residential property taxes over time.",
          ]
        },
        {
          question: "What is the projected footprint of current and future facilities?",
          paragraphs: [
            "Project size varies. Any proposal would include a defined footprint and phasing plan, which would be reviewed as part of the approval process.",
          ]
        },
      ]
    },
    {
      category: "Power & Grid Impact",
      faqs: [
        {
          question: "How much electricity will these data centers consume?",
          paragraphs: [
            "Data centers are energy-intensive, but usage depends on the size and type of facility. These requirements are evaluated in coordination with the utility provider.",
          ]
        },
        {
          question: "Will this strain the local grid or increase outage risks?",
          paragraphs: [
            "No. Projects are designed with utility coordination to ensure capacity and reliability. Infrastructure upgrades are planned to prevent strain on the system.",
          ]
        },
        {
          question: "Are upgrades to substations or transmission lines required, and who pays?",
          paragraphs: [
            "If upgrades are needed, they are funded by the project or utility agreements tied to that development. Kansas law requires that data centers have to pay for their own transmission lines and path to power.",
          ]
        },
        {
          question: "Will residents or small businesses see higher utility costs?",
          paragraphs: [
            "No. Data centers pay the full cost of their power usage. In Kansas, discounted electricity rates are not provided to these projects — by law. This is a critical protection for residents and small business ratepayers.",
          ]
        },
      ]
    },
    {
      category: "Water Usage",
      faqs: [
        {
          question: "How much water will be used annually?",
          paragraphs: [
            "Modern data centers typically use closed-loop cooling processes, so they do not require high daily water intake. The City of El Dorado has actively been marketing water for sale for years and has an additional 10 million gallons of water per day set aside solely for industrial growth.",
          ]
        },
        {
          question: "What is the source of this water?",
          paragraphs: [
            "The City of El Dorado owns the water rights to El Dorado Reservoir. Depending on the project, water may come from municipal systems, non-potable sources, or reclaimed water. Water sales would be an income stream to the City, supporting local infrastructure and services.",
          ]
        },
        {
          question: "How will this impact drought resilience or water supply?",
          paragraphs: [
            "Water availability and long-term capacity are evaluated as part of project review to ensure sustainability. The City has completed water and wastewater studies confirming the ability to support up to 10 million gallons per day for industrial use.",
          ]
        },
        {
          question: "Are there requirements for water recycling or conservation?",
          paragraphs: [
            "Yes. Many modern facilities incorporate water-efficient technologies, and conservation measures can be included as part of project requirements. Development agreements can specify water-efficient cooling systems and treatment standards.",
          ]
        },
        {
          question: "Will selling more water drop the lake levels negatively impacting fish habitat and recreation use of the lake?",
          paragraphs: [
            "No. Since 1995, the lake has remained full or within three feet below full eighty-nine percent of the time. Additional revenue from the sale of water will allow for reinvestment in the lake, including the removal of silt, erosion reduction, and habitat improvements. These improvements preserve the lake for fishing and recreation.",
          ]
        },
        {
          question: "What happens if the region experiences a drought? Will there be enough water?",
          paragraphs: [
            "Yes. This region is fortunate compared to other parts of Kansas. Because of the foresight and planning of El Dorado's leaders, there has not been a need to ration water since the lake was built. There is enough water to serve all customers during periods of drought, including new customers. El Dorado Lake has the capacity to supply water to 250,000 people in addition to the 30,000 it currently serves. The citizens of El Dorado will always receive the first allocation of water from the lake, and given the lake's vast resources, El Dorado residents will always have enough water.",
          ]
        },
        {
          question: "How much more water can El Dorado sell?",
          paragraphs: [
            "The City completed a feasibility study with Black & Veatch which provided verified data developed by the Kansas water office. The study found that the City of El Dorado could sell an additional allocation of 8.5 billion gallons of water per year, or 23 million gallons per day. In comparison, El Dorado currently sells between 9 and 10 million gallons per day to El Dorado and regional customers.",
          ]
        },
      ]
    },
    {
      category: "Environmental Impact",
      faqs: [
        {
          question: "Has an environmental impact assessment been completed?",
          paragraphs: [
            "Projects are subject to applicable state and federal environmental regulations and permitting processes, which include environmental review.",
          ]
        },
        {
          question: "What emissions are expected, including backup generators?",
          paragraphs: [
            "Data centers are not major emitters. Backup generators are used infrequently — only during emergencies and scheduled monthly tests — and must comply with air quality regulations the same as any other industrial project.",
          ]
        },
        {
          question: "How will noise be managed?",
          paragraphs: [
            "Typical sound levels are around 50–65 dB at the property line, compared to 70–80 dB for nearby highway traffic. Noise is managed through design, setbacks, and buffering. Independent noise studies and enforceable decibel limits should be part of any development agreement.",
          ]
        },
        {
          question: "How are ecosystems and wildlife protected?",
          paragraphs: [
            "Site planning includes setbacks, buffers, and compliance with environmental regulations. Impacts are evaluated as part of the development process and are comparable to other types of commercial or industrial development.",
          ]
        },
      ]
    },
    {
      category: "Economic Impact",
      faqs: [
        {
          question: "How many permanent jobs will be created?",
          paragraphs: [
            "Data centers typically employ around 30 workers per building, with multiple buildings on a campus. These are skilled, well-compensated, and benefitted positions. This compares to roughly 50–150 permanent jobs per facility depending on scale and configuration. While fewer than some other industries, the positions are high-wage and high-skill.",
          ]
        },
        {
          question: "What incentives are being offered?",
          paragraphs: [
            "Any incentives, such as abatements, would be considered publicly and approved through established processes. At this point no incentives have been offered or proposed for any specific project.",
          ]
        },
        {
          question: "What is the projected tax revenue after incentives expire?",
          paragraphs: [
            "These projects can generate significant long-term property tax revenue from day one. Revenue sources include property taxes (after abatement periods end), electric franchise fees, and water sales — creating multiple income streams for the city and supporting services.",
          ]
        },
        {
          question: "How do these benefits compare to other land uses?",
          paragraphs: [
            "Data centers provide high capital investment, long-term revenue, and low demand on city services. Revenue sources include property taxes, electric franchise fees, and water sales. Compared to residential development, data centers require minimal infrastructure expansion and generate substantially higher tax revenue per acre.",
          ]
        },
      ]
    },
    {
      category: "Infrastructure & Traffic",
      faqs: [
        {
          question: "How will construction impact traffic?",
          paragraphs: [
            "Construction impacts are temporary and managed through standard permitting and traffic planning processes.",
          ]
        },
        {
          question: "Are road improvements needed, and who pays?",
          paragraphs: [
            "Any required infrastructure improvements are typically identified early and tied to the project. Developers are responsible for funding improvements necessary to serve their facility.",
          ]
        },
        {
          question: "Will there be increased truck traffic in residential areas?",
          paragraphs: [
            "Ongoing operations typically generate minimal daily traffic compared to other industrial uses. A data center with 30–150 employees will have far less traffic impact than manufacturing facilities with thousands of workers.",
          ]
        },
      ]
    },
    {
      category: "Risk & Emergency Preparedness",
      faqs: [
        {
          question: "What fire risks are associated with these facilities?",
          paragraphs: [
            "Data centers include built-in fire detection and suppression systems and are designed with safety as a priority. Modern facilities are constructed to rigorous safety standards including NFPA 855 and UL 9540A.",
          ]
        },
        {
          question: "Are local fire departments equipped for this?",
          paragraphs: [
            "Coordination with local emergency services is part of project planning. El Dorado benefits from the presence of the HF Sinclair Refinery, which maintains a highly specialized fire team and supports training for local fire personnel. Data center operators also conduct pre-opening coordination with fire departments, including training and familiarization tours.",
          ]
        },
        {
          question: "What happens during outages or system failures?",
          paragraphs: [
            "Facilities are designed with redundancy systems, including backup power, to maintain operations during disruptions. These systems are built-in and essential to data center operations.",
          ]
        },
      ]
    },
    {
      category: "Community Impact & Transparency",
      faqs: [
        {
          question: "How are residents being informed and involved?",
          paragraphs: [
            "Public hearings and meetings are part of the approval process, allowing for community input. Current discussions are taking place proactively to provide information before any specific project is considered.",
          ]
        },
        {
          question: "Will there be public hearings?",
          paragraphs: [
            "Yes. Zoning changes and major approvals require public review and hearings. Any proposed data center project would go through the full Planning Commission and City Commission review process with public notice and comment periods.",
          ]
        },
        {
          question: "Are community benefit agreements being considered?",
          paragraphs: [
            "Yes. Community expectations and benefits are part of the overall evaluation process. Development agreements can include specific commitments regarding noise limits, emissions monitoring, water usage, fire safety, and other community protections.",
          ]
        },
        {
          question: "What accountability exists if commitments are not met?",
          paragraphs: [
            "Agreements include defined terms and conditions that are enforceable. In many cases, developers are required to pay for infrastructure and utilities based on projected usage, regardless of actual use, ensuring the community receives anticipated benefits.",
          ]
        },
      ]
    },
    {
      category: "Long-Term Planning",
      faqs: [
        {
          question: "What happens at the end of a facility's lifecycle?",
          paragraphs: [
            "Facilities are privately owned and maintained. Data center buildings are constructed like other industrial buildings and have long lifespans. The equipment inside a data center is what is changed every few years. Sites can also be repurposed or redeveloped over time depending on future needs — the building shell is not affected by its current use.",
          ]
        },
        {
          question: "Are there limits on clustering or over-concentration?",
          paragraphs: [
            "Zoning and land use planning help guide appropriate locations and prevent incompatible development. El Dorado's planning process would evaluate any proposal in the context of existing and future land uses.",
          ]
        },
        {
          question: "How does this impact housing, schools, and growth?",
          paragraphs: [
            "These factors are considered as part of long-term planning to ensure balanced community development. Data center development would have a high impact on property tax revenue for schools, the city, county, college, and other services. This would create additional workforce pathways and opportunities for highly technical, well-paid jobs. Schools would benefit from increased revenues and may see additional students from worker families. Data center groups actively seek to be good community partners and invest significantly in the areas where they operate.",
          ]
        },
      ]
    },
    {
      category: "Big Picture",
      faqs: [
        {
          question: "Who benefits from these developments?",
          paragraphs: [
            "The goal is to ensure the community benefits through investment, long-term revenue, and economic growth. Data centers contribute through property taxes, franchise fees, and water sales — benefiting city services, schools, and the broader community.",
          ]
        },
        {
          question: "What are we giving up in exchange?",
          paragraphs: [
            "Land, infrastructure, and resources are evaluated carefully. El Dorado has available land and water designated for industrial growth, and projects are structured so developers fund their infrastructure needs. The exchange is land use for sustained long-term revenue and economic stability.",
          ]
        },
        {
          question: "How does this affect El Dorado long-term?",
          paragraphs: [
            "The focus is on sustainable growth while protecting community character and resources. El Dorado has seen this type of impact before. When the refinery was established, it brought jobs, investment, and long-term economic growth. Today, it employs approximately 400 workers and continues to play a significant role in the community and regional economy. Data centers offer a similar opportunity for long-term economic benefit with lower infrastructure demands on the community.",
          ]
        },
        {
          question: "Is the City of El Dorado trying to quietly sneak this through?",
          paragraphs: [
            "No — and the facts make this clear. Some residents have raised concerns about Planning Commission discussions and zoning updates, but these are standard municipal processes. Planning Commission meetings are held monthly with publicly posted agendas, open to the public, streamed live on YouTube, and recordings available afterward. This is simply the City Engineering Department doing its job — responding to shifts in industry demand and ensuring zoning is current. El Dorado's leaders have been clear that any data center proposal would go through a full public process, including community input, before any commitments are made.",
          ]
        },
      ]
    },
    {
      category: "Additional Questions",
      faqs: [
        {
          question: "Will a data center raise my electric bill?",
          paragraphs: [
            "No. Kansas regulators put strong new protections in place in November 2025 specifically requiring large power users to pay for their own infrastructure under separate rate structures — designed to prevent cost-shifting to residential customers. Kansas law requires data centers to pay full cost of power usage with no discounts. The Kansas Corporation Commission's new rules mean there are real safeguards in place.",
          ]
        },
        {
          question: "How many jobs will a data center create?",
          paragraphs: [
            "Data centers typically create 30–150 permanent jobs depending on size and configuration. These are skilled, well-compensated positions. This is fewer than some other industries but with higher wages. Importantly, fewer permanent employees means less demand for housing, roads, schools, police, fire, and other city services. A data center contributes substantial tax revenue while placing minimal strain on infrastructure. This is a more favorable economic profile than a large manufacturer bringing thousands of jobs and residents.",
          ]
        },
        {
          question: "Will this raise my property taxes?",
          paragraphs: [
            "It's unlikely to raise your taxes and may reduce them over time. During abatement periods, the facility pays reduced property taxes, but existing revenue from homes and businesses continues as before. After abatement ends (typically 10 years), the facility pays full property taxes — potentially millions per year. This new revenue could allow mill levy rates to stabilize or decline, depending on future budget decisions by local officials.",
          ]
        },
        {
          question: "How will this affect my property value?",
          paragraphs: [
            "The evidence is encouraging. A 2025 George Mason University study found homes near data centers in Northern Virginia sold at higher prices than those farther away. Ashburn, Virginia — the data center capital with 100+ facilities — is one of the most desirable communities in the country. Strong infrastructure data centers require benefits surrounding areas.",
          ]
        },
        {
          question: "What about noise from the facility?",
          paragraphs: [
            "Modern facilities are engineered with acoustic enclosures and sound barriers making them far quieter than expected. Many residents near Ashburn's 100+ data centers report barely noticing them. Typical sound levels are 50–65 dB at the property line compared to 70–80 dB for highway traffic. Independent noise studies and enforceable decibel limits should be part of any development agreement.",
          ]
        },
        {
          question: "Are data center batteries safe?",
          paragraphs: [
            "Yes, when built to modern standards. The industry developed rigorous safety codes (NFPA 855 and UL 9540A) specifically for battery fire risks. Modern facilities include dedicated suppression systems. Data center operators coordinate with local fire departments before opening — this is standard practice. Any development agreement should include fire department coordination and on-site suppression systems.",
          ]
        },
        {
          question: "What are tax abatements and why are they used?",
          paragraphs: [
            "Tax abatements temporarily reduce property taxes to attract large capital investments. Under El Dorado's EDX (Economic Development Exemption) policy, abatements are scaled to investment and job creation and typically run up to 10 years. An abatement is not a reduction in existing tax revenue — schools and services continue to be funded by existing taxpayers. The facility simply phases in its full tax contribution over time. Property tax is assessed on real property (land and buildings), not equipment. A hypothetical $500M facility could generate $975K/year during abatement and $6.5M+/year after — equivalent to over 2,100 median El Dorado homes without corresponding demand for schools and roads. After abatement, new revenue could reduce mill levy rates, but this depends on future budget decisions.",
          ]
        },
        {
          question: "Will this strain our roads and schools?",
          paragraphs: [
            "Almost certainly not. Data centers employ 30–150 people, meaning minimal traffic, minimal new housing demand, and minimal pressure on schools or emergency services. Construction can create temporary truck traffic but is manageable. Once operational, the facility runs quietly with a small workforce. Tax revenue generated could help improve services for existing residents.",
          ]
        },
        {
          question: "Was the content on this site all just created by AI?",
          paragraphs: [
            "No. Hours of research went into creating this site, reviewing public records, regulatory filings, academic studies, news coverage, and community resources. AI was used to help develop the final draft, but all information, framing, and conclusions were formed by people. The goal was accuracy and balance — not generating text for its own sake.",
          ]
        },
        {
          question: "Can the community negotiate safeguards?",
          paragraphs: [
            "Yes. Development agreements and zoning processes give the community real leverage to require specific, binding protections: noise limits, emissions monitoring, landscaping, water usage caps, fire safety requirements, and more. Reputable developers expect and accept these requirements.",
          ]
        },
      ]
    },
  ];



  return (
    <>
      <div className="page-banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="page-banner-label">Quick Answers</span>
          <h1 className="page-banner-title">Frequently Asked Questions</h1>
          <p style={{ color: 'rgba(232,234,246,0.55)', marginTop: '12px', fontSize: '15px' }}>
            Common questions about data center development in El Dorado
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.5rem', fontWeight: 700, textTransform: 'uppercase', color: '#fff', letterSpacing: '0.05em', margin: '0 0 8px' }}>
                  {section.category}
                </h2>
                <div style={{ width: '40px', height: '3px', background: 'var(--accent)', borderRadius: '2px' }} />
              </div>

              <div className="dark-card overflow-hidden">
                {section.faqs.map((faq, faqIndex) => {
                  const globalIndex = faqSections.slice(0, sectionIndex).reduce((sum, s) => sum + s.faqs.length, 0) + faqIndex;
                  return (
                    <div key={faqIndex} style={{ borderBottom: faqIndex < section.faqs.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                      <button
                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                        style={{
                          width: '100%', padding: '20px 24px',
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          background: 'transparent', border: 'none', cursor: 'pointer',
                          textAlign: 'left', transition: 'background 0.15s',
                          color: '#fff',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        <span style={{ fontWeight: 600, fontSize: '15px', paddingRight: '2rem', color: openIndex === globalIndex ? 'var(--accent-light)' : '#e2e8f0' }}>
                          {faq.question}
                        </span>
                        <ChevronDown
                          className="flex-shrink-0"
                          style={{
                            width: '18px', height: '18px',
                            color: 'var(--text-muted)',
                            transform: openIndex === globalIndex ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.2s',
                          }}
                        />
                      </button>
                      {openIndex === globalIndex && (
                        <div style={{ padding: '0 24px 20px', color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.75 }}>
                          {faq.paragraphs.map((p, i) => (
                            <p key={i} style={{ marginBottom: i < faq.paragraphs.length - 1 ? '0.85rem' : 0 }}>{p}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;