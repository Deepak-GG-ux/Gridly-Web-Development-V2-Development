/**
 * Scroll behaviours built on IntersectionObserver.
 *
 * Nothing here is required for content to be readable: elements are visible by
 * default and the entrance animation is only applied when JavaScript runs and
 * the visitor has not asked for reduced motion.
 */

import { qsa, prefersReducedMotion, throttle } from './utils.js';

export function initReveal() {
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  qsa('.reveal').forEach((element, index) => {
    // Stagger siblings slightly; capped so long lists never feel slow.
    const group = element.dataset.revealGroup;
    if (group) element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 60}ms`);
    observer.observe(element);
  });
}

/** Thin progress bar showing how far through the document the visitor is. */
export function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
  };

  update();
  window.addEventListener('scroll', throttle(update, 50), { passive: true });
  window.addEventListener('resize', throttle(update, 200), { passive: true });
}

/** Marks the header once the page has scrolled past the hero edge. */
export function initHeaderState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const update = () => header.classList.toggle('is-stuck', window.scrollY > 8);
  update();
  window.addEventListener('scroll', throttle(update, 80), { passive: true });
}
