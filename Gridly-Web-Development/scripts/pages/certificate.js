/**
 * Printable certificate record.
 *
 * Renders the record for ?id=... in an A4-friendly layout. Site navigation and
 * the footer are hidden when printing (see styles/certificate.css).
 *
 * This page presents an internship completion record issued by Gridly for work
 * on the Gridly website project. It deliberately carries no seals, emblems,
 * accreditation marks or third-party approvals.
 */

import { ready } from '../core/app.js';
import { html, qs, mount, getParam, escapeHtml } from '../core/utils.js';
import { findCertificate, verificationScope } from '../data/internship.js';
import { site } from '../data/site.js';
import { logoMark, icon } from '../components/icons.js';

const notFound = (value) => html`
  <div class="state">
    <p class="state__title">No certificate record for that ID</p>
    <p>
      ${value ? html`Nothing matches <strong>${value}</strong>.` : 'No certificate ID was supplied.'}
      Use the verification page to look up a certificate.
    </p>
    <a class="btn btn--primary btn--sm" href="/verify/">Go to verification</a>
  </div>
`;

const field = (label, value) => html`
  <div class="cert__field">
    <dt>${label}</dt>
    <dd>${value}</dd>
  </div>
`;

function render(record) {
  document.title = `Certificate ${record.certificateId} — Gridly`;
  const verifyUrl = `${site.url}/verify/?id=${record.certificateId}`;

  mount(
    '[data-render="certificate"]',
    html`
      <div class="cert-toolbar no-print">
        <a class="link-arrow" href="/internship.html">${icon('arrowRight', 15)} Back to the internship page</a>
        <div class="cert-toolbar__actions">
          <a class="btn btn--ghost btn--sm" href="/verify/?id=${record.certificateId}">Verify this certificate</a>
          <button class="btn btn--primary btn--sm" type="button" data-print>
            ${icon('print', 15)} Print or save as PDF
          </button>
        </div>
      </div>

      <article class="cert" aria-label="Internship completion record">
        <header class="cert__head">
          <div class="cert__brand">
            ${logoMark(30)}
            <span class="cert__brandname">GRIDLY</span>
          </div>
          <p class="cert__kicker">Internship Completion Record</p>
        </header>

        <div class="cert__body">
          <p class="cert__intro">This record confirms that</p>
          <h1 class="cert__name">${record.name}</h1>
          <p class="cert__statement">
            completed a web development internship with ${record.organization} in the position of
            ${record.position}, working on the ${record.project} project from
            ${record.startDate} to ${record.endDate}.
          </p>

          <dl class="cert__fields">
            ${field('Certificate ID', record.certificateId)}
            ${field('Roll number', record.rollNumber)}
            ${field('Position', record.position)}
            ${field('Project', record.project)}
            ${field('Duration', record.duration)}
            ${field('Status', record.status)}
            ${field('Issue date', record.issueDate)}
            ${field('Technologies', record.technologies.join(', '))}
          </dl>
        </div>

        <footer class="cert__foot">
          <div class="cert__sign">
            <span class="cert__signline" aria-hidden="true"></span>
            <p class="cert__signname">${record.signatory}</p>
            <p class="cert__signrole">${record.signatoryPosition}, ${record.organization}</p>
          </div>

          <div class="cert__verify">
            <p class="cert__verifylabel">Verify this record</p>
            <p class="cert__verifyurl">${verifyUrl}</p>
            <p class="cert__verifyid">${record.certificateId}</p>
          </div>
        </footer>

        <p class="cert__scope">${verificationScope}</p>
      </article>
    `
  );

  qs('[data-print]')?.addEventListener('click', () => window.print());
}

ready.then(() => {
  const id = getParam('id');
  const record = findCertificate(id);
  if (record) render(record);
  else mount('[data-render="certificate"]', notFound(id ? escapeHtml(id) : ''));
});
