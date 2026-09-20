/**
 * Shared section renderers.
 *
 * These are used by the homepage and by the inner pages, so a service card or
 * a process step is defined once and looks identical everywhere. Each renderer
 * is defensive: if its mount point is not on the current page it returns
 * quietly instead of throwing, so one missing element can never break a page.
 */

import { html, raw, qs, qsa, mount, prefersReducedMotion } from '../core/utils.js';
import { services } from '../data/services.js';
import { principles, solutions, industries } from '../data/solutions.js';
import { projectCategories, filterProjects } from '../data/projects.js';
import { processSteps, technologies, techGroups } from '../data/process.js';
import { icon } from './icons.js';
import { projectCard } from './project-card.js';
import { initCaseStudies } from './case-study-modal.js';
import { initTabs } from './tabs.js';

/* --- Services ------------------------------------------------------------- */
export function renderServices(selector = '[data-render="services"]') {
  const target = qs(selector);
  if (!target) return;

  mount(
    target,
    services
      .map(
        (service, index) => html`
          <article class="service-card card card--lift card--rule reveal" style="--reveal-delay:${Math.min(index, 5) * 60}ms">
            <span class="service-card__icon" aria-hidden="true">${icon(service.icon, 22)}</span>
            <h3 class="service-card__title">${service.title}</h3>
            <p class="service-card__desc">${service.summary}</p>
            <a class="link-arrow" href="/services.html#${service.id}">
              Explore service ${icon('arrowRight', 15)}
            </a>
          </article>
        `
      )
      .join('')
  );
}

/** Full service entries for the services page. */
export function renderServiceDetails(selector = '[data-render="service-details"]') {
  const target = qs(selector);
  if (!target) return;

  mount(
    target,
    services
      .map(
        (service, index) => html`
          <article class="service-detail reveal" id="${service.id}">
            <div class="service-detail__aside">
              <span class="service-detail__index">${String(index + 1).padStart(2, '0')}</span>
              <span class="service-detail__icon" aria-hidden="true">${icon(service.icon, 22)}</span>
            </div>

            <div class="service-detail__body">
              <h3 class="service-detail__title">${service.title}</h3>
              <p class="service-detail__lead">${service.detail}</p>

              <div class="service-detail__grid">
                <div>
                  <h4 class="meta-label">What you receive</h4>
                  <ul class="feature-list">
                    ${service.deliverables.map((item) => html`<li>${icon('check', 15)}<span>${item}</span></li>`)}
                  </ul>
                </div>
                <div>
                  <h4 class="meta-label">Typical stack</h4>
                  <ul class="tag-list">
                    ${service.stack.map((tech) => html`<li class="tag">${tech}</li>`)}
                  </ul>

                  <h4 class="meta-label" style="margin-top: var(--s-5)">Typical timeline</h4>
                  <p class="muted">${service.timeline}</p>

                  <a class="link-arrow" href="/contact.html?service=${service.id}" style="margin-top: var(--s-4)">
                    Enquire about this ${icon('arrowRight', 15)}
                  </a>
                </div>
              </div>
            </div>
          </article>
        `
      )
      .join('')
  );
}

/* --- Principles ------------------------------------------------------------ */
export function renderPrinciples(selector = '[data-render="principles"]') {
  const target = qs(selector);
  if (!target) return;

  mount(
    target,
    principles
      .map(
        (principle, index) => html`
          <li class="principle reveal" style="--reveal-delay:${index * 70}ms">
            <span class="principle__number" aria-hidden="true">${principle.number}</span>
            <div class="principle__body">
              <h3 class="principle__title">${principle.title}</h3>
              <p>${principle.body}</p>
            </div>
          </li>
        `
      )
      .join('')
  );
}

/* --- Solutions -------------------------------------------------------------- */
export function renderSolutions(selector = '[data-render="solutions"]') {
  const target = qs(selector);
  if (!target) return;

  mount(
    target,
    solutions
      .map(
        (solution, index) => html`
          <article class="solution card card--lift reveal" id="${solution.id}" style="--reveal-delay:${Math.min(index, 4) * 60}ms">
            <header class="solution__head">
              <h3 class="solution__title">${solution.title}</h3>
              <p class="solution__audience">${solution.audience}</p>
            </header>

            <dl class="solution__detail">
              <div>
                <dt>The problem</dt>
                <dd>${solution.problem}</dd>
              </div>
              <div>
                <dt>What we build</dt>
                <dd>${solution.solution}</dd>
              </div>
            </dl>

            <ul class="tag-list solution__examples">
              ${solution.examples.map((example) => html`<li class="tag">${example}</li>`)}
            </ul>

            <a class="link-arrow" href="${solution.cta.href}">
              ${solution.cta.label} ${icon('arrowRight', 15)}
            </a>
          </article>
        `
      )
      .join('')
  );
}

