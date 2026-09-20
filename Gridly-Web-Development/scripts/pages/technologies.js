import { ready } from '../core/app.js';
import { renderTechCatalogue, renderTechStrip } from '../components/sections.js';

ready.then(() => {
  renderTechCatalogue();
  renderTechStrip();
});
