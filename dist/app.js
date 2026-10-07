import { copy, links, screens } from './content.js';

const main = document.querySelector('main');
const nav = document.querySelector('#navigation');
let language = 'fr';
try { language = (localStorage.getItem('club-language') || localStorage.getItem('orbit-language')) === 'en' ? 'en' : 'fr'; } catch {}
let screen = screens.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'welcome';
let subjectId = null;
let optionIndex = 0;
const shapes = {
  home: '<path d="m3 10 9-7 9 7v10H3Z"/><path d="M9 20v-7h6v7"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6m3 10v-3a6 6 0 0 0-3-5"/>',
  spark: '<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6Z"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
  brain: '<path d="M12 4c-3-4-7-1-6 2-5 1-5 7-2 8-2 4 1 7 4 6 0 3 4 2 4 0V4Zm0 0c3-4 7-1 6 2 5 1 5 7 2 8 2 4-1 7-4 6 0 3-4 2-4 0M6 6l2 2m-4 6 3-1m11-7-2 2m4 6-3-1"/>',
  shield: '<path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6Z"/><path d="m8 12 3 3 5-6"/>',
  robot: '<rect x="3" y="7" width="18" height="14" rx="4"/><path d="M12 7V3m-4 10h.01M16 13h.01M8 17h8M1 12v5m22-5v5"/><circle cx="12" cy="2" r="1"/>',
  join: '<circle cx="9" cy="7" r="4"/><path d="M2 22v-3a7 7 0 0 1 14 0v3m3-13v8m-4-4h8"/>',
  message: '<path d="M21 11a9 9 0 0 1-9 9 10 10 0 0 1-4-.8L2 21l1.8-6A9 9 0 1 1 21 11Z"/><path d="M7 10h10M7 14h6"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'
};
function icon(name) { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name] || shapes.spark}</svg>`; }
function mascot(speech, cls = '') {
  return `<div class="mascot-scene ${cls}"><img class="bip" src="assets/bip.webp" width="640" height="640" alt="${copy[language].mascotAlt}" fetchpriority="high" decoding="async"><div class="speech"><span class="mascot-label">BIP</span><p>${speech}</p></div></div>`;
}
function button(text, target, secondary = false) { return `<a class="button ${secondary ? 'secondary' : 'primary'}" href="#${target}">${text}</a>`; }
function external(text, url, cls = '') { return `<a class="${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${text}<span class="sr-only"> ${language === 'fr' ? '(nouvel onglet)' : '(new tab)'}</span></a>`; }
function step() { const t = copy[language]; return `<div class="step"><span>${t.step} 0${screens.indexOf(screen) + 1} ${t.of} 04</span><div class="step-dots" aria-hidden="true">${screens.map((s, i) => `<i class="${i <= screens.indexOf(screen) ? 'done' : ''}"></i>`).join('')}</div></div>`; }
function heading(eyebrow, title) { return `<div class="page-heading"><p class="eyebrow">${eyebrow}</p><h1 tabindex="-1">${title}</h1></div>`; }

