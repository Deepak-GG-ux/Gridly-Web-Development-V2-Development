import { ready } from '../core/app.js';
import { renderPrinciples, renderServices } from '../components/sections.js';

ready.then(() => {
  renderPrinciples();
  renderServices();
});
