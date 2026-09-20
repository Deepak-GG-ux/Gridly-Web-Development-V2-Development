/**
 * Homepage.
 * Section rendering is shared with the inner pages (components/sections.js);
 * only the hero interaction is unique to this page.
 */

import { ready } from '../core/app.js';
import { qs, prefersReducedMotion, throttle } from '../core/utils.js';
import {
  renderServices,
  renderPrinciples,
  renderSolutions,
  renderIndustries,
  renderWork,
  renderProcess,
  renderTechStrip
} from '../components/sections.js';

/**
 * Hero: staged text reveal plus a small pointer parallax on the mockup.
 * Both are enhancements — the hero is fully readable without either.
 */
function initHero() {
  const hero = qs('.hero');
  if (!hero) return;

  hero.classList.add('is-ready');

  const mock = qs('.mock', hero);
  if (!mock || prefersReducedMotion() || window.matchMedia('(pointer: coarse)').matches) return;

  const onMove = throttle((event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mock.style.setProperty('--tilt-x', `${(-y * 3).toFixed(2)}deg`);
    mock.style.setProperty('--tilt-y', `${(x * 4).toFixed(2)}deg`);
  }, 40);

  hero.addEventListener('pointermove', onMove);
  hero.addEventListener('pointerleave', () => {
    mock.style.setProperty('--tilt-x', '0deg');
    mock.style.setProperty('--tilt-y', '0deg');
  });
}

export function initHome() {
  renderServices();
  renderPrinciples();
  renderSolutions();
  renderIndustries();
  renderWork();
  renderProcess();
  renderTechStrip();
  initHero();
}

ready.then(initHome);
