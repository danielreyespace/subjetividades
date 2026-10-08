// Avisa a Bing (y demás buscadores de IndexNow) qué URLs cambiaron tras un deploy.
// Compara el sitemap anterior al deploy con el publicado y envía solo las URLs
// nuevas o con lastmod distinto. Si no hay sitemap anterior, envía todas.
//
// Uso (lo corre .github/workflows/deploy.yml):
//   node scripts/indexnow.mjs [ruta-al-sitemap-anterior.xml] [--all] [--dry-run]
//
// La clave es pública por diseño: el buscador la verifica en
// https://subjetividades.cl/<KEY>.txt (archivo en public/).

import { readFileSync, existsSync } from 'node:fs';

const HOST = 'subjetividades.cl';
const KEY = '7d5122fe5679f17fd5112439ef428b3b';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

const args = process.argv.slice(2);
const all = args.includes('--all');
const dryRun = args.includes('--dry-run');
const oldPath = args.find((a) => !a.startsWith('--'));

function parse(xml) {
  const map = new Map();
  for (const block of xml.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1];
    const lastmod = block.match(/<lastmod>(.*?)<\/lastmod>/)?.[1] ?? '';
    if (loc) map.set(loc, lastmod);
  }
  return map;
}

const res = await fetch(`${SITEMAP_URL}?t=${Date.now()}`, { headers: { 'User-Agent': 'subjetividades-indexnow' } });
if (!res.ok) {
  console.error(`No se pudo leer el sitemap publicado (${res.status}); no se envía nada.`);
  process.exit(0);
}
const current = parse(await res.text());

let previous = new Map();
if (!all && oldPath && existsSync(oldPath)) previous = parse(readFileSync(oldPath, 'utf8'));

const urlList = [...current]
  .filter(([loc, lastmod]) => all || previous.size === 0 || previous.get(loc) !== lastmod)
  .map(([loc]) => loc);

if (urlList.length === 0) {
  console.log('IndexNow: sin URLs nuevas o modificadas en el sitemap.');
  process.exit(0);
}

if (dryRun) {
  console.log(`IndexNow (dry-run): se enviarían ${urlList.length} URL(s):`);
  urlList.forEach((u) => console.log(`  ${u}`));
  process.exit(0);
}

const r = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});

console.log(`IndexNow: ${urlList.length} URL(s) enviadas → HTTP ${r.status}`);
urlList.forEach((u) => console.log(`  ${u}`));
// Un fallo de IndexNow no debe marcar el deploy como fallido.
if (!r.ok && r.status !== 202) console.warn(await r.text());