/* --- Industries -------------------------------------------------------------- */
export function renderIndustries(selector = '[data-render="industries"]') {
  const target = qs(selector);
  if (!target) return;

  const tabs = industries
    .map(
      (industry, index) => html`
        <button
          class="industry-tab"
          role="tab"
          type="button"
          id="industry-tab-${industry.id}"
          aria-controls="industry-panel-${industry.id}"
          aria-selected="${raw(index === 0 ? 'true' : 'false')}"
          tabindex="${raw(index === 0 ? '0' : '-1')}"
          data-tab="${industry.id}"
        >
          ${industry.label}
        </button>
      `
    )
    .join('');

  const panels = industries
    .map(
      (industry, index) => html`
        <div
          class="industry-panel"
          role="tabpanel"
          id="industry-panel-${industry.id}"
          aria-labelledby="industry-tab-${industry.id}"
          ${raw(index === 0 ? '' : 'hidden')}
        >
          <h3 class="industry-panel__headline">${industry.headline}</h3>
          <p class="industry-panel__desc">${industry.description}</p>

          <div class="industry-panel__grid">
            <div>
              <h4 class="meta-label">Suggested features</h4>
              <ul class="feature-list">
                ${industry.features.map((feature) => html`<li>${icon('check', 15)}<span>${feature}</span></li>`)}
              </ul>
            </div>
            <div>
              <h4 class="meta-label">Example project type</h4>
              <p class="industry-panel__example">${industry.projectType}</p>
              <a class="link-arrow" href="/contact.html">Discuss this ${icon('arrowRight', 15)}</a>
            </div>
          </div>
        </div>
      `
    )
    .join('');

  mount(
    target,
    html`
      <div class="industries__tabs" role="tablist" aria-label="Industries">${raw(tabs)}</div>
      <div class="industries__panels">${raw(panels)}</div>
    `
  );

  initTabs(target);
}

/* --- Work grid ----------------------------------------------------------------- */
export function renderWork({
  gridSelector = '[data-render="work-grid"]',
  filterSelector = '[data-render="work-filters"]',
  countSelector = '[data-work-count]'
} = {}) {
  const grid = qs(gridSelector);
  if (!grid) return;

  const filterBar = qs(filterSelector);
  const count = qs(countSelector);

  const paint = (categoryId) => {
    const visible = filterProjects(categoryId);

    if (!visible.length) {
      grid.innerHTML = String(html`
        <div class="state">
          <p class="state__title">No projects in this category yet</p>
          <p>Concept projects are added as they are built. Try another filter.</p>
        </div>
      `);
    } else {
      grid.innerHTML = visible.map((project, index) => projectCard(project, { index })).join('');
    }

    if (count) {
      count.textContent = `${visible.length} ${visible.length === 1 ? 'project' : 'projects'}`;
    }

    if (!prefersReducedMotion()) {
      requestAnimationFrame(() => qsa('.reveal', grid).forEach((node) => node.classList.add('is-visible')));
    }
  };

  if (filterBar) {
    filterBar.innerHTML = projectCategories
      .map(
        (category, index) => html`
          <button class="filter" type="button" data-filter="${category.id}" aria-pressed="${raw(index === 0 ? 'true' : 'false')}">
            ${category.label}
          </button>
        `
      )
      .join('');

    filterBar.addEventListener('click', (event) => {
      const button = event.target.closest('[data-filter]');
      if (!button) return;
      qsa('[data-filter]', filterBar).forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      paint(button.dataset.filter);
    });
  }

  paint('all');
  initCaseStudies(document);
}

