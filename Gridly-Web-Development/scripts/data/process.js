/**
 * The seven-stage development process and the technology catalogue.
 * Both power interactive panels on the homepage and their dedicated pages.
 */

export const processSteps = [
  {
    number: '01',
    id: 'discover',
    title: 'Discover',
    short: 'Understand goals, users and requirements.',
    body: 'Before anything is designed we establish what the site has to achieve, who it serves and what already exists. Most scope problems are discovery problems that surfaced late.',
    deliverables: ['Requirement notes', 'Audience and task list', 'Content inventory', 'Success criteria'],
    question: 'What has to be true for this project to be worth doing?'
  },
  {
    number: '02',
    id: 'plan',
    title: 'Plan',
    short: 'Define structure, scope and technical approach.',
    body: 'Scope, sitemap and technical approach are agreed in writing. Technology is chosen against the requirement, not the other way around.',
    deliverables: ['Sitemap', 'Scope document', 'Technology decision notes', 'Timeline and milestones'],
    question: 'What are we building, and what are we explicitly not building?'
  },
  {
    number: '03',
    id: 'design',
    title: 'Design',
    short: 'Create wireframes, visual system and user flows.',
    body: 'Wireframes settle structure before visuals settle style. The visual system is defined as reusable tokens and components so the build stays consistent.',
    deliverables: ['User flows', 'Wireframes', 'Design tokens', 'Component library', 'Responsive layouts'],
    question: 'Can someone complete their task without being taught how?'
  },
  {
    number: '04',
    id: 'develop',
    title: 'Develop',
    short: 'Build frontend, backend functionality and integrations.',
    body: 'Components are built from the design system, content moves into structured data, and any server-side work is implemented with validation on both ends.',
    deliverables: ['Component implementation', 'Content data structures', 'Forms and validation', 'Integrations', 'Version-controlled repository'],
    question: 'Will the next developer understand this in six months?'
  },
  {
    number: '05',
    id: 'test',
    title: 'Test',
    short: 'Check usability, responsiveness, browser compatibility and functionality.',
    body: 'Testing covers layout across the full breakpoint range, keyboard operation, screen-reader output, form validation paths and cross-browser behaviour.',
    deliverables: ['Responsive test matrix', 'Accessibility checks', 'Cross-browser results', 'Bug log and fixes'],
    question: 'What breaks at 320px, with a keyboard, or on a slow connection?'
  },
  {
    number: '06',
    id: 'launch',
    title: 'Launch',
    short: 'Deploy and configure the production website.',
    body: 'Deployment is automated from the repository. Redirects, headers, metadata and analytics are configured before the domain is pointed.',
    deliverables: ['Production deployment', 'Redirect and header configuration', 'SEO metadata', 'Handover documentation'],
    question: 'Can this be redeployed from scratch tomorrow?'
  },
  {
    number: '07',
    id: 'improve',
    title: 'Improve',
    short: 'Maintain, optimize and evolve the product.',
    body: 'After launch the work shifts to monitoring, small improvements and keeping the site current. Changes are tracked so the reasoning is not lost.',
    deliverables: ['Maintenance schedule', 'Performance monitoring', 'Improvement backlog', 'Change log'],
    question: 'What did we learn from how people actually used it?'
  }
];

export const techGroups = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'development', label: 'Development' },
  { id: 'deployment', label: 'Deployment' }
];

/**
 * NOTE: Gridly selects technologies per project. Nothing here implies that every
 * technology is used on every engagement — see `selection` on the technologies page.
 */
