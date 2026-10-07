import assert from 'node:assert/strict';
import { access, readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { copy, links, screens } from '../dist/content.js';

const root = new URL('../',import.meta.url);
assert.deepEqual(screens,['welcome','club','explore','join']);
function shape(value) {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,shape(item)]));
  assert.equal(typeof value,'string');
  assert.ok(value.trim().length,'Empty translation');
  return 'text';
}
assert.deepEqual(shape(copy.fr),shape(copy.en),'French and English content must cover the same choices');
for (const language of ['fr','en']) {
  assert.equal(copy[language].nav.length,screens.length);
  assert.deepEqual(copy[language].explore.subjects.map(s=>s.id),['code','ai','cyber','robot']);
  for (const subject of copy[language].explore.subjects) assert.equal(subject.options.length,3);
}
for (const value of Object.values(links)) assert.equal(new URL(value).protocol,'https:');
assert.equal(new URL(links.instagram).pathname,'/hestimitclub/');
const html = await readFile(new URL('dist/index.html',root),'utf8');
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  if (!/^(https?:|data:)/.test(match[1])) await access(new URL(`dist/${match[1]}`,root));
}
let total=0;
for (const filename of ['bip.webp']) {
  const image = new URL(`dist/assets/${filename}`,root);
  total += (await stat(image)).size;
  const bytes = await readFile(image);
  assert.equal(bytes.toString('ascii',8,12),'WEBP');
}
assert.ok(total < 350000,'Keep the mascot assets lightweight for mobile');
const app = await readFile(new URL('dist/app.js',root),'utf8');
assert.ok(app.includes('assets/bip.webp'));
assert.ok(!app.includes('assets/orbit-'),'All screens must use BIP');
for (const language of ['fr','en']) {
  assert.ok(copy[language].title.includes('BIP'));
  for (const subject of copy[language].explore.subjects) {
    for (const option of subject.options) assert.ok(option.text.length <= 125,'Keep discovery ideas to a short sentence');
  }
}
const config = JSON.parse(await readFile(new URL('vercel.json',root),'utf8'));
assert.equal(config.outputDirectory,'dist');
await access(new URL(`${config.outputDirectory}/index.html`,root));
console.log(`Checks passed: 4 screens, 2 matching languages, 12 choices per language, valid links and assets, ${Math.round(total/1024)} KB of mascot images.`);
