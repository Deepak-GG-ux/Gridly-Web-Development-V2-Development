/**
 * Reusable tab controller implementing the WAI-ARIA tabs pattern:
 * roving tabindex, arrow-key navigation, Home/End, and a single live panel.
 *
 * Used by the industries selector, the process timeline and the technology
 * catalogue — three different visual treatments, one behaviour.
 */

import { qs, qsa } from '../core/utils.js';

export function initTabs(root, { onChange, orientation = 'horizontal' } = {}) {
  const container = typeof root === 'string' ? qs(root) : root;
  if (!container) return null;

  const tablist = qs('[role="tablist"]', container);
  const tabs = qsa('[role="tab"]', container);
  if (!tablist || !tabs.length) return null;

  tablist.setAttribute('aria-orientation', orientation);

  const select = (tab, { focus = true } = {}) => {
    tabs.forEach((item) => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(item.getAttribute('aria-controls'));
      if (panel) panel.hidden = !active;
    });
    if (focus) tab.focus();
    onChange?.(tab.dataset.tab, tab);
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => select(tab, { focus: false }));
  });

  const nextKeys = orientation === 'vertical' ? ['ArrowDown'] : ['ArrowRight'];
  const prevKeys = orientation === 'vertical' ? ['ArrowUp'] : ['ArrowLeft'];

  tablist.addEventListener('keydown', (event) => {
    const index = tabs.indexOf(document.activeElement);
    if (index === -1) return;

    let target = null;
    if (nextKeys.includes(event.key)) target = tabs[(index + 1) % tabs.length];
    else if (prevKeys.includes(event.key)) target = tabs[(index - 1 + tabs.length) % tabs.length];
    else if (event.key === 'Home') target = tabs[0];
    else if (event.key === 'End') target = tabs[tabs.length - 1];

    if (target) {
      event.preventDefault();
      select(target);
    }
  });

  // Establish the initial state from whichever tab is marked selected.
  const initial = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
  select(initial, { focus: false });

  return { select, tabs };
}
