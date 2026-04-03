import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight } from 'lucide-react';

const WhatWeKnow = () => {
  return (
    <>
      <div className="page-banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="page-banner-label">Transparency</span>
          <h1 className="page-banner-title">What We Know &amp; What We're Still Studying</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p className="section-subtitle mb-10">
          Transparency is essential. This page clearly distinguishes between confirmed facts, ongoing research, and questions that remain unanswered.
        </p>

        <div className="space-y-8">
          <div className="dark-card p-6">
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.25rem', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: '16px', letterSpacing: '0.04em' }}>
              ✓ What We Know
            </h3>
            <ul className="dark-prose" style={{ paddingLeft: '1.5rem' }}>
              <li>Data centers are being actively developed across Kansas and the Midwest</li>
              <li>Some Kansas communities have paused or declined data center proposals</li>
              <li>Large-load electric customers typically operate under separate rate structures from residential customers</li>
              <li>Modern data centers can use various cooling technologies with different water requirements</li>
              <li>Property tax abatements are commonly used to attract major investments</li>
              <li>After abatements expire, facilities contribute to the local tax base like other properties</li>
              <li>Data centers employ relatively few workers compared to manufacturing</li>
              <li>El Dorado has access to substantial water resources through El Dorado Lake</li>
            </ul>
          </div>

          <div className="dark-card p-6">
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.25rem', textTransform: 'uppercase', color: '#f59e0b', marginBottom: '16px', letterSpacing: '0.04em' }}>
              ⟳ What We're Still Studying
            </h3>
            <ul className="dark-prose" style={{ paddingLeft: '1.5rem' }}>
              <li>Specific power requirements and grid capacity for potential facilities</li>
              <li>Detailed water usage projections based on specific cooling technology choices</li>
              <li>Precise fiscal impact modeling based on potential investment levels and abatement terms</li>
              <li>Emergency response needs and fire department capability requirements</li>
              <li>Noise levels and mitigation requirements for specific site locations</li>
              <li>Traffic and infrastructure impacts during construction phases</li>
              <li>Long-term maintenance and lifecycle considerations</li>
            </ul>
          </div>

          <div className="dark-card p-6">
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.25rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '16px', letterSpacing: '0.04em' }}>
              ? Open Questions
            </h3>
            <ul className="dark-prose" style={{ paddingLeft: '1.5rem' }}>
              <li>What specific proposals, if any, will be presented to the community?</li>
              <li>What terms and conditions would be included in any development agreement?</li>
              <li>How would utility rate structures be affected, if at all?</li>
              <li>What specific safeguards would the community require?</li>
              <li>How would the community prioritize different benefits and concerns?</li>
              <li>What is the timeline for any formal decision-making process?</li>
            </ul>
          </div>
        </div>

        <div className="dark-prose mt-10">
          <h2>Our Commitment to Updates</h2>
          <p>As more information becomes available — from utility studies, formal proposals, community meetings, or expert consultations — we will update this resource. Our goal is to ensure that community members always have access to the most current, accurate information available.</p>
          <p style={{ fontWeight: 600, color: '#e2e8f0' }}>Last updated: February 2026</p>

          <h2>Why Transparency Matters</h2>
          <p>Major community decisions work best when everyone has access to the same information. By clearly stating what we know, what we're researching, and what remains uncertain, we hope to build the foundation for productive community dialogue — regardless of where that dialogue leads.</p>
        </div>

        <div className="mt-10">
          <Link to={createPageUrl('About')} className="btn-accent">
            About This Effort <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default WhatWeKnow;