/**
 * Internship programme content and certificate records.
 *
 * RECORD POLICY
 * `certificateRecords` is the single source of truth for the verification page.
 * Only records that have actually been issued by Gridly belong here. Do not add
 * speculative, sample or test records to this array in a deployed site — the
 * verification page treats every entry in it as genuine.
 *
 * Gridly is a web development studio project. These records describe internship
 * work completed within that project. They are not accreditation, university
 * approval or a government-issued credential, and the verification page says so
 * explicitly rather than implying otherwise.
 */

export const internship = {
  title: 'Web Development Internship',
  role: 'Web Developer',
  project: 'Gridly Website',
  mode: 'Project-based, remote',

  overview:
    'The Gridly Web Development Internship is a project-based placement built around shipping a single real website end to end, rather than working through disconnected tutorials. The intern owns the project from requirement analysis through to a live deployment, and is expected to justify technical decisions rather than only implement them.',

  objectives: [
    'Take a website from requirement analysis to a live production deployment',
    'Write semantic, accessible HTML and maintainable, token-driven CSS',
    'Use JavaScript to build interactive components without a framework',
    'Understand where server-side languages and a relational database fit in a web stack',
    'Use version control properly, with meaningful commits and a remote repository',
    'Test across devices, browsers and assistive technology before calling work done',
    'Document the architecture clearly enough for another developer to continue it'
  ],

  learningAreas: [
    {
      title: 'Frontend engineering',
      body: 'Semantic HTML, modern CSS layout with Grid and Flexbox, custom properties as a design token system, responsive breakpoints, and vanilla JavaScript modules.'
    },
    {
      title: 'UI/UX and design systems',
      body: 'Wireframing, type scales, spacing systems, component thinking, and the difference between decoration and information in an interface.'
    },
    {
      title: 'Backend and database concepts',
      body: 'Where PHP and Python fit in request handling, why server-side validation is mandatory, and how relational data is modelled in MySQL with keys and joins.'
    },
    {
      title: 'Accessibility',
      body: 'Keyboard operation, focus management, WAI-ARIA patterns for tabs, dialogs and accordions, and honouring prefers-reduced-motion.'
    },
    {
      title: 'Performance',
      body: 'Measuring before optimising, avoiding layout shift, lazy loading, and keeping JavaScript payloads small.'
    },
    {
      title: 'Version control and deployment',
      body: 'Git branching and commit hygiene, GitHub as a remote, and continuous deployment to Netlify from the default branch.'
    }
  ],

  responsibilities: [
    'Analyse requirements and translate them into a sitemap and page structure',
    'Build reusable interface components from a shared design system',
    'Move page content into structured data files instead of duplicating markup',
    'Implement client-side form validation with clear, specific error messages',
    'Build the certificate verification lookup and its result states',
    'Test every page across the responsive breakpoint range',
    'Fix defects found during testing and record what changed',
    'Write project documentation in the repository README'
  ],

  workflow: [
    { step: 'Requirement analysis', body: 'Define what the site must achieve, who it serves and which pages are needed.' },
    { step: 'Information architecture', body: 'Produce the sitemap, navigation structure and URL scheme.' },
    { step: 'Design system', body: 'Establish colour, typography, spacing and component tokens before building pages.' },
    { step: 'Component build', body: 'Build header, footer, cards, forms, tabs, accordion and modal once, then reuse them.' },
    { step: 'Page assembly', body: 'Assemble each page from existing components and data files.' },
    { step: 'Testing and fixes', body: 'Responsive, keyboard, browser and validation testing, followed by a fix pass.' },
    { step: 'Deployment', body: 'Push to GitHub and deploy continuously to Netlify with redirects and headers configured.' },
    { step: 'Documentation', body: 'Record the architecture, data structures and deployment process in the README.' }
  ],

  projectWork: [
    'A multi-page company website with consistent header, footer and navigation',
    'A design token system driving light theme, dark theme and dark panels',
    'Data-driven rendering for services, portfolio, technologies, insights and FAQ',
    'An accessible mobile navigation drawer with focus trapping and scroll locking',
    'Portfolio filtering with a case-study modal and shareable URLs',
    'A contact form with full client-side validation and honest submission states',
    'A certificate verification lookup with verified, not-found and invalid states',
    'A print-optimised certificate record page'
  ],

  testing: [
    { area: 'Responsive layout', detail: 'Checked at 320, 375, 390, 412, 768, 1024, 1280 and 1440 pixels for overflow, overlap and text clipping.' },
    { area: 'Keyboard operation', detail: 'Tab order, visible focus, Escape to close dialogs, and arrow-key navigation in tab groups.' },
    { area: 'Form validation', detail: 'Empty required fields, malformed email addresses, short phone numbers and over-length messages.' },
    { area: 'Verification lookup', detail: 'Valid ID, unknown ID, malformed ID and a missing ID parameter.' },
    { area: 'Link integrity', detail: 'Every internal href and asset path checked against the files actually present in the repository.' },
    { area: 'Reduced motion', detail: 'Verified that transforms, parallax and looping animation are removed, not merely shortened.' }
  ],

  outcomes: [
    'Can structure a multi-page static site so that content lives in data, not markup',
    'Can build an interface component library with a documented token system',
    'Can implement WAI-ARIA patterns for tabs, dialogs and accordions from the specification',
    'Can explain why client-side validation is never sufficient on its own',
    'Can model relational data and describe where each layer of a web stack runs',
    'Can deploy continuously from GitHub to Netlify and configure redirects and headers',
    'Can audit a project for broken paths, accessibility defects and responsive failures'
  ]
};

/** Technologies covered during the internship, as supplied for the record. */
export const internshipTechnologies = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'MySQL', 'Other'];

/**
 * Issued certificate records.
 * The verification page looks up IDs against this array, case-insensitively.
 */
export const certificateRecords = [
  {
    certificateId: 'GRIDLY-INT-2026-DB014',
    status: 'Completed',
    name: 'Deepak Barman',
    rollNumber: 'UORS211403',
    organization: 'Gridly',
    position: 'Web Developer',
    project: 'Website',
    startDate: '17/08/2026',
    endDate: '07/09/2026',
    duration: '17/08/2026 – 07/09/2026',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'MySQL', 'Other'],
    signatory: 'Malaika Arora',
    signatoryPosition: 'HOD Web Development',
    issueDate: '10/09/2026'
  }
];

/**
 * Scope statement shown on the verification result and the certificate record.
 * It states what this record is, and what it is not, so the page cannot be read
 * as an accreditation or a third-party credential check.
 */
export const verificationScope =
  'This service verifies internship records issued by Gridly for work completed on the Gridly website project. It is not an accreditation body, university or government verification service.';

/** Case-insensitive lookup used by the verification page. */
export const findCertificate = (id) => {
  if (!id) return null;
  const needle = String(id).trim().toUpperCase();
  return certificateRecords.find((record) => record.certificateId.toUpperCase() === needle) || null;
};

/** Format accepted by the lookup: GRIDLY-INT-YYYY-XXNNN */
export const CERTIFICATE_PATTERN = /^GRIDLY-INT-\d{4}-[A-Z]{2}\d{3}$/i;
