import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight } from 'lucide-react';

const WhyThisMatters = () => {
  return (
    <>
      <div className="page-banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="page-banner-label">Context &amp; Background</span>
          <h1 className="page-banner-title">Why Are We Talking About This?</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="dark-prose">
          <p className="section-subtitle mb-10">
            Large-scale data center investments are being discussed across Kansas. Understanding why — and what it could mean for El Dorado — starts with understanding the broader context.
          </p>

          <h2>Data Centers Are Coming to Kansas</h2>
          <p>Kansas has become a target for data center investment due to its central location, available land, relatively low natural disaster risk, and access to power infrastructure. Several counties across the state are evaluating proposals or have already approved projects.</p>
          <ul>
            <li>Major tech companies are expanding data center capacity nationwide</li>
            <li>Kansas offers geographic and infrastructure advantages</li>
            <li>Multiple Kansas communities are being approached with proposals</li>
          </ul>

          <h2>Some Communities Have Paused or Rejected Projects</h2>
          <p>Not every community has said yes. Some Kansas counties have paused data center discussions or rejected proposals over concerns about power usage, water consumption, tax abatements, or community impact. These decisions highlight the importance of careful evaluation.</p>
          <ul>
            <li>Concerns about long-term utility impacts</li>
            <li>Questions about the balance of tax abatements vs. community benefit</li>
            <li>Desire for more information before making decisions</li>
          </ul>

          <h2>El Dorado Is Studying the Issue Proactively</h2>
          <p>Rather than waiting for a formal proposal and reacting under pressure, El Dorado and Butler County have the opportunity to study the issue now — understanding both the potential benefits and the real concerns before any commitments are made. Some of those concerns are serious and deserve honest examination, not reassurance.</p>
          <ul>
            <li>Time to gather facts and understand the full picture — including things that could go wrong</li>
            <li>Opportunity to establish community priorities and red lines in advance</li>
            <li>Chance to learn from communities that said yes, and from those that said no</li>
          </ul>

          <h2>This Is Not a Decision That Can Be Undone</h2>
          <p>A major industrial facility, once built, will shape El Dorado for decades. The goal of this resource is to make sure that when our community faces this decision, every resident — whether supportive, skeptical, or undecided — has access to honest, complete information to participate meaningfully in the conversation.</p>
        </div>

        <div className="mt-10">
          <Link to={createPageUrl('TaxAbatements')} className="btn-accent">
            Start with Tax Abatements <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default WhyThisMatters;