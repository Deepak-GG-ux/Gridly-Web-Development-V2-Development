/**
 * Site header + mobile drawer.
 * Rendered from `data/site.js`, so navigation is edited in exactly one place.
 *
 * Accessibility: the drawer is a labelled dialog, traps Tab focus, closes on
 * Escape or on selecting a link, restores focus to the toggle, and locks
 * background scrolling while open.
 */

import { html, raw, qs, qsa, mount, trapFocus, lockScroll, unlockScroll } from '../core/utils.js';
import { site, navItems, primaryCta } from '../data/site.js';
import { icon, logoMark } from './icons.js';

const logo = (extraClass = '') => html`
  <a class="logo ${extraClass}" href="/" aria-label="${site.name} — home">
    ${logoMark()}
    <span class="logo__word">${site.name.toUpperCase()}</span>
  </a>
`;

const navLink = (item, current) => html`
  <li>
    <a class="nav__link" href="${item.href}" ${raw(item.id === current ? 'aria-current="page"' : '')}>
      ${item.label}
    </a>
  </li>
`;

const drawerLink = (item, current, index) => html`
  <li class="drawer__item" style="--i:${index}">
    <a class="drawer__link" href="${item.href}" ${raw(item.id === current ? 'aria-current="page"' : '')}>
      <span class="drawer__index">${String(index + 1).padStart(2, '0')}</span>
      <span>${item.label}</span>
    </a>
  </li>
`;

const themeToggle = () => html`
  <button class="icon-btn" type="button" data-theme-toggle aria-pressed="false" aria-label="Switch to dark theme">
    <span class="theme-toggle__moon">${icon('moon', 18)}</span>
    <span class="theme-toggle__sun">${icon('sun', 18)}</span>
  </button>
`;

export function renderHeader() {
  const current = document.body.dataset.page || '';
  const target = qs('[data-component="header"]');
  if (!target) return;

  mount(
    target,
    html`
      <div class="scroll-progress" aria-hidden="true"></div>
      <header class="site-header">
        <div class="container site-header__inner">
          ${logo()}

          <nav class="nav" aria-label="Primary">
            <ul class="nav__list">
              ${navItems.map((item) => navLink(item, current))}
            </ul>
          </nav>

          <div class="header-actions">
            ${themeToggle()}
            <a class="btn btn--primary btn--sm" href="${primaryCta.href}">
              ${primaryCta.label}
              <span class="btn__icon">${icon('arrowRight', 15)}</span>
            </a>
            <button
              class="icon-btn hamburger"
              type="button"
              data-drawer-open
              aria-expanded="false"
              aria-controls="site-drawer"
              aria-label="Open menu"
            >
              <span class="hamburger__box" aria-hidden="true">
                <span class="hamburger__bar"></span>
                <span class="hamburger__bar"></span>
                <span class="hamburger__bar"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      <div class="drawer" id="site-drawer" role="dialog" aria-modal="true" aria-label="Site menu" inert>
        <div class="container drawer__head">
          ${logo()}
          <button class="icon-btn hamburger" type="button" data-drawer-close aria-expanded="true" aria-label="Close menu">
            <span class="hamburger__box" aria-hidden="true">
              <span class="hamburger__bar"></span>
              <span class="hamburger__bar"></span>
              <span class="hamburger__bar"></span>
            </span>
          </button>
        </div>
        <div class="container drawer__body">
          <ul class="drawer__list">
            ${navItems.map((item, index) => drawerLink(item, current, index))}
          </ul>
          <a class="btn btn--primary btn--lg btn--block" href="${primaryCta.href}">
            ${primaryCta.label}
            <span class="btn__icon">${icon('arrowRight', 16)}</span>
          </a>
          <div class="drawer__meta">
            <a href="/verify/">Verify a certificate</a>
            <a href="/faq.html">Frequently asked questions</a>
            <span>${site.contact.email}</span>
          </div>
        </div>
      </div>
    `
  );

  initDrawer();
}

function initDrawer() {
  const drawer = qs('#site-drawer');
  const openButton = qs('[data-drawer-open]');
  const closeButton = qs('[data-drawer-close]');
  if (!drawer || !openButton) return;

  let releaseTrap = null;

  const open = () => {
    drawer.classList.add('is-open');
    drawer.removeAttribute('inert');
    openButton.setAttribute('aria-expanded', 'true');
    lockScroll();
    releaseTrap = trapFocus(drawer);
    // Wait for the transition to start before moving focus.
    requestAnimationFrame(() => closeButton?.focus());
  };

  const close = ({ restoreFocus = true } = {}) => {
    if (!drawer.classList.contains('is-open')) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('inert', '');
    openButton.setAttribute('aria-expanded', 'false');
    unlockScroll();
    releaseTrap?.();
    releaseTrap = null;
    if (restoreFocus) openButton.focus();
  };

  openButton.addEventListener('click', open);
  closeButton?.addEventListener('click', () => close());

  qsa('.drawer__link', drawer).forEach((link) =>
    link.addEventListener('click', () => close({ restoreFocus: false }))
  );

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });

  // Returning to a desktop width should never leave the drawer stranded open.
  window.matchMedia('(min-width: 1080px)').addEventListener('change', (event) => {
    if (event.matches) close({ restoreFocus: false });
  });
}
