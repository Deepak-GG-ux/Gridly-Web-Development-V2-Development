/**
 * Article detail.
 * Reads ?slug= from the URL and renders the matching article, or a designed
 * not-found state if the slug is missing or unrecognised.
 */

import { ready } from '../core/app.js';
import { html, qs, mount, getParam, toast } from '../core/utils.js';
import { getArticle, relatedArticles } from '../data/insights.js';
import { site } from '../data/site.js';
import { icon } from '../components/icons.js';

const notFound = () => html`
  <div class="container container--narrow" style="padding-block: var(--s-10)">
    <div class="state">
      <p class="state__title">That article could not be found</p>
      <p>The link may be out of date, or the article address may have a typo in it.</p>
      <a class="btn btn--primary btn--sm" href="/insights.html">Back to Insights</a>
    </div>
  </div>
`;

const section = (block) => html`
  <section class="article__section">
    <h2>${block.heading}</h2>
    ${block.paragraphs.map((paragraph) => html`<p>${paragraph}</p>`)}
  </section>
`;

const relatedCard = (article) => html`
  <article class="related-card">
    <span class="badge badge--neutral">${article.categoryLabel}</span>
    <h3 class="related-card__title">
      <a href="/article.html?slug=${article.slug}">${article.title}</a>
    </h3>
    <p class="related-card__meta">${article.readingTime} min read</p>
  </article>
`;

function render(article) {
  document.title = `${article.title} — Gridly Insights`;
  const description = qs('meta[name="description"]');
  if (description) description.setAttribute('content', article.excerpt);

  mount(
    '[data-render="article"]',
    html`
      <div class="container container--narrow">
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumbs">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/insights.html">Insights</a></li>
            <li aria-current="page">${article.categoryLabel}</li>
          </ol>
        </nav>

        <header class="article__head">
          <div class="article__meta">
            <span class="badge badge--accent">${article.categoryLabel}</span>
            <span>${article.dateLabel}</span>
            <span aria-hidden="true">·</span>
            <span>${article.readingTime} min read</span>
          </div>

          <h1 class="article__title">${article.title}</h1>
          <p class="article__excerpt">${article.excerpt}</p>

          <div class="article__actions">
            <button class="btn btn--ghost btn--sm" type="button" data-share>
              ${icon('copy', 15)} Copy link
            </button>
            <span class="badge badge--neutral">Gridly editorial</span>
          </div>
        </header>

        <div class="article__cover" style="--hue:${article.hue}" aria-hidden="true"></div>

        <div class="article__body">${article.body.map(section)}</div>

        <footer class="article__foot">
          <p class="muted">
            Written by the Gridly team as editorial content for this project. It describes
            working practice rather than reporting research, and contains no cited statistics.
          </p>
          <a class="btn btn--primary" href="/contact.html">
            Discuss a project ${icon('arrowRight', 15)}
          </a>
        </footer>
      </div>

      <section class="section container container--narrow" aria-labelledby="related-title">
        <h2 class="section-head__title" id="related-title" style="font-size: var(--fs-h3); margin-bottom: var(--s-5)">
          Related reading
        </h2>
        <div class="related-grid">${relatedArticles(article.slug).map(relatedCard)}</div>
      </section>
    `
  );

  const share = qs('[data-share]');
  share?.addEventListener('click', async () => {
    const url = `${site.url}/article.html?slug=${article.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      toast('Article link copied');
    } catch {
      toast('Copy failed — select the address bar instead');
    }
  });
}

ready.then(() => {
  const article = getArticle(getParam('slug'));
  if (article) render(article);
  else mount('[data-render="article"]', notFound());
});
