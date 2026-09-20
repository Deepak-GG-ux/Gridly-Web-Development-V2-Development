/**
 * Portfolio projects.
 *
 * IMPORTANT — DEMO DATA POLICY
 * Every entry below is a *concept project*: a self-directed design and build
 * exercise created to demonstrate capability. None of these are client
 * engagements. No performance metrics, revenue figures or client names are
 * claimed anywhere in this file. Outcomes are described as "demonstration
 * outcomes" only.
 *
 * Replace `status: 'Concept Project'` with 'Client Project' ONLY when a real,
 * authorised engagement exists and the client has approved publication.
 *
 * `cover` drives a generated SVG graphic (see components/project-card.js) so the
 * site ships with no third-party images. Swap `cover.image` in when real
 * screenshots are available.
 */

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'websites', label: 'Websites' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'web-apps', label: 'Web Apps' },
  { id: 'ui-ux', label: 'UI/UX' }
];

export const projects = [
  {
    id: 'brewhouse',
    name: 'BrewHouse',
    industry: 'Restaurant & Café',
    type: 'Restaurant Website',
    status: 'Concept Project',
    categories: ['websites', 'ui-ux'],
    year: '2026',
    tagline: 'A menu-first site for a neighbourhood coffee house.',
    description:
      'A single-location café concept where the menu changes weekly and most visits happen on a phone within a few kilometres of the shop.',
    tags: ['HTML', 'CSS', 'JavaScript', 'JSON data'],
    cover: { pattern: 'menu', hue: 24, image: null },
    caseStudy: {
      overview:
        'BrewHouse is a concept build exploring how a small café can keep an online menu current without a content management system. The menu is stored as structured data and rendered at runtime, so a single file update changes every price on the site.',
      challenge:
        'Café menus change often, and most small businesses stop updating their website within a few months of launch. The design had to make updating cheap enough that it actually happens, while keeping the mobile experience fast on a poor connection.',
      approach:
        'We treated the menu as data rather than page content. Sections, items, prices and dietary flags live in one JSON structure. The page layout reads from it, so nothing is hard-coded in markup and no page needs to be edited by hand.',
      solution:
        'A five-section site — home, menu, gallery, location and contact — with a sticky category rail on the menu page, a reservation enquiry form with client-side validation, and an opening-hours component that reflects the current day.',
      features: [
        'Menu rendered from a single structured data file',
        'Dietary and allergen flags per item',
        'Reservation enquiry form with validation',
        'Opening-hours component with current-day highlight',
        'Image gallery with keyboard-accessible lightbox',
        'Map embed and directions link'
      ],
      technology: [
        { name: 'HTML', role: 'Semantic page structure and accessible forms' },
        { name: 'CSS', role: 'Responsive layout with a sticky category rail' },
        { name: 'JavaScript', role: 'Menu rendering, filtering and form validation' },
        { name: 'JSON', role: 'Menu, hours and location content as editable data' }
      ],
      designDecisions: [
        'Menu prices set in a tabular-figures font so columns align down the page.',
        'Photography reserved for the gallery; the menu stays typographic to keep it readable and cheap to update.',
        'Warm neutral palette derived from roasted-coffee tones rather than a generic hospitality gradient.'
      ],
      developmentProcess: [
        'Content audit of typical café menus to define the data shape',
        'Wireframes for menu browsing on a 375px screen first',
        'Component build: menu section, item row, hours block',
        'Form validation and error messaging',
        'Cross-browser and reduced-motion checks'
      ],
      outcome:
        'Demonstration outcome: the menu updates in one file, the site ships as static files, and the reservation form demonstrates a complete validation and submission-state flow. No live traffic or business results are claimed.'
    }
  },
  {
    id: 'urbannest',
    name: 'UrbanNest',
    industry: 'Real Estate',
    type: 'Property Listing Website',
    status: 'Concept Project',
    categories: ['websites', 'web-apps'],
    year: '2026',
    tagline: 'Property search built around filtering, not browsing.',
    description:
      'A residential listings concept focused on getting a visitor from hundreds of properties down to a handful worth enquiring about.',
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL schema'],
    cover: { pattern: 'listings', hue: 210, image: null },
    caseStudy: {
      overview:
        'UrbanNest explores the interface problem at the centre of property search: too many results and too many filters. The concept pairs a filterable listing grid with a saved-enquiry flow and a documented relational schema for the data behind it.',
      challenge:
        'Property filters are easy to build badly. Applying one filter usually reloads the page, loses scroll position and hides how many results remain — so people give up before they enquire.',
      approach:
        'Filtering happens on the client against an in-memory dataset, with the result count always visible and each filter removable as a chip. URL parameters reflect the active filters so a search can be shared or bookmarked.',
      solution:
        'A listings page with price, bedroom, type and locality filters; a property detail page with a gallery, specification table and agent enquiry form; and a documented MySQL schema showing how the same interface would be served from a database.',
      features: [
        'Multi-criteria filtering with live result counts',
        'Removable filter chips and a clear empty state',
        'Shareable filtered URLs via query parameters',
        'Property detail pages with specification tables',
        'Agent enquiry form with per-property context',
        'Relational schema for properties, agents and enquiries'
      ],
      technology: [
        { name: 'HTML', role: 'Listing and detail page structure' },
        { name: 'CSS', role: 'Responsive card grid and filter rail' },
        { name: 'JavaScript', role: 'Filtering, URL state and gallery behaviour' },
        { name: 'MySQL', role: 'Documented schema for properties, agents and enquiries' }
      ],
      designDecisions: [
        'Result count sits beside the heading so it is visible while filters are being changed.',
        'Cards show price, locality and size before photography, because those are the first filters people apply mentally.',
        'Empty state offers the nearest broader search rather than a dead end.'
      ],
      developmentProcess: [
        'Requirement analysis of typical listing attributes',
        'Entity-relationship diagram for the property dataset',
        'Filter logic built and unit-checked against edge cases',
        'Detail page and enquiry flow',
        'Keyboard and screen-reader pass over the filter controls'
      ],
      outcome:
        'Demonstration outcome: filtering, URL state and the empty state all work end to end against demo data. The database layer is documented but not deployed, since the concept ships as a static site.'
    }
  },
  {
    id: 'aura',
    name: 'Aura',
    industry: 'Jewellery & Retail',
    type: 'Product Catalogue',
    status: 'Concept Project',
    categories: ['ecommerce', 'ui-ux'],
    year: '2026',
    tagline: 'A catalogue where the product photography sets the pace.',
    description:
      'A jewellery catalogue concept exploring how much interface can be removed before browsing stops working.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    cover: { pattern: 'catalogue', hue: 340, image: null },
    caseStudy: {
      overview:
        'Aura is a restrained product catalogue for a jewellery brand concept. The interface is deliberately quiet: large product imagery, minimal chrome, and a cart flow that never takes over the screen.',
      challenge:
        'Luxury retail interfaces often over-decorate, which competes with the product. The opposite failure is just as common — so minimal that people cannot find sizes, materials or the cart.',
      approach:
        'We set a strict rule: any interface element that is not the product, the price, or the next action gets removed. Variant selection, material details and the cart were then designed back in as the minimum needed to complete a purchase.',
      solution:
        'A collection grid with hover previews, product pages with variant selection and a specification panel, a slide-over cart, and a documented PHP order-handling example showing where server-side validation belongs.',
      features: [
        'Collection grid with alternate-image hover preview',
        'Variant selection for size and material',
        'Slide-over cart with running subtotal',
        'Wishlist state stored locally',
        'Structured product data for future search',
        'PHP example showing server-side order validation'
      ],
      technology: [
        { name: 'HTML', role: 'Product and collection markup' },
        { name: 'CSS', role: 'Image-led grid and slide-over cart' },
        { name: 'JavaScript', role: 'Variant logic, cart state and previews' },
        { name: 'PHP', role: 'Example server-side validation and order handling' }
      ],
      designDecisions: [
        'Product images crop to a consistent ratio so the grid never jumps as images load.',
        'Prices use tabular figures and sit below the product name, not over the image.',
        'The cart slides over rather than navigating away, so browsing context survives.'
      ],
      developmentProcess: [
        'Grid and image-ratio system defined before any page build',
        'Variant data model designed to support future stock levels',
        'Cart state and persistence implemented',
        'Server-side validation example written and documented',
        'Performance pass on image loading and layout shift'
      ],
      outcome:
        'Demonstration outcome: the catalogue, variant selection and cart work as a front-end prototype. Payment processing is not implemented — the PHP example documents where it would be handled securely on a server.'
    }
  },
  {
    id: 'educore',
    name: 'EduCore',
    industry: 'Education',
    type: 'Education Platform',
    status: 'Concept Project',
    categories: ['web-apps', 'websites'],
    year: '2026',
    tagline: 'Course information organised around admissions questions.',
    description:
      'An education platform concept that treats the prospectus, the admissions flow and student announcements as one connected system.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'MySQL'],
    cover: { pattern: 'courses', hue: 160, image: null },
    caseStudy: {
      overview:
        'EduCore is a concept for an institution that needs to serve prospective students, parents and current students from the same site without the navigation collapsing under the weight of it.',
      challenge:
        'Education sites serve audiences with different goals. A prospective student wants eligibility and fees; a current student wants a timetable change. Putting both in one menu usually produces a menu nobody can read.',
      approach:
        'Navigation was split by audience intent rather than by department. Course data was structured so that eligibility, duration, fees and outcomes render consistently on every course page.',
      solution:
        'Course listings with level and stream filters, standardised course detail pages, a multi-step admissions enquiry form with progress indication, faculty profiles, and an announcements feed with category filtering.',
      features: [
        'Course catalogue with level and stream filters',
        'Consistent course detail template',
        'Multi-step admissions enquiry with progress state',
        'Faculty profile directory',
        'Announcements feed with categories',
        'Documented Python service for enquiry processing'
      ],
      technology: [
        { name: 'HTML', role: 'Accessible course and form structure' },
        { name: 'CSS', role: 'Responsive catalogue and multi-step form layout' },
        { name: 'JavaScript', role: 'Filtering, step navigation and validation' },
        { name: 'Python', role: 'Documented backend service for enquiry handling' },
        { name: 'MySQL', role: 'Schema for courses, faculty and enquiries' }
      ],
      designDecisions: [
        'Every course page uses the same field order so two courses can be compared by scrolling.',
        'The admissions form shows progress and allows going back without losing entered data.',
        'Announcements are dated and categorised rather than presented as an undated news wall.'
      ],
      developmentProcess: [
        'Audience mapping and navigation restructure',
        'Course data schema definition',
        'Template build for catalogue and detail pages',
        'Multi-step form with state preservation',
        'Accessibility review of form errors and focus order'
      ],
      outcome:
        'Demonstration outcome: the catalogue, filters and multi-step enquiry form are fully working against demo data. The Python and MySQL layers are documented designs, not a deployed backend.'
    }
  },
  {
    id: 'buildline',
    name: 'Buildline',
    industry: 'Construction',
    type: 'Company Website',
    status: 'Concept Project',
    categories: ['websites'],
    year: '2026',
    tagline: 'Project history as the main sales argument.',
    description:
      'A construction company concept where completed projects, capabilities and compliance documents do the convincing.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    cover: { pattern: 'blueprint', hue: 38, image: null },
    caseStudy: {
      overview:
        'Buildline is a concept site for a mid-sized construction firm. The structure assumes that a prospective client is checking whether this firm has done work like theirs before, and how quickly they can reach someone.',
      challenge:
        'Construction sites tend to be either a photo wall with no detail, or a document dump with no structure. Neither helps someone evaluating a contractor for a specific project type.',
      approach:
        'Projects were modelled with sector, scale and service attributes so the portfolio could be filtered the way a client actually thinks — "commercial, mid-scale, fit-out" — rather than chronologically.',
      solution:
        'A filterable project archive, service pages describing capability by sector, a capability-statement download area with placeholder documents, and a direct enquiry route on every page.',
      features: [
        'Project archive filtered by sector and scale',
        'Service pages structured by capability',
        'Document download area with file-type indicators',
        'Sticky enquiry bar on mobile',
        'Team and certification placeholders',
        'Location and site-office details'
      ],
      technology: [
        { name: 'HTML', role: 'Semantic archive and document markup' },
        { name: 'CSS', role: 'Editorial grid and sticky mobile enquiry bar' },
        { name: 'JavaScript', role: 'Multi-attribute filtering and state management' }
      ],
      designDecisions: [
        'A technical, drawing-inspired grid replaces stock construction photography in the concept build.',
        'Project cards lead with sector and scale, not with the project name.',
        'Certification areas are explicit placeholders — no credentials are implied.'
      ],
      developmentProcess: [
        'Project attribute model defined with sector and scale taxonomies',
        'Archive and filter interface built mobile-first',
        'Document area with accessible file metadata',
        'Enquiry routing per service line',
        'Responsive testing from 320px upward'
      ],
      outcome:
        'Demonstration outcome: the archive filters across multiple attributes simultaneously and degrades to a readable list without JavaScript styling assumptions. All certifications and documents are placeholders.'
    }
  },
  {
    id: 'frame-studio',
    name: 'Frame Studio',
    industry: 'Photography',
    type: 'Portfolio Website',
    status: 'Concept Project',
    categories: ['ui-ux', 'websites'],
    year: '2026',
    tagline: 'An interface that gets out of the photography’s way.',
    description:
      'A photography portfolio concept exploring image performance, sequencing and a lightbox that works with a keyboard.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Image optimisation'],
    cover: { pattern: 'frames', hue: 268, image: null },
    caseStudy: {
      overview:
        'Frame Studio is a portfolio concept for a photography practice. The brief was almost entirely a performance problem: large images, slow connections, and an audience that leaves if the first frame does not appear quickly.',
      challenge:
        'Photography portfolios are the heaviest sites on the web. Full-bleed galleries routinely ship several megabytes per page, and lightboxes are frequently unusable with a keyboard.',
      approach:
        'Images are served in modern formats at multiple widths, loaded lazily below the fold, and given explicit dimensions so nothing shifts as they arrive. The lightbox was built from a dialog pattern with full focus management.',
      solution:
        'A sequenced project index, project pages with mixed full-bleed and gridded layouts, an accessible lightbox with keyboard navigation, and an about and enquiry page.',
      features: [
        'Responsive images with width-based sources',
        'Lazy loading below the fold with reserved space',
        'Keyboard-accessible lightbox with focus trapping',
        'Project sequencing controlled from data',
        'Reduced-motion alternative to transitions',
        'Enquiry form with project-type context'
      ],
      technology: [
        { name: 'HTML', role: 'Picture elements and dialog-based lightbox' },
        { name: 'CSS', role: 'Mixed full-bleed and grid gallery layouts' },
        { name: 'JavaScript', role: 'Lightbox, focus management and preloading' },
        { name: 'Image optimisation', role: 'Modern formats and responsive sizes' }
      ],
      designDecisions: [
        'Typography kept to one weight so it never competes with the images.',
        'Galleries alternate rhythm — full-bleed, pair, grid — to create pacing without effects.',
        'The lightbox closes on Escape and returns focus to the thumbnail that opened it.'
      ],
      developmentProcess: [
        'Image pipeline and format decisions made first',
        'Layout rhythm defined as a reusable sequence',
        'Lightbox built against the dialog accessibility pattern',
        'Lazy-loading and layout-shift verification',
        'Reduced-motion and keyboard testing'
      ],
      outcome:
        'Demonstration outcome: the gallery avoids layout shift, the lightbox is fully operable by keyboard, and images load lazily with reserved dimensions. Placeholder graphics stand in for licensed photography.'
    }
  }
];

export const getProject = (id) => projects.find((project) => project.id === id);

export const filterProjects = (categoryId) =>
  categoryId === 'all' ? projects : projects.filter((p) => p.categories.includes(categoryId));
