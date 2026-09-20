import { ready } from '../core/app.js';
import { renderProcess, renderPrinciples } from '../components/sections.js';

ready.then(() => {
  renderProcess();
  renderPrinciples();
});
