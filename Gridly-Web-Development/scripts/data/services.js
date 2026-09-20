/**
 * Services offered by Gridly.
 * `icon` refers to a key in scripts/components/icons.js.
 * `summary` powers the homepage preview; `detail` and `deliverables` power
 * the full services page.
 */

export const services = [
  {
    id: 'website-development',
    title: 'Website Development',
    summary: 'Responsive, standards-based websites for businesses and organisations.',
    icon: 'layout',
    detail:
      'A business website has one job: make it obvious what you do and easy to get in touch. We plan the page structure around the questions visitors actually arrive with, write semantic markup, and build layouts that hold together from a 320px phone to a widescreen monitor.',
    deliverables: [
      'Sitemap and page structure agreed before design',
      'Responsive layouts tested across the full breakpoint range',
      'Accessible forms with real validation messages',
      'Content structured as data so it stays easy to update',
      'Handover notes covering how to edit each section'
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    timeline: '2 to 5 weeks, depending on page count'
  },
  {
    id: 'web-applications',
    title: 'Web Application Development',
    summary: 'Browser-based tools that replace manual spreadsheet workflows.',
    icon: 'terminal',
    detail:
      'When a spreadsheet stops being enough, a small web application usually replaces it. We map the workflow first, then build the smallest tool that removes the manual work, with a data model designed to survive the next three feature requests.',
    deliverables: [
      'Workflow analysis and written requirements',
      'Database schema and entity relationship diagram',
      'Authentication and user role planning',
      'Admin interfaces, dashboards and reporting views',
      'API structure documentation'
    ],
    stack: ['JavaScript', 'PHP', 'Python', 'MySQL'],
    timeline: '4 to 10 weeks, depending on scope'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    summary: 'Interface design grounded in real user tasks, not decoration.',
    icon: 'compass',
    detail:
      'Design decisions are easier to defend when they start from a user task. We work through flows and wireframes before any visual styling, then build a reusable component system so every screen is assembled from the same parts.',
    deliverables: [
      'User flows and task mapping',
      'Low-fidelity wireframes for key screens',
      'Design tokens for colour, type and spacing',
      'Reusable component library',
      'Accessibility review against WCAG guidance'
    ],
    stack: ['Figma', 'HTML', 'CSS'],
    timeline: '1 to 3 weeks alongside development'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    summary: 'Storefronts built around findability and a short checkout path.',
    icon: 'cart',
    detail:
      'Selling online is a checkout problem before it is a design problem. We build product listings, filters, carts and checkout flows that reduce the number of steps between interest and purchase, with a catalogue structure that scales past the first fifty products.',
    deliverables: [
      'Product catalogue and category taxonomy',
      'Search, filtering and sorting',
      'Cart and checkout flow',
      'Order, stock and customer data model',
      'Payment gateway integration planning'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    timeline: '5 to 12 weeks, depending on catalogue size'
  },
  {
    id: 'seo-development',
    title: 'SEO-Friendly Development',
    summary: 'Technical foundations that let a site be found and indexed properly.',
    icon: 'search',
    detail:
      'Technical SEO is a development responsibility, not a marketing add-on. Semantic headings, unique titles and descriptions, clean URLs, a valid sitemap and fast first paint are all decided while the site is being built, and they are far more expensive to retrofit.',
    deliverables: [
      'Unique title and meta description per page',
      'Semantic heading hierarchy and landmarks',
      'Canonical URLs and Open Graph metadata',
      'sitemap.xml and robots.txt configuration',
      'Structured data where the claims are factual'
    ],
    stack: ['HTML', 'Structured data', 'Netlify redirects'],
    timeline: 'Built into every project'
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    summary: 'Scheduled updates, fixes and content changes after launch.',
    icon: 'refresh',
    detail:
      'A website is not finished at launch. Ongoing work covers dependency updates, broken-link checks, backups, uptime monitoring and the small content changes that pile up across a year of normal business.',
    deliverables: [
      'Scheduled updates and backups',
      'Uptime and error monitoring',
      'Bug fixes and small enhancements',
      'Content updates on request',
      'Quarterly improvement report'
    ],
    stack: ['Git', 'GitHub', 'Netlify'],
    timeline: 'Ongoing, monthly or quarterly'
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    summary: 'Measured improvements to load time, stability and responsiveness.',
    icon: 'pulse',
    detail:
      'Performance work starts with measurement, not guesswork. We profile the real page, find what is blocking the first render, and fix the specific causes: oversized images, render-blocking scripts, layout shift and unused code.',
    deliverables: [
      'Baseline audit against Core Web Vitals',
      'Image format and sizing strategy',
      'Script loading and bundle review',
      'Layout-shift elimination',
      'Before and after comparison report'
    ],
    stack: ['Browser DevTools', 'Lighthouse', 'CSS', 'JavaScript'],
    timeline: '1 to 2 weeks'
  },
  {
    id: 'custom-solutions',
    title: 'Custom Digital Solutions',
    summary: 'Integrations, internal tools and problems that do not fit a template.',
    icon: 'grid',
    detail:
      'Some requirements do not fit any standard product: a booking system tied to existing stock, a reporting dashboard that pulls from two sources, a migration away from software nobody maintains any more. These start with a scoping conversation rather than a price list.',
    deliverables: [
      'Discovery and technical feasibility review',
      'Written proposal with options and trade-offs',
      'Prototype of the riskiest part first',
      'Phased delivery plan',
      'Documentation and handover'
    ],
    stack: ['Python', 'PHP', 'MySQL', 'JavaScript'],
    timeline: 'Scoped per project'
  }
];

export const getService = (id) => services.find((service) => service.id === id);
