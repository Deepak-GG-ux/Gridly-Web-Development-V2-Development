import { ready } from '../core/app.js';
import { renderFaq } from '../components/sections.js';
import { initAccordions } from '../components/accordion.js';
import { faqs } from '../data/faq.js';

ready.then(() => {
  renderFaq('[data-render="faq"]', faqs);
  // The accordion is initialised again because its markup is rendered after
  // the shared bootstrap has already run.
  initAccordions();
});
