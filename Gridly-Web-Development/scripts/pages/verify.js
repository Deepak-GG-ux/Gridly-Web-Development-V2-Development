/**
 * Certificate verification.
 *
 * Lookup happens against the static record list in data/internship.js. The
 * certificate ID is read from the query string, so /verify/?id=... works on a
 * direct visit and on refresh, and the form updates the URL without reloading.
 *
 * Four states are handled explicitly:
 *   idle     — no id supplied
 *   invalid  — id supplied but not in the expected format
 *   notfound — well-formed id with no matching record
 *   verified — matching record found
 */

import { ready } from '../core/app.js';
import { html, raw, qs, mount, getParam, escapeHtml, toast } from '../core/utils.js';
import { findCertificate, CERTIFICATE_PATTERN, verificationScope } from '../data/internship.js';
import { icon } from '../components/icons.js';

const scopeNote = () => html`
  <p class="verify__scope">${verificationScope}</p>
`;

const idle = () => html`
  <div class="verify-result verify-result--idle" data-state="idle">
    <span class="verify-result__icon" aria-hidden="true">${icon('search', 22)}</span>
    <h2 class="verify-result__title">Enter a certificate ID to begin</h2>
    <p class="verify-result__body">
      The certificate ID is printed on the internship certificate, in the format
      <code>GRIDLY-INT-YYYY-XXNNN</code>. You can also reach this page directly with the ID
      in the address, for example <code>/verify/?id=GRIDLY-INT-2026-DB014</code>.
    </p>
    ${scopeNote()}
  </div>
`;

const invalid = (value) => html`
  <div class="verify-result verify-result--invalid" data-state="invalid" role="alert">
    <span class="verify-result__icon" aria-hidden="true">${icon('alert', 22)}</span>
    <h2 class="verify-result__title">That ID is not in a valid format</h2>
    <p class="verify-result__body">
      <strong>${value}</strong> does not match the expected pattern. Certificate IDs look like
      <code>GRIDLY-INT-2026-DB014</code> — the word GRIDLY, then INT, then a four-digit year,
      then two letters and three digits.
    </p>
    <p class="verify-result__body">Check the ID on the certificate and try again.</p>
  </div>
`;

const notFound = (value) => html`
  <div class="verify-result verify-result--notfound" data-state="notfound" role="alert">
    <span class="verify-result__icon" aria-hidden="true">${icon('alert', 22)}</span>
    <h2 class="verify-result__title">Certificate not found</h2>
    <p class="verify-result__body">
      No record matches <strong>${value}</strong>. The ID may have been typed incorrectly, or no
      certificate with that ID has been issued by Gridly.
    </p>
    <p class="verify-result__body">
      If you believe this is an error, contact
      <a href="/contact.html">Gridly</a> with the certificate ID and the name on the certificate.
    </p>
    ${scopeNote()}
  </div>
`;

const row = (label, value) => html`
  <div class="record__row">
    <dt>${label}</dt>
    <dd>${value}</dd>
  </div>
`;

const verified = (record) => html`
  <div class="verify-result verify-result--ok" data-state="verified">
    <div class="verify-result__banner" role="status">
      <span class="verify-result__check" aria-hidden="true">${icon('check', 18)}</span>
      <div>
        <h2 class="verify-result__title">Certificate verified</h2>
        <p class="verify-result__sub">A matching record was found in the Gridly internship register.</p>
      </div>
      <span class="badge badge--ok"><span class="badge__dot"></span>${record.status}</span>
    </div>

    <dl class="record">
      ${row('Certificate ID', record.certificateId)}
      ${row('Name', record.name)}
      ${row('Roll number', record.rollNumber)}
      ${row('Organization', record.organization)}
      ${row('Position', record.position)}
      ${row('Project', record.project)}
      ${row('Duration', record.duration)}
      ${row('Technologies', record.technologies.join(', '))}
      ${row('Authorized signatory', record.signatory)}
      ${row('Signatory position', record.signatoryPosition)}
      ${row('Issue date', record.issueDate)}
      ${row('Status', record.status)}
    </dl>

    <div class="verify-result__actions">
      <a class="btn btn--primary" href="/certificate.html?id=${record.certificateId}">
        View certificate record ${icon('arrowRight', 15)}
      </a>
      <a class="btn btn--ghost" href="/internship.html">About this internship</a>
      <button class="btn btn--ghost" type="button" data-copy-id="${record.certificateId}">
        ${icon('copy', 15)} Copy ID
      </button>
    </div>

    ${scopeNote()}
  </div>
`;

function renderResult(rawId) {
  const target = qs('[data-render="verify-result"]');
  if (!target) return;

  const value = String(rawId || '').trim();

  if (!value) {
    mount(target, idle());
    return;
  }

  if (!CERTIFICATE_PATTERN.test(value)) {
    mount(target, invalid(escapeHtml(value)));
    return;
  }

  const record = findCertificate(value);
  mount(target, record ? verified(record) : notFound(escapeHtml(value.toUpperCase())));

  const copy = qs('[data-copy-id]', target);
  copy?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copy.dataset.copyId);
      toast('Certificate ID copied');
    } catch {
      toast('Copy failed — select the ID manually');
    }
  });
}

/** Keeps the address bar in step with the lookup without reloading the page. */
function updateUrl(id) {
  const url = new URL(window.location.href);
  if (id) url.searchParams.set('id', id);
  else url.searchParams.delete('id');
  window.history.pushState({ id }, '', url);
}

ready.then(() => {
  const form = qs('[data-verify-form]');
  const input = qs('[data-verify-input]');

  const initial = getParam('id');
  if (input && initial) input.value = initial;
  renderResult(initial);

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input ? input.value.trim() : '';
    updateUrl(value);
    renderResult(value);
    qs('[data-render="verify-result"]')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Back and forward should move between lookups.
  window.addEventListener('popstate', () => {
    const id = getParam('id');
    if (input) input.value = id || '';
    renderResult(id);
  });

  // Convenience: sample link fills the field and runs the lookup.
  document.addEventListener('click', (event) => {
    const sample = event.target.closest('[data-sample-id]');
    if (!sample) return;
    event.preventDefault();
    const id = sample.dataset.sampleId;
    if (input) input.value = id;
    updateUrl(id);
    renderResult(id);
  });
});
