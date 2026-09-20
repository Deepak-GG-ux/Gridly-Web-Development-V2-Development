/**
 * Inline SVG icons. Kept in one file so stroke weight and grid stay consistent.
 * All icons inherit `currentColor`, so they work in both themes automatically.
 */

import { raw } from '../core/utils.js';

const wrap = (paths, size = 20) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;

const PATHS = {
  layout: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
  cart: '<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2.5l2.2 11.2a1.6 1.6 0 0 0 1.6 1.3h8.6a1.6 1.6 0 0 0 1.6-1.3L20 7H6"/>',
  terminal: '<rect x="2.5" y="4" width="19" height="16" rx="2"/><path d="M7 10l2.6 2.4L7 14.8M12.5 15.2H17"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.2 8.8 13.6 13.6 8.8 15.2 10.4 10.4z"/>',
  refresh: '<path d="M3.5 12a8.5 8.5 0 0 1 14.6-5.9L21 9"/><path d="M21 4v5h-5"/><path d="M20.5 12a8.5 8.5 0 0 1-14.6 5.9L3 15"/><path d="M3 20v-5h5"/>',
  pulse: '<path d="M2.5 12h4l2.5-7 4 14 2.6-7h5.9"/>',
  arrowRight: '<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
  arrowDown: '<path d="M12 4v15"/><path d="m6 13 6 6 6-6"/>',
  check: '<path d="m4 12.5 5 5L20 6.5"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>',
  alert: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5M12 16h.01"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
  print: '<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 15h10v6H7z"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>',
  shield: '<path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6z"/>',
  grid: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>'
};

/** Returns raw markup, safe to interpolate into an `html` template. */
export const icon = (name, size = 20) => raw(wrap(PATHS[name] || PATHS.grid, size));

/** The Gridly mark — a 2x2 grid with one cell filled in the accent colour. */
export const logoMark = (size = 26) =>
  raw(`<svg class="logo__mark" viewBox="0 0 32 32" width="${size}" height="${size}" aria-hidden="true" focusable="false">
    <rect class="cell-1" x="2" y="2" width="12.5" height="12.5" rx="2.5" fill="currentColor" opacity=".9"/>
    <rect class="cell-2" x="17.5" y="2" width="12.5" height="12.5" rx="2.5" fill="currentColor" opacity=".35"/>
    <rect class="cell-3" x="2" y="17.5" width="12.5" height="12.5" rx="2.5" fill="currentColor" opacity=".35"/>
    <rect class="cell-4" x="17.5" y="17.5" width="12.5" height="12.5" rx="2.5" fill="var(--accent)"/>
  </svg>`);
