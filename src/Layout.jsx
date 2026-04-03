import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const Layout = ({ children, currentPageName }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'Home' },
    { label: 'Why This Matters', page: 'WhyThisMatters' },
    { label: 'Tax Abatements', page: 'TaxAbatements' },
    { label: 'Infrastructure', page: 'Infrastructure' },
    { label: 'Community Concerns', page: 'CommunityConcerns' },
    { label: 'FAQ', page: 'FAQ' },
  ];
  const moreLinks = [
    { label: 'About', page: 'About' },
  ];

  return (
    <div className="site-root">
      {/* ── HEADER ── */}
      <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={createPageUrl('Home')} className="logo-link">
            <img
              alt="Data Center Community Information Resource"
              className="h-5 md:h-6 w-auto"
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698e3aba69652e1ac2273d03/fd0b8cd2a_Logo.png"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, page }) => (
              <Link
                key={page}
                to={createPageUrl(page)}
                className={`nav-link ${currentPageName === page ? 'nav-link-active' : ''}`}
              >
                {label}
              </Link>
            ))}
            <Link
              to={createPageUrl('About')}
              className={`nav-link ${currentPageName === 'About' ? 'nav-link-active' : ''}`}
            >
              About
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mobile-menu lg:hidden">
            {[...navLinks, ...moreLinks].map(({ label, page }) => (
              <Link
                key={page}
                to={createPageUrl(page)}
                className={`mobile-nav-link ${currentPageName === page ? 'mobile-nav-link-active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* ── PAGE CONTENT ── */}
      <main className="page-main pt-20">
        {children}
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/images/qtrypzzcjebvfcihiynt_supabase_co_bf558bb7b_bf5f989e-cff7-47ad-9f16-6121e19e963a_95bc88ff.png)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,6,17,0.93) 0%, rgba(10,10,28,0.90) 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="mb-10 text-center">
            <img
              alt="Data Center Community Information Resource"
              className="h-5 w-auto mb-5 mx-auto"
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698e3aba69652e1ac2273d03/fd0b8cd2a_Logo.png"
            />
            <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Website created by <a href="https://www.eldorado-inc.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-light)', textDecoration: 'underline' }}>El Dorado Inc.</a> to provide fact-based information about potential data center development in El Dorado, Kansas.
            </p>
          </div>
          <div className="footer-divider border-t pt-8 text-center">
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>
              This is an information resource created by <a href="https://www.eldorado-inc.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-light)', textDecoration: 'underline' }}>El Dorado Inc.</a> Not affiliated with any developer or government entity.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Barlow+Condensed:wght@500;600;700;800&display=swap');

        :root {
          --bg: #06060f;
          --bg-card: #0c0d1e;
          --bg-card-2: #10112a;
          --accent: #5b7fff;
          --accent-glow: rgba(91,127,255,0.25);
          --accent-light: #7b9fff;
          --text: #e8eaf6;
          --text-muted: #8892b0;
          --text-faint: rgba(255,255,255,0.35);
          --border: rgba(255,255,255,0.07);
          --border-accent: rgba(91,127,255,0.35);
        }

        *, *::before, *::after { box-sizing: border-box; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Barlow', sans-serif;
          margin: 0;
        }

        .site-root { min-height: 100vh; background: var(--bg); }

        /* ── HEADER ── */
        .site-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .header-scrolled {
          background: rgba(6,6,17,0.85);
          backdrop-filter: blur(16px);
          border-bottom-color: var(--border);
        }
        .header-inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 72px;
        }
        .logo-link { display: flex; align-items: center; }

        .nav-link {
          display: inline-flex; align-items: center;
          padding: 6px 14px; border-radius: 8px;
          font-size: 13.5px; font-weight: 500; letter-spacing: 0.01em;
          color: rgba(255,255,255,0.7);
          transition: color 0.2s, background 0.2s;
          text-decoration: none; cursor: pointer; background: transparent; border: none;
        }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.07); }
        .nav-link-active { color: #fff; background: rgba(91,127,255,0.18); }

        .dropdown-menu {
          background: #0f1028; border: 1px solid var(--border);
          border-radius: 10px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .dropdown-item {
          display: block; padding: 11px 18px;
          font-size: 13.5px; color: rgba(255,255,255,0.65);
          text-decoration: none; transition: background 0.15s, color 0.15s;
        }
        .dropdown-item:hover { background: rgba(255,255,255,0.06); color: #fff; }

        .mobile-menu {
          background: rgba(6,6,17,0.97); backdrop-filter: blur(20px);
          border-top: 1px solid var(--border); padding: 12px 0;
        }
        .mobile-nav-link {
          display: block; padding: 12px 20px;
          font-size: 15px; font-weight: 500;
          color: rgba(255,255,255,0.7); text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .mobile-nav-link:hover { color: #fff; background: rgba(255,255,255,0.05); }
        .mobile-nav-link-active { color: var(--accent-light); }

        /* ── PAGE ── */
        .page-main { background: var(--bg); }

        /* ── INNER PAGE BANNER ── */
        .page-banner {
          padding: 80px 0 60px;
          background: linear-gradient(180deg, #0a0b20 0%, #06060f 100%);
          border-bottom: 1px solid var(--border);
          position: relative; overflow: hidden;
        }
        .page-banner::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 60% 50%, rgba(91,127,255,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .page-banner-label {
          display: inline-block;
          font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--accent-light);
          margin-bottom: 14px;
        }
        .page-banner-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 700; text-transform: uppercase; letter-spacing: -0.01em;
          color: #fff; line-height: 1.1; margin: 0;
        }

        /* ── CARDS ── */
        .dark-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px; overflow: hidden;
        }
        .dark-card-header {
          background: var(--bg-card-2);
          border-bottom: 1px solid var(--border);
          padding: 16px 24px; display: flex; align-items: center; gap: 12px;
        }

        /* ── BUTTONS ── */
        .btn-accent {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 28px; border-radius: 10px;
          background: var(--accent); color: #fff;
          font-size: 14px; font-weight: 600; letter-spacing: 0.02em;
          text-decoration: none; transition: opacity 0.2s, transform 0.15s;
          border: none; cursor: pointer;
        }
        .btn-accent:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-outline {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 28px; border-radius: 10px;
          background: transparent; color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          font-size: 14px; font-weight: 600; letter-spacing: 0.02em;
          text-decoration: none; transition: background 0.2s, transform 0.15s;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.08); transform: translateY(-1px); }

        /* ── SECTIONS ── */
        .section-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--accent-light); display: block; margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700; text-transform: uppercase;
          color: #fff; line-height: 1.15; margin: 0 0 16px;
        }
        .section-subtitle {
          color: var(--text-muted); font-size: 16px; line-height: 1.7;
        }

        /* ── FOOTER ── */
        .footer-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.9); margin-bottom: 16px;
        }
        .footer-link {
          font-size: 13.5px; color: rgba(255,255,255,0.4);
          text-decoration: none; transition: color 0.2s;
        }
        .footer-link:hover { color: rgba(255,255,255,0.85); }
        .footer-divider { border-color: rgba(255,255,255,0.08); }

        /* ── PROSE INSIDE DARK PAGES ── */
        .dark-prose { color: var(--text-muted); }
        .dark-prose h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.7rem; font-weight: 700; text-transform: uppercase;
          color: #fff; margin: 2rem 0 1rem; letter-spacing: 0.01em;
        }
        .dark-prose h3 {
          font-size: 1.15rem; font-weight: 600; color: #e2e8f0;
          margin: 1.5rem 0 0.75rem;
        }
        .dark-prose p { line-height: 1.75; margin-bottom: 1rem; }
        .dark-prose ul { padding-left: 1.5rem; margin-bottom: 1rem; }
        .dark-prose li { margin-bottom: 0.5rem; line-height: 1.7; }
        .dark-prose a { color: var(--accent-light); text-decoration: underline; }
        .dark-prose a:hover { color: #fff; }
        .dark-prose strong { color: #e2e8f0; }

        /* ── ACCENT RULE ── */
        .accent-rule {
          display: block; width: 40px; height: 3px;
          background: var(--accent); border-radius: 2px; margin-bottom: 20px;
        }

        /* ── TABLE ── */
        .dark-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .dark-table th {
          background: rgba(91,127,255,0.12); color: var(--accent-light);
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 12px 16px; border-bottom: 1px solid var(--border-accent);
          text-align: left;
        }
        .dark-table td {
          padding: 12px 16px; border-bottom: 1px solid var(--border);
          color: var(--text-muted);
        }
        .dark-table tr:last-child td { border-bottom: none; }
        .dark-table tr:hover td { background: rgba(255,255,255,0.02); }
      `}</style>
    </div>
  );
};

export default Layout;