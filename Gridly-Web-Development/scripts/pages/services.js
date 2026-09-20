import { ready } from '../core/app.js';
import { renderServiceDetails, renderSolutions, renderIndustries, renderProcess } from '../components/sections.js';

ready.then(() => {
  renderServiceDetails();
  renderSolutions();
  renderIndustries();
  renderProcess('[data-render="process"]');
});
