const fs = require('fs');
const path = require('path');

const repo = __dirname;
const html = fs.readFileSync(path.join(repo, 'index.html'), 'utf8');

const pages = [
  { name: 'Home', file: 'index.html' },
  { name: 'WhyThisMatters', file: 'why-this-matters.html' },
  { name: 'TaxAbatements', file: 'tax-abatements.html' },
  { name: 'Infrastructure', file: 'infrastructure.html' },
  { name: 'CommunityConcerns', file: 'community-concerns.html' },
  { name: 'FAQ', file: 'faq.html' },
  { name: 'About', file: 'about.html' },
];

const sectionStartTokens = {
  Home: '<!-- ═══════════════ HOME ═══════════════ -->',
  WhyThisMatters: '<!-- ═══════════════ WHY THIS MATTERS ═══════════════ -->',
  TaxAbatements: '<!-- ═══════════════ TAX ABATEMENTS ═══════════════ -->',
  Infrastructure: '<!-- ═══════════════ INFRASTRUCTURE ═══════════════ -->',
  CommunityConcerns: '<!-- ═══════════════ COMMUNITY CONCERNS ═══════════════ -->',
  FAQ: '<!-- ═══════════════ FAQ ═══════════════ -->',
  About: '<!-- ═══════════════ ABOUT ═══════════════ -->',
};

const headEnd = html.indexOf('</head>');
const headerStart = html.indexOf('<header class="site-header" id="site-header">');
const mainStart = html.indexOf('<main class="page-main">');
const footerStart = html.indexOf('<!-- FOOTER -->');
const scriptStart = html.indexOf('<script>');
const bodyClose = html.lastIndexOf('</body>');

const head = html.slice(0, headEnd);
const bodyOpenChunk = html.slice(headEnd + 7, headerStart);
const header = html.slice(headerStart, mainStart);
const footer = html.slice(footerStart, scriptStart);
const fullScript = html.slice(scriptStart, bodyClose);

const order = pages.map(p => p.name);
const sections = {};
for (let i = 0; i < order.length; i++) {
  const name = order[i];
  const startToken = sectionStartTokens[name];
  const start = html.indexOf(startToken, mainStart);
  const end = i < order.length - 1 ? html.indexOf(sectionStartTokens[order[i + 1]], start) : footerStart;
  if (start === -1 || end === -1) throw new Error(`Could not isolate section ${name}`);
  sections[name] = html.slice(start, end).trim() + '\n';
}

const faqMatch = fullScript.match(/const faqSections = \[[\s\S]*?renderFAQ\(\);/);
if (!faqMatch) throw new Error('Could not isolate FAQ script');
const faqScript = faqMatch[0];

const hamburgerMatch = fullScript.match(/document\.getElementById\('hamburger'\)\.addEventListener\([\s\S]*?\n\}\);/);
if (!hamburgerMatch) throw new Error('Could not isolate hamburger script');
const hamburgerScript = hamburgerMatch[0];

const scrollMatch = fullScript.match(/window\.addEventListener\('scroll',[\s\S]*?\n\}\);/);
if (!scrollMatch) throw new Error('Could not isolate scroll script');
const scrollScript = scrollMatch[0];

function headerFor(current) {
  let out = header;
  for (const p of pages) {
    const navClass = p.name === current ? 'nav-link active' : 'nav-link';
    const mobileClass = p.name === current ? 'mobile-nav-link active' : 'mobile-nav-link';
    out = out.replace(
      new RegExp(`<a class="nav-link(?: active)?" data-nav="${p.name}" href="#">`, 'g'),
      `<a class="${navClass}" href="${p.file}">`
    );
    out = out.replace(
      new RegExp(`<a class="mobile-nav-link(?: active)?" data-nav="${p.name}" href="#">`, 'g'),
      `<a class="${mobileClass}" href="${p.file}">`
    );
  }
  out = out.replace('<a class="logo-link" data-nav="Home" href="#">', '<a class="logo-link" href="index.html">');
  return out;
}

function sectionContent(name) {
  let out = sections[name];
  out = out.replace(/<div class="page(?: active)?" id="page-[A-Za-z]+">/, '<div class="page active">');
  for (const p of pages) {
    out = out.replace(new RegExp(` data-nav="${p.name}" href="#"`, 'g'), ` href="${p.file}"`);
    out = out.replace(new RegExp(` data-nav="${p.name}"`, 'g'), '');
  }
  return out;
}

for (const p of pages) {
  const parts = [];
  parts.push(head);
  parts.push(`\n<style>\n.page-main { display:block; }\n.page { display:block !important; }\n</style>\n</head>`);
  parts.push(bodyOpenChunk);
  parts.push(headerFor(p.name));
  parts.push('\n<main class="page-main">\n');
  parts.push(sectionContent(p.name));
  parts.push('</main>\n');
  parts.push(footer);
  if (p.name === 'FAQ') {
    parts.push('<script>\n' + faqScript + '\n</script>\n');
  }
  parts.push('<script>\n' + hamburgerScript + '\n\n' + scrollScript + '\n</script>\n');
  parts.push('</body>\n</html>\n');
  fs.writeFileSync(path.join(repo, p.file), parts.join(''), 'utf8');
}

fs.writeFileSync(path.join(repo, '_redirects'), [
  '/whythismatters /why-this-matters 301',
  '/taxabatements /tax-abatements 301',
  '/infrastructure /infrastructure 301',
  '/communityconcerns /community-concerns 301',
  '/faq /faq 301',
  '/about /about 301',
  ''
].join('\n'), 'utf8');

console.log('Built multipage files');
