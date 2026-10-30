#!/usr/bin/env node
// Builds the root index.html (demo portal) from portal/template.html and every demo page.
// Plain Node (>= 18), no dependencies. Usage: node scripts/build-portal.mjs
//
// Demo pages: demo/index.html (slug "thinkrail") and demo/<slug>/index.html.
// Per page it reads: <title>, <meta name="description">, and optional meta tags:
//   portal-name, portal-order, upstream-repo, upstream-license, description:zh-TW
// Thumbnail: portal/<slug>.webp (or .png/.jpg) if present; skipped otherwise.
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const demoDir = join(root, 'demo');

const decode = (s) => s
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&amp;/g, '&');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s) => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();

function meta(html, name) {
  for (const m of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = m[0];
    const n = tag.match(/\sname\s*=\s*"([^"]*)"/i);
    if (!n || n[1] !== name) continue;
    const c = tag.match(/\scontent\s*=\s*"([^"]*)"/i);
    if (c) return decode(c[1]).trim();
  }
  return '';
}

function parse(file, slug, href) {
  const html = readFileSync(file, 'utf8');
  const title = strip((html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i) || [, ''])[1]);
  const h1 = strip((html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [, ''])[1]);
  const name = meta(html, 'portal-name') || title.split(/\s[—–-]\s/)[0] || h1 || slug;
  const en = meta(html, 'description') || h1 || title;
  const zh = meta(html, 'description:zh-TW') || en;
  const repo = meta(html, 'upstream-repo');
  const license = meta(html, 'upstream-license');
  const order = Number(meta(html, 'portal-order'));
  const thumb = ['webp', 'png', 'jpg'].map((e) => `portal/${slug}.${e}`).find((p) => existsSync(join(root, p)));
  return { slug, href, name, en, zh, repo, license, order: Number.isFinite(order) && meta(html, 'portal-order') !== '' ? order : 1000, thumb };
}

const demos = [];
if (existsSync(join(demoDir, 'index.html'))) demos.push(parse(join(demoDir, 'index.html'), 'thinkrail', './demo/'));
for (const d of readdirSync(demoDir).sort()) {
  const dir = join(demoDir, d);
  if (statSync(dir).isDirectory() && existsSync(join(dir, 'index.html'))) {
    demos.push(parse(join(dir, 'index.html'), d, `./demo/${d}/`));
  }
}
demos.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));

const repoLabel = (u) => u.replace(/^https?:\/\/github\.com\//, '').replace(/\/$/, '');
const card = (d) => `  <li class="card">
${d.thumb ? `    <img src="${esc(d.thumb)}" width="640" height="400" loading="lazy" alt="">\n` : ''}    <div class="body">
      <div class="row"><h2><a href="${esc(d.href)}">${esc(d.name)}</a></h2>${d.license ? `<span class="lic">${esc(d.license)}</span>` : ''}</div>
      <p data-l="zh">${esc(d.zh)}</p>
      <p data-l="en">${esc(d.en)}</p>
${d.repo ? `      <a class="up" href="${esc(d.repo)}" target="_blank" rel="noopener">${esc(repoLabel(d.repo))} ↗</a>\n` : ''}    </div>
  </li>`;

const template = readFileSync(join(root, 'portal/template.html'), 'utf8');
if (!template.includes('{{CARDS}}')) throw new Error('portal/template.html is missing {{CARDS}}');
const out = template.replace('{{CARDS}}', () => demos.map(card).join('\n'));
writeFileSync(join(root, 'index.html'), out);
console.log(`Built index.html with ${demos.length} cards: ${demos.map((d) => d.slug).join(', ')}`);
