/**
 * Insights index: category filtering plus text search across titles,
 * excerpts and categories.
 */

import { ready } from '../core/app.js';
import { html, raw, qs, qsa, mount, debounce, highlight, escapeHtml } from '../core/utils.js';
import { articles, insightCategories } from '../data/insights.js';
import { icon } from '../components/icons.js';

const state = { category: 'all', term: '' };

const card = (article, term, index) => html`
  <article class="post-card reveal" style="--reveal-delay:${Math.min(index, 5) * 60}ms">
    <a class="post-card__cover" href="/article.html?slug=${article.slug}" style="--hue:${article.hue}" tabindex="-1" aria-hidden="true">
      <span class="post-card__pattern"></span>
    </a>

    <div class="post-card__body">
      <div class="post-card__meta">
        <span class="badge badge--accent">${article.categoryLabel}</span>
        <span>${article.dateLabel}</span>
        <span aria-hidden="true">·</span>
        <span>${article.readingTime} min read</span>
      </div>

      <h3 class="post-card__title">
        <a href="/article.html?slug=${article.slug}">${highlight(article.title, term)}</a>
      </h3>

      <p class="post-card__excerpt">${highlight(article.excerpt, term)}</p>

      <span class="link-arrow post-card__cta" aria-hidden="true">Read article ${icon('arrowRight', 15)}</span>
    </div>
  </article>
`;

function matches(article) {
  const inCategory = state.category === 'all' || article.category === state.category;
  if (!inCategory) return false;
  if (!state.term) return true;

  const haystack = `${article.title} ${article.excerpt} ${article.categoryLabel}`.toLowerCase();
  return haystack.includes(state.term.toLowerCase());
}

function paint() {
  const grid = qs('[data-render="posts"]');
  const count = qs('[data-post-count]');
  if (!grid) return;

  const visible = articles.filter(matches);

  if (count) {
    count.textContent = `${visible.length} ${visible.length === 1 ? 'article' : 'articles'}`;
  }

  if (!visible.length) {
    mount(
      grid,
      html`
        <div class="state">
          <p class="state__title">Nothing matches that search</p>
          <p>
            ${state.term
              ? raw(`No article mentions &ldquo;${escapeHtml(state.term)}&rdquo;.`)
              : 'There are no articles in this category yet.'}
            Try a different term, or clear the filters to see everything.
          </p>
          <button class="btn btn--ghost btn--sm" type="button" data-clear-filters>Clear filters</button>
        </div>
      `
    );
    return;
  }

  mount(grid, visible.map((article, index) => card(article, state.term, index)).join(''));
  requestAnimationFrame(() => qsa('.reveal', grid).forEach((node) => node.classList.add('is-visible')));
}

function initFilters() {
  const bar = qs('[data-render="post-filters"]');
  if (!bar) return;

  mount(
    bar,
    insightCategories
      .map(
        (category, index) => html`
          <button class="filter" type="button" data-category="${category.id}" aria-pressed="${raw(index === 0 ? 'true' : 'false')}">
            ${category.label}
          </button>
        `
      )
      .join('')
  );

  bar.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    state.category = button.dataset.category;
    qsa('[data-category]', bar).forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    paint();
  });
}

function initSearch() {
  const input = qs('[data-post-search]');
  if (!input) return;

  input.addEventListener(
    'input',
    debounce(() => {
      state.term = input.value.trim();
      paint();
    }, 180)
  );

  // Escape clears the field, which is the expected behaviour for a search box.
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && input.value) {
      input.value = '';
      state.term = '';
      paint();
    }
  });
}

function initClearButton() {
  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-clear-filters]')) return;
    state.category = 'all';
    state.term = '';
    const input = qs('[data-post-search]');
    if (input) input.value = '';
    qsa('[data-category]').forEach((item, index) => item.setAttribute('aria-pressed', String(index === 0)));
    paint();
  });
}

ready.then(() => {
  initFilters();
  initSearch();
  initClearButton();
  paint();
});
