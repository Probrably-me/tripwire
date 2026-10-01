/* Tripwire | script.js
   Mobile menu + terminal animation. Smooth scrolling is handled in CSS
   (scroll-behavior), which respects prefers-reduced-motion automatically. */
(() => {
  'use strict';

  /* ---------- Mobile menu ---------- */
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav');

  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Close' : 'Menu';
  };

  btn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  matchMedia('(min-width: 1024px)').addEventListener('change', () => setMenu(false));

  /* ---------- Terminal: reveal lines one by one ---------- */
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lines = [...document.querySelectorAll('#term .ln')];
  if (!lines.length || reduceMotion) return; // without JS or with reduced motion, everything stays visible

  const caret = document.createElement('span');
  caret.className = 'caret';
  caret.setAttribute('aria-hidden', 'true');

  lines.forEach((l) => { l.hidden = true; });

  let i = 0;
  const next = () => {
    if (i >= lines.length) return;
    const line = lines[i++];
    line.hidden = false;
    line.append(caret);                     // the caret follows the last line
    setTimeout(next, i < 3 ? 500 : 900);
  };
  next();
})();
