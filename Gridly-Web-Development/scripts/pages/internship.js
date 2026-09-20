/**
 * Internship page.
 * All content comes from data/internship.js, including the single issued
 * certificate record shown in the verification section.
 */

import { ready } from '../core/app.js';
import { html, qs, mount } from '../core/utils.js';
import { internship, internshipTechnologies, certificateRecords, verificationScope } from '../data/internship.js';
import { icon } from '../components/icons.js';

const record = certificateRecords[0];

function renderDetails() {
  if (!record) return;

  const rows = [
    ['Name', record.name],
    ['Roll number', record.rollNumber],
    ['Organization', record.organization],
    ['Role', record.position],
    ['Project', record.project],
    ['Duration', record.duration],
    ['Status', record.status],
    ['Certificate ID', record.certificateId]
  ];

  mount(
    '[data-render="intern-details"]',
    rows.map(([label, value]) => html`
      <div class="record__row">
        <dt>${label}</dt>
        <dd>${value}</dd>
      </div>
    `).join('')
  );
}

function renderList(selector, items, renderItem) {
  const target = qs(selector);
  if (!target) return;
  mount(target, items.map(renderItem).join(''));
}

function renderTechnologies() {
  renderList(
    '[data-render="internship-tech"]',
    internshipTechnologies,
    (tech) => html`<li class="tag">${tech}</li>`
  );
}

function renderCertificate() {
  if (!record) return;

  mount(
    '[data-render="certificate-summary"]',
    html`
      <div class="cert-preview">
        <div class="cert-preview__head">
          <span class="badge badge--ok"><span class="badge__dot"></span>${record.status}</span>
          <p class="cert-preview__id">${record.certificateId}</p>
        </div>

        <h3 class="cert-preview__name">${record.name}</h3>
        <p class="cert-preview__role">
          ${record.position} · ${record.organization} · ${record.duration}
        </p>

        <dl class="cert-preview__fields">
          <div><dt>Project</dt><dd>${record.project}</dd></div>
          <div><dt>Roll number</dt><dd>${record.rollNumber}</dd></div>
          <div><dt>Issue date</dt><dd>${record.issueDate}</dd></div>
          <div><dt>Authorized signatory</dt><dd>${record.signatory}, ${record.signatoryPosition}</dd></div>
        </dl>

        <div class="cert-preview__actions">
          <a class="btn btn--primary" href="/verify/?id=${record.certificateId}">
            Verify this certificate ${icon('arrowRight', 15)}
          </a>
          <a class="btn btn--ghost" href="/certificate.html?id=${record.certificateId}">
            View certificate record
          </a>
        </div>

        <p class="cert-preview__scope">${verificationScope}</p>
      </div>
    `
  );
}

ready.then(() => {
  renderDetails();
  renderTechnologies();
  renderCertificate();

  renderList(
    '[data-render="objectives"]',
    internship.objectives,
    (item) => html`<li>${icon('check', 15)}<span>${item}</span></li>`
  );

  renderList(
    '[data-render="learning-areas"]',
    internship.learningAreas,
    (area) => html`
      <article class="card card--lift reveal">
        <h3 class="card-title">${area.title}</h3>
        <p class="muted">${area.body}</p>
      </article>
    `
  );

  renderList(
    '[data-render="responsibilities"]',
    internship.responsibilities,
    (item) => html`<li>${icon('check', 15)}<span>${item}</span></li>`
  );

  renderList(
    '[data-render="workflow"]',
    internship.workflow,
    (stage, index) => html`
      <li class="workflow__item">
        <span class="workflow__index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3 class="workflow__title">${stage.step}</h3>
          <p class="muted">${stage.body}</p>
        </div>
      </li>
    `
  );

  renderList(
    '[data-render="project-work"]',
    internship.projectWork,
    (item) => html`<li>${icon('check', 15)}<span>${item}</span></li>`
  );

  renderList(
    '[data-render="testing"]',
    internship.testing,
    (row) => html`
      <tr>
        <th scope="row">${row.area}</th>
        <td>${row.detail}</td>
      </tr>
    `
  );

  renderList(
    '[data-render="outcomes"]',
    internship.outcomes,
    (item) => html`<li>${icon('check', 15)}<span>${item}</span></li>`
  );
});
