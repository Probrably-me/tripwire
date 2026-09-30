/* Tripwire | script.js
   Menu mobile + animation du terminal. Le défilement doux est géré en CSS
   (scroll-behavior), ce qui respecte automatiquement prefers-reduced-motion. */
(() => {
  'use strict';

  /* ---------- Menu mobile ---------- */
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav');

  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Fermer' : 'Menu';
  };

  btn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  matchMedia('(min-width: 1024px)').addEventListener('change', () => setMenu(false));

  /* ---------- Terminal : révèle les lignes une par une ---------- */
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lines = [...document.querySelectorAll('#term .ln')];
  if (!lines.length || reduceMotion) return; // sans JS ou avec mouvement réduit : tout reste affiché

  const caret = document.createElement('span');
  caret.className = 'caret';
  caret.setAttribute('aria-hidden', 'true');

  lines.forEach((l) => { l.hidden = true; });

  let i = 0;
  const next = () => {
    if (i >= lines.length) return;
    const line = lines[i++];
    line.hidden = false;
    line.append(caret);                     // le curseur suit la dernière ligne
    setTimeout(next, i < 3 ? 500 : 900);
  };
  next();
})();
