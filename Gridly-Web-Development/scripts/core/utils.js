/**
 * Shared utilities.
 *
 * SECURITY: `html` is a tagged template that escapes every interpolated value
 * by default. Anything rendered from data — and especially anything that could
 * ever originate from user input — must go through it. Use `raw()` only for
 * markup this codebase generated itself.
 */

const ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

export const escapeHtml = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (char) => ESCAPE_MAP[char]);

class RawMarkup {
  constructor(value) {
    this.value = value;
  }
  /** Lets generated markup be used anywhere a string is expected. */
  toString() {
    return this.value;
  }
}

/** Marks a string as trusted markup so `html` will not escape it. */
export const raw = (value) => new RawMarkup(value);

const serialise = (value) => {
  if (value === null || value === undefined || value === false) return '';
  if (value instanceof RawMarkup) return value.value;
  if (Array.isArray(value)) return value.map(serialise).join('');
  return escapeHtml(value);
};

/**
 * Tagged template literal that escapes interpolations.
 * Returns trusted markup, so templates nest inside each other without being
 * escaped a second time, while plain values are always escaped.
 */
export function html(strings, ...values) {
  return raw(
    strings.reduce((out, chunk, index) => out + serialise(values[index - 1]) + chunk)
  );
}

/* --- DOM ---------------------------------------------------------------- */
export const qs = (selector, scope = document) => scope.querySelector(selector);
export const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/** Turns a markup string into a DOM node. */
export function fromHtml(markup) {
  const template = document.createElement('template');
  template.innerHTML = String(markup).trim();
  return template.content.firstElementChild;
}

/** Replaces the contents of a mount point with generated markup. */
export function mount(target, markup) {
  const node = typeof target === 'string' ? qs(target) : target;
  if (!node) return null;
  node.innerHTML = String(markup);
  return node;
}

/* --- Motion & environment ------------------------------------------------ */
export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isTouchDevice = () =>
  window.matchMedia('(hover: none), (pointer: coarse)').matches;

/* --- Timing -------------------------------------------------------------- */
export function debounce(fn, wait = 150) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

export function throttle(fn, limit = 100) {
  let waiting = false;
  return (...args) => {
    if (waiting) return;
    fn(...args);
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, limit);
  };
}

/* --- Focus management ----------------------------------------------------- */
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const focusableWithin = (container) =>
  qsa(FOCUSABLE, container).filter(
    (el) => el.getClientRects().length > 0 || el === document.activeElement
  );

/**
 * Keeps Tab focus inside `container` until the returned function is called.
 * Used by the mobile drawer and the case-study modal.
 */
export function trapFocus(container) {
  const onKeydown = (event) => {
    if (event.key !== 'Tab') return;
    const items = focusableWithin(container);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  container.addEventListener('keydown', onKeydown);
  return () => container.removeEventListener('keydown', onKeydown);
}

/* --- Scroll lock ----------------------------------------------------------
   Compensates for the scrollbar so locking does not shift the layout. */
let lockCount = 0;

export function lockScroll() {
  if (lockCount === 0) {
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = gap > 0 ? `${gap}px` : '';
    document.body.classList.add('is-locked');
  }
  lockCount += 1;
}

export function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.classList.remove('is-locked');
    document.body.style.paddingRight = '';
  }
}

/* --- Misc ------------------------------------------------------------------ */
export const slugify = (value) =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const getParam = (key) => new URLSearchParams(window.location.search).get(key);

/** Highlights matches inside plain text for search results. Escapes first. */
export function highlight(text, term) {
  const safe = escapeHtml(text);
  if (!term) return raw(safe);
  const pattern = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return raw(safe.replace(new RegExp(pattern, 'gi'), '<mark>$&</mark>'));
}

/** Small toast for copy-to-clipboard and similar confirmations. */
export function toast(message) {
  let node = qs('.toast');
  if (!node) {
    node = fromHtml('<div class="toast" role="status" aria-live="polite"></div>');
    document.body.appendChild(node);
  }
  node.textContent = message;
  requestAnimationFrame(() => node.classList.add('is-visible'));
  clearTimeout(node.dataset.timer);
  node.dataset.timer = setTimeout(() => node.classList.remove('is-visible'), 2600);
}
