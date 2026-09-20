/**
 * Case-study modal.
 *
 * Behaviour: opened by any element with `data-project-open="<id>"`. Those
 * elements are real links to `work.html?project=<id>`, so the case study is
 * still reachable if JavaScript fails — the modal is an enhancement.
 *
 * Accessibility: dialog role, labelled by the project name, Tab focus trapped,
 * Escape closes, backdrop click closes, focus returns to the opener, and the
 * page behind is locked and marked inert.
 */

import {
  html, raw, qs, fromHtml, trapFocus, lockScroll, unlockScroll, getParam
} from '../core/utils.js';
import { getProject } from '../data/projects.js';
import { icon } from './icons.js';
import { coverArt } from './project-card.js';

let dialogNode = null;
let releaseTrap = null;
let lastFocused = null;

const list = (items) => html`<ul class="case-list">${items.map((item) => html`<li>${item}</li>`)}</ul>`;

const block = (title, body) => html`
  <section class="case-block">
    <h3 class="case-block__title">${title}</h3>
    ${body}
  </section>
`;

/** Device frames stand in until real screenshots exist. */
const responsiveViews = (project) => html`
  <div class="device-row">
    ${['Desktop · 1440px', 'Tablet · 768px', 'Mobile · 375px'].map(
      (label, i) => html`
        <figure class="device device--${raw(['desktop', 'tablet', 'mobile'][i])}">
          <div class="device__screen" style="--hue:${project.cover?.hue ?? 220}">${coverArt(project)}</div>
          <figcaption class="device__caption">${label}</figcaption>
        </figure>
      `
    )}
  </div>
  <p class="muted case-note">Placeholder views. Replace with exported screenshots in <code>assets/img/</code>.</p>
`;

function template(project) {
  const study = project.caseStudy;
  return html`
    <div class="modal" id="case-study" hidden>
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="case-title" tabindex="-1">
        <button class="modal__close" type="button" data-modal-close aria-label="Close case study">
          ${icon('close', 18)}
        </button>

        <article class="case">
          <header class="case__head">
            <div class="case__meta">
              <span class="badge badge--demo">${project.status}</span>
              <span>${project.industry}</span>
              <span aria-hidden="true">/</span>
              <span>${project.type}</span>
              <span aria-hidden="true">/</span>
              <span>${project.year}</span>
            </div>
            <h2 class="case__title" id="case-title">${project.name}</h2>
            <p class="case__tagline">${project.tagline}</p>
            <div class="case__cover" style="--hue:${project.cover?.hue ?? 220}">${coverArt(project)}</div>
          </header>

          <div class="case__grid">
            <div class="case__main">
              ${block('Project overview', html`<p>${study.overview}</p>`)}
              ${block('Challenge', html`<p>${study.challenge}</p>`)}
              ${block('Approach', html`<p>${study.approach}</p>`)}
              ${block('Solution', html`<p>${study.solution}</p>`)}
              ${block('Key features', list(study.features))}
              ${block('Design decisions', list(study.designDecisions))}
              ${block('Development process', list(study.developmentProcess))}
              ${block('Responsive views', responsiveViews(project))}
              ${block(
                'Demonstration notes',
                html`<div class="notice"><p>${study.outcome}</p></div>`
              )}
            </div>

            <aside class="case__aside">
              <div class="case-panel">
                <h3 class="case-panel__title">Technology</h3>
                <dl class="tech-dl">
                  ${study.technology.map(
                    (tech) => html`
                      <div class="tech-dl__row">
                        <dt>${tech.name}</dt>
                        <dd>${tech.role}</dd>
                      </div>
                    `
                  )}
                </dl>
              </div>

              <div class="case-panel">
                <h3 class="case-panel__title">Project type</h3>
                <p class="muted">${project.type}</p>
                <h3 class="case-panel__title">Industry</h3>
                <p class="muted">${project.industry}</p>
                <h3 class="case-panel__title">Status</h3>
                <p class="muted">
                  ${project.status} — a self-directed build created to demonstrate capability. Not a client engagement.
                </p>
              </div>

              <a class="btn btn--primary btn--block" href="/contact.html">
                Start a project like this
                <span class="btn__icon">${icon('arrowRight', 15)}</span>
              </a>
            </aside>
          </div>
        </article>
      </div>
    </div>
  `;
}

export function openCaseStudy(id, opener = null) {
  const project = getProject(id);
  if (!project) return false;

  closeCaseStudy({ restoreFocus: false, updateUrl: false });

  lastFocused = opener || document.activeElement;
  dialogNode = fromHtml(template(project));
  document.body.appendChild(dialogNode);
  dialogNode.hidden = false;

  const dialog = qs('.modal__dialog', dialogNode);
  lockScroll();
  releaseTrap = trapFocus(dialogNode);
  dialog.focus();

  dialogNode.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) closeCaseStudy();
  });

  document.addEventListener('keydown', onKeydown);

  // Reflect the open case study in the URL so it can be shared or bookmarked.
  const url = new URL(window.location.href);
  url.searchParams.set('project', id);
  window.history.pushState({ project: id }, '', url);

  return true;
}

function onKeydown(event) {
  if (event.key === 'Escape') closeCaseStudy();
}

export function closeCaseStudy({ restoreFocus = true, updateUrl = true } = {}) {
  if (!dialogNode) return;

  releaseTrap?.();
  releaseTrap = null;
  dialogNode.remove();
  dialogNode = null;
  unlockScroll();
  document.removeEventListener('keydown', onKeydown);

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    // replaceState, not pushState: closing should not add a history entry.
    window.history.replaceState({}, '', url);
  }

  if (restoreFocus && lastFocused?.isConnected) lastFocused.focus();
  lastFocused = null;
}

/** Wires up every `data-project-open` trigger inside `scope`. */
export function initCaseStudies(scope = document) {
  scope.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-project-open]');
    if (!trigger) return;
    // Let modified clicks open a new tab as normal.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    openCaseStudy(trigger.dataset.projectOpen, trigger);
  });

  window.addEventListener('popstate', () => {
    const id = getParam('project');
    if (id) openCaseStudy(id);
    else closeCaseStudy({ updateUrl: false });
  });

  // Deep link: /work.html?project=aura opens the case study directly.
  const initial = getParam('project');
  if (initial) openCaseStudy(initial);
}