function welcome() {
  const w = copy[language].welcome;
  return `<section class="welcome view"><div class="welcome-copy"><p class="eyebrow">${w.eyebrow}</p><h1 tabindex="-1">${w.heading.map((line, i) => `<span class="${i === 2 ? 'accent' : ''}">${line}</span>`).join('')}</h1></div>${mascot(w.speech, 'welcome-mascot')}<div class="welcome-actions">${button(w.tour, 'club')}${button(w.join, 'join', true)}<a class="text-link" href="#explore">${w.free}</a></div></section>`;
}
function club() {
  const c = copy[language].club;
  return `<section class="content-page club-page view">${step()}${heading(c.eyebrow, c.heading)}<div class="club-layout">${mascot(c.speech, 'club-mascot')}<div class="values">${c.values.map(v => `<article class="value"><span class="icon-badge">${icon(v.icon)}</span><div><h2>${v.title}</h2><p>${v.text}</p></div></article>`).join('')}</div></div><div class="page-action">${button(c.next, 'explore')}</div></section>`;
}
function idea(option) {
  return `<span class="eyebrow">${copy[language].explore.ideas}</span><h2>${option.heading}</h2><p>${option.text}</p>`;
}
function explore() {
  const e = copy[language].explore;
  const subject = e.subjects.find(s => s.id === subjectId);
  if (!subject) return `<section class="content-page explore-page view">${step()}${heading(e.eyebrow, e.heading)}<div class="explore-layout"><div class="subject-grid">${e.subjects.map(s => `<button class="subject-card" data-subject="${s.id}"><span class="icon-badge">${icon(s.icon)}</span><strong>${s.name}</strong><small>${s.teaser}</small><span class="card-plus" aria-hidden="true">↗</span></button>`).join('')}</div>${mascot(e.speech, 'explore-mascot')}</div></section>`;
  const option = subject.options[optionIndex];
  return `<section class="content-page subject-page view">${step()}<button class="back-link" data-all-subjects>← ${e.back}</button>${heading(e.choose, subject.name)}<div class="subject-detail"><div class="idea-content"><div class="choices" role="group" aria-label="${e.choose}">${subject.options.map((o, i) => `<button class="choice" data-option="${i}" aria-pressed="${optionIndex === i}" aria-controls="idea-panel">${o.title}</button>`).join('')}</div><article id="idea-panel" class="idea-panel" aria-live="polite" aria-atomic="true">${idea(option)}</article></div><img class="bip detail-bip" src="assets/bip.webp" width="640" height="640" alt="${copy[language].mascotAlt}"></div><div class="page-action">${button(e.next, 'join')}</div></section>`;
}
function join() {
  const j = copy[language].join;
  return `<section class="content-page join-page view">${step()}${heading(j.eyebrow, j.heading)}<div class="join-layout">${mascot(j.speech, 'join-mascot')}<div class="join-links"><div class="join-form">${external(j.formAction, links.form, 'button primary')}<p class="small-note">${j.formNote}</p></div><div class="contact-links">${external(`<span class="icon-badge">${icon('message')}</span><span><small>${j.whatsapp}</small><strong>${j.whatsappText}</strong></span>`, links.whatsapp, 'contact-card')}${external(`<span class="icon-badge">${icon('instagram')}</span><span><small>${j.instagram}</small><strong>${j.instagramText}</strong></span>`, links.instagram, 'contact-card')}</div><a class="text-link restart" href="#welcome">${j.restart}</a></div></div></section>`;
}
function render({ focus = false, scroll = false } = {}) {
  const t = copy[language];
  document.documentElement.lang = language;
  document.title = t.title;
  document.querySelector('meta[name="description"]').content = t.description;
  document.querySelector('.brand').setAttribute('aria-label', `Club IT — HESTIM · ${t.nav[0]}`);
  document.querySelector('.language-switch').setAttribute('aria-label', t.languageLabel);
  document.body.dataset.screen = screen;
  main.innerHTML = ({ welcome, club, explore, join })[screen]();
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === language)));
  nav.setAttribute('aria-label', t.navigation);
  nav.hidden = screen === 'welcome';
  nav.innerHTML = screens.map((s, i) => `<a href="#${s}" ${s === screen ? 'aria-current="page"' : ''}>${icon(['home','people','compass','join'][i])}<span>${t.nav[i]}</span></a>`).join('');
  document.querySelector('#footer').hidden = screen !== 'welcome';
  document.querySelector('#footer').innerHTML = screen === 'welcome' ? `<span>${t.footer}</span>${external(t.mainSite, links.main)}` : '';
  if (screen === 'join') document.querySelector('.restart').outerHTML = external(t.mainSite, links.main, 'text-link');
  if (focus) main.querySelector('h1')?.focus({ preventScroll: true });
  if (scroll) window.scrollTo({ top: 0, behavior: 'instant' });
}
document.addEventListener('click', event => {
  if (event.target.closest('.skip-link')) { event.preventDefault(); main.focus(); return; }
  const languageButton = event.target.closest('[data-lang]');
  if (languageButton) {
    language = languageButton.dataset.lang;
    try { localStorage.setItem('club-language', language); } catch {}
    render();
    document.querySelector(`[data-lang="${language}"]`)?.focus({ preventScroll: true });
  }
  const subject = event.target.closest('[data-subject]');
  if (subject) { subjectId = subject.dataset.subject; optionIndex = 0; render({ focus: true, scroll: true }); }
  const choice = event.target.closest('[data-option]');
  if (choice) {
    optionIndex = Number(choice.dataset.option);
    document.querySelectorAll('[data-option]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.option) === optionIndex)));
    const subject = copy[language].explore.subjects.find(s => s.id === subjectId);
    document.querySelector('#idea-panel').innerHTML = idea(subject.options[optionIndex]);
  }
  if (event.target.closest('[data-all-subjects]')) {
    const previous = subjectId;
    subjectId = null;
    render({ scroll: true });
    document.querySelector(`[data-subject="${previous}"]`)?.focus({ preventScroll: true });
  }
});
window.addEventListener('hashchange', () => {
  screen = screens.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'welcome';
  subjectId = null;
  render({ focus: true, scroll: true });
});
render();
