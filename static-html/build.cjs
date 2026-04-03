const fs = require('fs');
const path = require('path');

const staticDir = __dirname;
const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

const header = fs.readFileSync(path.join(staticDir, '_partials', 'header.html'), 'utf8');
const footer = fs.readFileSync(path.join(staticDir, '_partials', 'footer.html'), 'utf8');

const htmlFiles = fs.readdirSync(staticDir).filter(f => f.endsWith('.html'));
for (const file of htmlFiles) {
  let content = fs.readFileSync(path.join(staticDir, file), 'utf8');
  content = content.replace('<!-- HEADER -->', header);
  content = content.replace('<!-- FOOTER -->', footer);
  fs.writeFileSync(path.join(distDir, file), content);
  console.log('Built: ' + file);
}

const toCopy = ['css', 'js', 'images'];
for (const dir of toCopy) {
  const src = path.join(staticDir, dir);
  const dst = path.join(distDir, dir);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dst, { recursive: true });
    console.log('Copied: ' + dir + '/');
  }
}

const redirectsSrc = path.join(staticDir, '_redirects');
if (fs.existsSync(redirectsSrc)) {
  fs.copyFileSync(redirectsSrc, path.join(distDir, '_redirects'));
  console.log('Copied: _redirects');
}

console.log('Build complete -> dist/');