/* --- Process ---------------------------------------------------------------------- */
export function renderProcess(selector = '[data-render="process"]') {
  const container = qs(selector);
  if (!container) return;

  const steps = processSteps
    .map(
      (step, index) => html`
        <button
          class="step"
          role="tab"
          type="button"
          id="step-tab-${step.id}"
          aria-controls="step-panel-${step.id}"
          aria-selected="${raw(index === 0 ? 'true' : 'false')}"
          tabindex="${raw(index === 0 ? '0' : '-1')}"
          data-tab="${step.id}"
        >
          <span class="step__number">${step.number}</span>
          <span class="step__title">${step.title}</span>
          <span class="step__short">${step.short}</span>
        </button>
      `
    )
    .join('');

  const panels = processSteps
    .map(
      (step, index) => html`
        <div
          class="step-panel"
          role="tabpanel"
          id="step-panel-${step.id}"
          aria-labelledby="step-tab-${step.id}"
          ${raw(index === 0 ? '' : 'hidden')}
        >
          <p class="step-panel__index">Stage ${step.number} of 07</p>
          <h3 class="step-panel__title">${step.title}</h3>
          <p class="step-panel__body">${step.body}</p>

          <h4 class="meta-label">Deliverables</h4>
          <ul class="feature-list">
            ${step.deliverables.map((item) => html`<li>${icon('check', 15)}<span>${item}</span></li>`)}
          </ul>

          <blockquote class="step-panel__question">${step.question}</blockquote>
        </div>
      `
    )
    .join('');

  mount(
    container,
    html`
      <div class="process__rail" role="tablist" aria-label="Development process stages">
        <span class="process__progress" aria-hidden="true"></span>
        ${raw(steps)}
      </div>
      <div class="process__detail">${raw(panels)}</div>
    `
  );

  const progress = qs('.process__progress', container);

  initTabs(container, {
    orientation: 'vertical',
    onChange: (id) => {
      const index = processSteps.findIndex((step) => step.id === id);
      const ratio = (index + 1) / processSteps.length;
      if (progress) progress.style.setProperty('--progress', String(ratio));
    }
  });
}

/* --- Technology ------------------------------------------------------------------- */
export function renderTechStrip(selector = '[data-render="tech-strip"]') {
  const target = qs(selector);
  if (!target) return;

  mount(
    target,
    technologies
      .map(
        (tech) => html`
          <li>
            <a class="tech-chip" href="/technologies.html#${tech.id}">
              <span class="tech-chip__name">${tech.name}</span>
              <span class="tech-chip__role">${tech.short}</span>
            </a>
          </li>
        `
      )
      .join('')
  );
}

/** Full technology catalogue with an expandable detail panel per entry. */
export function renderTechCatalogue(selector = '[data-render="tech-catalogue"]') {
  const target = qs(selector);
  if (!target) return;

  const groups = techGroups
    .map((group) => {
      const items = technologies.filter((tech) => tech.group === group.id);
      if (!items.length) return '';

      return html`
        <section class="tech-group reveal" aria-labelledby="tech-group-${group.id}">
          <h3 class="tech-group__title" id="tech-group-${group.id}">
            <span class="tech-group__label">${group.label}</span>
            <span class="tech-group__count">${items.length}</span>
          </h3>

          <div class="tech-cards">
            ${items.map(
              (tech) => html`
                <article class="tech-card card" id="${tech.id}">
                  <header class="tech-card__head">
                    <h4 class="tech-card__name">${tech.name}</h4>
                    <p class="tech-card__short">${tech.short}</p>
                  </header>

                  <dl class="tech-card__dl">
                    <div><dt>What it is</dt><dd>${tech.what}</dd></div>
                    <div><dt>What it is used for</dt><dd>${tech.usedFor}</dd></div>
                    <div><dt>Where it fits</dt><dd>${tech.fitsWhere}</dd></div>
                  </dl>

                  <div class="tech-card__example">
                    <h5 class="meta-label">Example use case</h5>
                    <p>${tech.example}</p>
                  </div>
                </article>
              `
            )}
          </div>
        </section>
      `;
    })
    .join('');

  mount(target, groups);
}

/* --- FAQ ----------------------------------------------------------------------------- */
export function renderFaq(selector, items) {
  const target = qs(selector);
  if (!target || !items?.length) return;

  mount(
    target,
    items
      .map(
        (faq) => html`
          <div class="accordion__item">
            <h3>
              <button
                class="accordion__trigger"
                type="button"
                aria-expanded="false"
                aria-controls="faq-panel-${faq.id}"
                id="faq-trigger-${faq.id}"
              >
                <span>${faq.question}</span>
                <span class="accordion__sign" aria-hidden="true"></span>
              </button>
            </h3>
            <div class="accordion__panel" id="faq-panel-${faq.id}" role="region" aria-labelledby="faq-trigger-${faq.id}" data-open="false">
              <div>
                <div class="accordion__body"><p>${faq.answer}</p></div>
              </div>
            </div>
          </div>
        `
      )
      .join('')
  );
}