export const technologies = [
  {
    id: 'html',
    name: 'HTML',
    group: 'frontend',
    short: 'Structure and semantics',
    what: 'The markup language that defines the structure and meaning of a web page.',
    usedFor: 'Headings, landmarks, forms, tables and the document outline that assistive technology reads.',
    fitsWhere: 'The foundation of every page. Written first, before styling or behaviour.',
    example:
      'On a booking form, using real label, fieldset and input elements means screen readers announce each field correctly and the browser validates types without extra code.'
  },
  {
    id: 'css',
    name: 'CSS',
    group: 'frontend',
    short: 'Visual design and responsive layouts',
    what: 'The styling language that controls layout, typography, colour and responsive behaviour.',
    usedFor: 'Design systems, grid and flex layouts, breakpoints, dark mode and motion.',
    fitsWhere: 'Applied over the HTML structure. Modern CSS replaces most of what used to require JavaScript.',
    example:
      'Custom properties hold the colour and spacing scale, so switching to dark mode re-maps a dozen variables instead of rewriting component styles.'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    group: 'frontend',
    short: 'Interaction and dynamic behaviour',
    what: 'The programming language that runs in the browser and makes pages interactive.',
    usedFor: 'Filtering, form validation, modals, data rendering and progressive enhancement.',
    fitsWhere: 'Added on top of working HTML and CSS so core content stays available if a script fails.',
    example:
      'A portfolio filter updates the visible projects and the result count in place, and writes the active filter to the URL so the view can be shared.'
  },
  {
    id: 'php',
    name: 'PHP',
    group: 'backend',
    short: 'Server-side web development',
    what: 'A server-side language used widely for web applications and content-driven sites.',
    usedFor: 'Processing form submissions, session handling, server-side validation and database queries.',
    fitsWhere: 'Runs on the server before a page reaches the browser. Requires PHP hosting — it does not run on a static host.',
    example:
      'A contact form posts to a PHP endpoint that re-validates every field server-side, escapes the values and stores the enquiry — because client-side validation can always be bypassed.'
  },
  {
    id: 'python',
    name: 'Python',
    group: 'backend',
    short: 'Web applications, automation and backend systems',
    what: 'A general-purpose language used for web backends, data processing and automation.',
    usedFor: 'APIs, scheduled jobs, data imports, report generation and integration scripts.',
    fitsWhere: 'Behind the interface, usually exposed to the frontend as an API or run on a schedule.',
    example:
      'A nightly script reconciles a product feed against the database and writes a report, so the catalogue does not drift out of sync with stock.'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    group: 'database',
    short: 'Structured data storage and relational queries',
    what: 'A relational database that stores data in tables with defined relationships.',
    usedFor: 'Products, orders, users, enquiries and any data that must be queried or reported on.',
    fitsWhere: 'Behind the backend. The frontend never talks to it directly.',
    example:
      'A property listing site stores properties, agents and enquiries in separate tables joined by keys, so one agent record serves every listing they manage.'
  },
  {
    id: 'git',
    name: 'Git',
    group: 'development',
    short: 'Version control',
    what: 'A version control system that records every change to the codebase.',
    usedFor: 'Branching, reviewing changes, reverting mistakes and working without overwriting each other.',
    fitsWhere: 'Used from the first commit through every deployment.',
    example:
      'A redesign happens on a branch. If it is not ready on launch day, the main branch still deploys cleanly.'
  },
  {
    id: 'github',
    name: 'GitHub',
    group: 'development',
    short: 'Repository hosting and collaboration',
    what: 'A hosting platform for Git repositories with review, issue tracking and automation.',
    usedFor: 'Remote backup, pull requests, issue tracking and connecting to deployment pipelines.',
    fitsWhere: 'The source of truth that deployment reads from.',
    example:
      'Pushing to the main branch triggers a Netlify deploy automatically, so releasing is a git push rather than a manual upload.'
  },
  {
    id: 'vscode',
    name: 'VS Code',
    group: 'development',
    short: 'Code editor',
    what: 'A code editor with language support, debugging and extensions.',
    usedFor: 'Writing code, formatting, linting and running a local development server.',
    fitsWhere: 'The daily working environment.',
    example:
      'A formatter and linter run on save, so code style stays consistent without review comments about spacing.'
  },
  {
    id: 'devtools',
    name: 'Browser DevTools',
    group: 'development',
    short: 'Debugging and performance inspection',
    what: 'The debugging tools built into modern browsers.',
    usedFor: 'Inspecting layout, debugging JavaScript, throttling the network and auditing performance and accessibility.',
    fitsWhere: 'Used continuously during development and testing.',
    example:
      'Throttling to a slow connection exposes which images block the first render, before a real user finds out.'
  },
  {
    id: 'netlify',
    name: 'Netlify',
    group: 'deployment',
    short: 'Hosting and continuous deployment',
    what: 'A hosting platform for static sites and serverless functions with deployment from Git.',
    usedFor: 'Hosting, HTTPS, redirects, custom headers, form handling and preview deployments.',
    fitsWhere: 'The final stage — connects to the repository and serves the built site over a CDN.',
    example:
      'Every pull request gets a preview URL, so changes can be reviewed on a real device before they reach the live site.'
  }
];

export const getTechnology = (id) => technologies.find((tech) => tech.id === id);
