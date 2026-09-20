/**
 * Site footer. Columns, legal links and contact details all come from
 * `data/site.js`.
 */

import { html, qs, mount } from '../core/utils.js';
import { site, footerColumns, legalLinks } from '../data/site.js';
import { logoMark } from './icons.js';

const column = (col) => html`
  <div class="footer-col">
    <h2 class="footer-col__title">${col.title}</h2>
    <ul class="footer-col__list">
      ${col.links.map((link) => html`<li><a href="${link.href}">${link.label}</a></li>`)}
    </ul>
  </div>
`;

export function renderFooter() {
  const target = qs('[data-component="footer"]');
  if (!target) return;

  const year = new Date().getFullYear();

  mount(
    target,
    html`
      <footer class="site-footer">
        <div class="container">
          <div class="site-footer__grid">
            <div class="site-footer__brand">
              <a class="logo" href="/" aria-label="${site.name} — home">
                ${logoMark(24)}
                <span class="logo__word">${site.name.toUpperCase()}</span>
              </a>
              <p class="site-footer__desc">${site.description}</p>
              <div class="site-footer__contact">
                <span>${site.contact.email}</span>
                <span>${site.contact.phone}</span>
                <span>${site.contact.location}</span>
              </div>
            </div>
            ${footerColumns.map(column)}
          </div>

          <p class="footer-wordmark" aria-hidden="true">${site.name.toUpperCase()}</p>

          <div class="site-footer__bottom">
            <span>© ${year} ${site.name}. Demo project — contact details are placeholders.</span>
            <nav class="site-footer__legal" aria-label="Legal">
              ${legalLinks.map((link) => html`<a href="${link.href}">${link.label}</a>`)}
            </nav>
          </div>
        </div>
      </footer>
    `
  );
}
