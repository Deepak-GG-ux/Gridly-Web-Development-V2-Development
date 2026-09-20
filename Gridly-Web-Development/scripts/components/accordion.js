/**
 * Progressive accordion.
 *
 * Works on any markup shaped as:
 *   <div class="accordion" data-accordion>
 *     <div class="accordion__item">
 *       <h3><button class="accordion__trigger" aria-expanded="false" aria-controls="ID">…</button></h3>
 *       <div class="accordion__panel" id="ID" role="region" data-open="false"><div><div class="accordion__body">…</div></div></div>
 *     </div>
 *   </div>
 *
 * Panels use a grid-template-rows transition, so they animate to their real
 * height without JavaScript measuring anything. With JS unavailable the panels
 * simply render open, so the content is never lost.
 */

import { qsa } from '../core/utils.js';

export function initAccordions(scope = document) {
  qsa('[data-accordion]', scope).forEach((accordion) => {
    const triggers = qsa('.accordion__trigger', accordion);
    const single = accordion.dataset.accordion === 'single';

    triggers.forEach((trigger) => {
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));
      if (!panel) return;

      // Collapse by default only once JS has confirmed it can expand them again.
      const startOpen = trigger.getAttribute('aria-expanded') === 'true';
      panel.dataset.open = String(startOpen);

      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';

        if (single && !isOpen) {
          triggers.forEach((other) => {
            if (other === trigger) return;
            other.setAttribute('aria-expanded', 'false');
            const otherPanel = document.getElementById(other.getAttribute('aria-controls'));
            if (otherPanel) otherPanel.dataset.open = 'false';
          });
        }

        trigger.setAttribute('aria-expanded', String(!isOpen));
        panel.dataset.open = String(!isOpen);
      });
    });

    // Arrow-key navigation between headers, per the WAI-ARIA accordion pattern.
    accordion.addEventListener('keydown', (event) => {
      const index = triggers.indexOf(event.target);
      if (index === -1) return;
      const keys = { ArrowDown: 1, ArrowUp: -1 };
      if (event.key in keys) {
        event.preventDefault();
        const next = (index + keys[event.key] + triggers.length) % triggers.length;
        triggers[next].focus();
      } else if (event.key === 'Home') {
        event.preventDefault();
        triggers[0].focus();
      } else if (event.key === 'End') {
        event.preventDefault();
        triggers[triggers.length - 1].focus();
      }
    });
  });
}
