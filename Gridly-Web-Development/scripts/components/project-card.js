/**
 * Project card + generated cover art.
 *
 * The site ships with no third-party imagery. Each project gets a generated
 * abstract wireframe derived from `cover.pattern` and tinted by `cover.hue`,
 * so the grid has visual variety without hotlinking anything.
 *
 * To use a real screenshot instead, set `cover.image` in data/projects.js to a
 * path under assets/img — the card will render an <img> and skip the graphic.
 */

import { html, raw, escapeHtml } from '../core/utils.js';
import { icon } from './icons.js';

/* --- Generated cover patterns -------------------------------------------- */
const rect = (x, y, w, h, o = 0.18, r = 3) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="currentColor" opacity="${o}"/>`;

const row = (y, w) => rect(40, y, w, 9, 0.16, 2) + rect(320, y, 40, 9, 0.3, 2);

const PATTERNS = {
  // Menu list with aligned price column.
  menu: () =>
    rect(40, 30, 120, 12, 0.35) +
    [70, 96, 122, 148, 174, 200].map((y, i) => row(y, [180, 150, 200, 165, 140, 190][i])).join('') +
    rect(40, 226, 88, 18, 0.5, 4),

  // Filter rail beside a results grid.
  listings: () =>
    rect(28, 30, 84, 200, 0.1, 4) +
    [44, 76, 108, 140].map((y) => rect(40, y, 60, 10, 0.2, 2)).join('') +
    [0, 1, 2, 3].map((i) => {
      const x = 130 + (i % 2) * 130;
      const y = 30 + Math.floor(i / 2) * 104;
      return rect(x, y, 118, 92, 0.12, 5) + rect(x + 10, y + 62, 60, 8, 0.28, 2) + rect(x + 10, y + 76, 36, 6, 0.2, 2);
    }).join(''),

  // Three product tiles with generous image areas.
  catalogue: () =>
    [0, 1, 2].map((i) => {
      const x = 32 + i * 118;
      return rect(x, 28, 104, 140, 0.14, 6) + rect(x + 22, 180, 60, 9, 0.3, 2) + rect(x + 34, 196, 36, 7, 0.2, 2);
    }).join('') + rect(32, 224, 336, 1, 0.2, 0),

  // Sidebar plus stacked course rows.
  courses: () =>
    rect(28, 26, 96, 208, 0.1, 4) +
    [42, 70, 98, 126].map((y) => rect(40, y, 68, 10, 0.22, 2)).join('') +
    [30, 92, 154].map((y) => rect(142, y, 226, 52, 0.13, 5) + rect(156, y + 14, 120, 10, 0.3, 2) + rect(156, y + 32, 80, 7, 0.2, 2)).join(''),

  // Technical drawing grid.
  blueprint: () => {
    const lines = [];
    for (let x = 40; x <= 360; x += 40) lines.push(`<line x1="${x}" y1="20" x2="${x}" y2="240" stroke="currentColor" stroke-width="1" opacity=".12"/>`);
    for (let y = 20; y <= 240; y += 40) lines.push(`<line x1="40" y1="${y}" x2="360" y2="${y}" stroke="currentColor" stroke-width="1" opacity=".12"/>`);
    return lines.join('') + rect(80, 60, 160, 120, 0.2, 2) + rect(200, 100, 120, 80, 0.32, 2) + rect(120, 140, 80, 60, 0.12, 2);
  },

  // Overlapping photographic frames.
  frames: () =>
    rect(48, 40, 150, 180, 0.16, 4) +
    rect(150, 80, 200, 140, 0.26, 4) +
    rect(96, 128, 110, 92, 0.12, 4)
};

export const coverArt = (project) => {
  const pattern = PATTERNS[project.cover?.pattern] || PATTERNS.blueprint;
  return raw(
    `<svg class="cover-art" viewBox="0 0 400 260" role="img" aria-label="Abstract layout graphic representing the ${escapeHtml(
      project.name
    )} concept project" preserveAspectRatio="xMidYMid slice">${pattern()}</svg>`
  );
};

const cover = (project) =>
  project.cover?.image
    ? html`<img
        class="project-card__image"
        src="${project.cover.image}"
        alt="${project.name} — ${project.type} interface"
        loading="lazy"
        decoding="async"
        width="800"
        height="520"
      />`
    : coverArt(project);

/* --- Card ------------------------------------------------------------------ */
export function projectCard(project, { index = 0 } = {}) {
  return html`
    <article
      class="project-card reveal"
      data-project-card="${project.id}"
      data-categories="${project.categories.join(' ')}"
      style="--reveal-delay:${Math.min(index, 5) * 70}ms"
    >
      <div class="project-card__cover" style="--hue:${project.cover?.hue ?? 220}">
        ${cover(project)}
        <span class="badge badge--demo project-card__status">${project.status}</span>
      </div>

      <div class="project-card__body">
        <div class="project-card__meta">
          <span>${project.industry}</span>
          <span aria-hidden="true">/</span>
          <span>${project.type}</span>
        </div>

        <h3 class="project-card__title">
          <a class="project-card__link" href="/work.html?project=${project.id}" data-project-open="${project.id}">
            ${project.name}
          </a>
        </h3>

        <p class="project-card__desc">${project.tagline}</p>

        <ul class="tag-list project-card__tags">
          ${project.tags.slice(0, 4).map((tag) => html`<li class="tag">${tag}</li>`)}
        </ul>

        <span class="link-arrow project-card__cta" aria-hidden="true">
          View case study ${icon('arrowRight', 15)}
        </span>
      </div>
    </article>
  `;
}
