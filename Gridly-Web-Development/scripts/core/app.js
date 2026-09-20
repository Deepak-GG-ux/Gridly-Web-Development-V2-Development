/**
 * Runs on every page: shared chrome and shared behaviours.
 * Page-specific modules are loaded by each page's own script tag.
 */

import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { initAccordions } from '../components/accordion.js';
import { initTheme } from './theme.js';
import { initReveal, initScrollProgress, initHeaderState } from './reveal.js';
import { qsa, toast } from './utils.js';

function initCopyButtons() {
  qsa('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const value = button.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
        toast('Copied to clipboard');
      } catch {
        toast('Copy failed — select the text manually');
      }
    });
  });
}

/** Sets the footer/nav year and any element marked data-year. */
function initYear() {
  qsa('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

let resolveReady;

/**
 * Resolves once shared chrome is rendered. Page modules import this and hang
 * their own setup off it, which guarantees ordering regardless of load timing.
 */
export const ready = new Promise((resolve) => {
  resolveReady = resolve;
});

export function initApp() {
  document.documentElement.classList.add('js');
  renderHeader();
  renderFooter();
  initTheme(); // after the header renders, so the toggle reflects the active theme
  initHeaderState();
  initScrollProgress();
  initAccordions();
  initCopyButtons();
  initYear();
  initReveal();
  document.documentElement.dataset.appReady = 'true';
  resolveReady();
  document.dispatchEvent(new CustomEvent('gridly:ready'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp, { once: true });
} else {
  initApp();
}
