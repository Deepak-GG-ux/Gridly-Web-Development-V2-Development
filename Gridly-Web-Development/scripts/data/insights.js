/**
 * Gridly Insights — editorial articles.
 *
 * These are original articles written for this project. They contain no
 * invented statistics, no cited research and no claims about named companies.
 * Where a figure would normally appear, the article describes the mechanism
 * instead.
 */

export const insightCategories = [
  { id: 'all', label: 'All' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'ui-ux', label: 'UI/UX' },
  { id: 'performance', label: 'Performance' },
  { id: 'seo', label: 'SEO' },
  { id: 'business', label: 'Business Technology' }
];

export const articles = [
  {
    slug: 'why-responsive-design-matters',
    title: 'Why responsive design is a structural decision, not a finishing touch',
    category: 'ui-ux',
    categoryLabel: 'UI/UX',
    date: '2026-08-21',
    dateLabel: '21 August 2026',
    readingTime: 6,
    hue: 210,
    excerpt:
      'Retrofitting a desktop layout onto a phone is expensive and usually visible. Designing the narrow case first makes the wide case almost free.',
    body: [
      {
        heading: 'The retrofit problem',
        paragraphs: [
          'Most broken mobile layouts were not designed badly. They were designed at one width and then squeezed. A three-column grid that was decided at 1440 pixels has to become one column on a phone, and every spacing, type size and image ratio chosen for the wide case has to be re-decided under pressure.',
          'The result is a layout with two personalities: a considered desktop version and a mobile version assembled from whatever survived the collapse. Users notice the second one more, because that is the one most of them see.'
        ]
      },
      {
        heading: 'Start at 320 pixels',
        paragraphs: [
          'Designing the narrowest case first forces an ordering decision: what does the visitor need to see first when only one thing fits on screen? That question has a real answer, and answering it produces a content hierarchy that then works at every wider size.',
          'Widening a layout is additive. You gain room for a second column, a larger headline, more breathing space. Narrowing a layout is subtractive, and subtraction under pressure is where design decisions get made badly.'
        ]
      },
      {
        heading: 'Breakpoints belong to the content',
        paragraphs: [
          'Breakpoints named after devices go stale within a year. A more durable rule is to add a breakpoint at the width where the current layout starts to look wrong: when a line of text exceeds a comfortable measure, when cards become too narrow to read, when a navigation bar runs out of room.',
          'In practice that gives fewer breakpoints than a device list would, and each one has a reason you can explain later.'
        ]
      },
      {
        heading: 'What to check before calling it done',
        paragraphs: [
          'Horizontal scrolling at the narrowest supported width is the most common defect, and it is almost always caused by one fixed-width element: a table, a code block, a long unbroken string or an image without a max-width. Each of those has a specific fix, and each should be checked individually rather than by eye.',
          'Then check the parts people forget: the navigation when it is open, forms with visible validation errors, and any table or data view. Those are the layouts most likely to break, and the least likely to be looked at during a quick review.'
        ]
      }
    ]
  },
  {
    slug: 'website-speed-and-user-experience',
    title: 'Website speed is an experience problem before it is a technical one',
    category: 'performance',
    categoryLabel: 'Performance',
    date: '2026-08-14',
    dateLabel: '14 August 2026',
    readingTime: 7,
    hue: 160,
    excerpt:
      'A page that renders quickly but shifts around as it loads feels slower than one that takes longer and stays still. Perceived speed is what users actually judge.',
    body: [
      {
        heading: 'Three different questions',
        paragraphs: [
          'Speed is usually discussed as a single number, but users experience it as three separate questions. Is anything happening? Is it usable? Is it stable? Those map roughly to first paint, interactivity and layout stability, and a page can pass one while failing the others.',
          'A site that paints instantly but jumps when a font or image arrives will be remembered as unreliable. A site that takes a moment but arrives complete and stays put will be remembered as fine.'
        ]
      },
      {
        heading: 'Layout shift is the quiet failure',
        paragraphs: [
          'Layout shift happens when an element arrives later than the content around it and pushes that content out of the way. The classic causes are images without declared dimensions, web fonts swapping in at a different metric, and content injected above what the user is already reading.',
          'The fixes are unglamorous: set width and height on images so the browser reserves the space, reserve room for anything that loads late, and never insert content above the current viewport position after paint.'
        ]
      },
      {
        heading: 'Measure the real page',
        paragraphs: [
          'Optimising from intuition tends to produce work in the wrong place. Throttling the network in browser developer tools and watching what blocks the first render usually identifies the actual problem within minutes, and it is rarely the thing that was assumed.',
          'The common offenders are predictable: uncompressed images far larger than their display size, render-blocking scripts in the document head, and font files loaded without a swap strategy.'
        ]
      },
      {
        heading: 'Budgets keep it fixed',
        paragraphs: [
          'Performance decays. Each new feature adds a little weight, and without a limit the page slowly returns to where it started. A written budget — a maximum page weight, a maximum number of requests, a cap on third-party scripts — turns that into a decision someone has to make deliberately.',
          'The most effective budget line is usually the simplest: every new dependency has to be justified against what it replaces.'
        ]
      }
    ]
  },
  {
    slug: 'planning-a-business-website',
    title: 'How to plan a business website before anyone writes code',
    category: 'business',
    categoryLabel: 'Business Technology',
    date: '2026-08-06',
    dateLabel: '6 August 2026',
    readingTime: 8,
    hue: 30,
    excerpt:
      'Most website projects that go over time and budget were under-specified, not under-resourced. Planning is the cheapest stage to change your mind in.',
    body: [
      {
        heading: 'Decide what the site is for',
        paragraphs: [
          'A website is a business tool, and tools have a job. Before structure or design, the project needs one sentence describing what should happen more often once the site exists: more enquiries, fewer support calls, online orders, completed applications.',
          'That sentence settles arguments later. When a feature is proposed, it either helps that outcome or it does not, and the conversation stops being about taste.'
        ]
      },
      {
        heading: 'Write the content inventory early',
        paragraphs: [
          'Listing every page and what must appear on it exposes the real size of the project. It also exposes the content that does not exist yet, which is the single most common cause of a stalled build.',
          'Content is usually the long pole. Design and development can proceed against a structure, but nothing launches until the words and images exist.'
        ]
      },
      {
        heading: 'Separate must-have from nice-to-have',
        paragraphs: [
          'Two written lists are more useful than a single prioritised one. The first list defines launch. The second becomes the roadmap for the months after, which keeps the project shippable instead of perpetually almost ready.',
          'A booking system, a customer login, multi-language support and a blog are all reasonable requests. They are rarely all launch requirements.'
        ]
      },
      {
        heading: 'Agree who owns the site after launch',
        paragraphs: [
          'Domain registration, DNS, hosting account, repository access and the ability to edit content should all have a named owner before launch rather than after. Projects get stuck for weeks because nobody can access the domain registrar.',
          'Agreeing this early also settles the maintenance question: who updates the site, how often, and under what arrangement.'
        ]
      }
    ]
  },
  {
    slug: 'common-website-design-mistakes',
    title: 'Seven website design mistakes that survive every redesign',
    category: 'ui-ux',
    categoryLabel: 'UI/UX',
    date: '2026-07-29',
    dateLabel: '29 July 2026',
    readingTime: 6,
    hue: 340,
    excerpt:
      'The same problems reappear on redesigned sites because they come from process, not from taste. Each one has a specific fix.',
    body: [
      {
        heading: 'Navigation written from the inside',
        paragraphs: [
          'Menus labelled after internal departments make visitors guess. Labels should use the words someone would say out loud when describing what they want, which is almost never the word the organisation uses internally.'
        ]
      },
      {
        heading: 'A hero that says nothing',
        paragraphs: [
          'A large headline that could belong to any company in any industry wastes the most valuable space on the site. The first screen should say what is offered and to whom, in plain language.'
        ]
      },
      {
        heading: 'Contact details hidden behind a form',
        paragraphs: [
          'Some visitors want to write a message and some want to call. Offering only one route filters out the second group entirely, and they rarely come back to try the other one.'
        ]
      },
      {
        heading: 'Text over busy images',
        paragraphs: [
          'Contrast has to hold for the worst case, not the average one. If a headline sits over photography, it needs a solid backing, a scrim, or a different layout — not a slightly darker overlay chosen by eye.'
        ]
      },
      {
        heading: 'Forms that only fail at the end',
        paragraphs: [
          'Validating on submit and returning a single generic error makes people re-read every field. Validating each field when it loses focus, with a message naming the specific problem, resolves most errors before submission.'
        ]
      },
      {
        heading: 'Motion that cannot be turned off',
        paragraphs: [
          'Parallax and scroll animation cause real discomfort for some users. Honouring the reduced-motion preference is a few lines of CSS, and it removes the transforms rather than merely speeding them up.'
        ]
      },
      {
        heading: 'No designed empty or error state',
        paragraphs: [
          'Every list can be empty and every lookup can fail. Designing those states gives the user a next action instead of a blank area they assume is broken.'
        ]
      }
    ]
  },
  {
    slug: 'idea-to-launch',
    title: 'How a website project actually moves from idea to launch',
    category: 'web-development',
    categoryLabel: 'Web Development',
    date: '2026-07-18',
    dateLabel: '18 July 2026',
    readingTime: 7,
    hue: 268,
    excerpt:
      'A walk through the seven stages of a build, what is produced at each one, and where projects most often stall.',
    body: [
      {
        heading: 'Discovery produces constraints, not features',
        paragraphs: [
          'The output of discovery is a short written statement of goals, audiences and constraints. It is not a feature list. Feature lists written before constraints are understood tend to get rewritten twice.'
        ]
      },
      {
        heading: 'Planning fixes the shape',
        paragraphs: [
          'Sitemap, scope and technology choices are agreed and written down. Technology is chosen against the requirement — a brochure site and an internal tool have almost nothing in common architecturally, and treating them the same produces either an over-engineered site or an under-engineered application.'
        ]
      },
      {
        heading: 'Design settles structure before style',
        paragraphs: [
          'Wireframes answer what goes where. Visual design answers what it looks like. Doing them in the other order means structural feedback arrives after the colours have been argued about, which is the most expensive time for it to arrive.'
        ]
      },
      {
        heading: 'Development is mostly assembly',
        paragraphs: [
          'If the design system exists, most page building is assembling existing components. When a page needs a component that does not exist yet, that is a design gap worth closing properly rather than a one-off to be hard-coded.'
        ]
      },
      {
        heading: 'Testing is a stage, not a glance',
        paragraphs: [
          'Responsive checks across the breakpoint range, keyboard operation, validation paths and cross-browser behaviour are a defined stage with a written list. Testing done informally at the end finds the obvious defects and misses the rest.'
        ]
      },
      {
        heading: 'Launch is a configuration task',
        paragraphs: [
          'Redirects, headers, metadata and the sitemap are configured before the domain is pointed. A deployment that can be repeated from an empty machine is the real finish line.'
        ]
      },
      {
        heading: 'Improvement is where sites are won',
        paragraphs: [
          'The version that launches is a hypothesis. Watching how people actually use it, then changing the things that trip them up, is what separates a site that works from a site that merely exists.'
        ]
      }
    ]
  },
  {
    slug: 'technical-seo-basics',
    title: 'The technical SEO work that belongs to the developer',
    category: 'seo',
    categoryLabel: 'SEO',
    date: '2026-07-09',
    dateLabel: '9 July 2026',
    readingTime: 5,
    hue: 96,
    excerpt:
      'Before keywords and content strategy, there is a short list of technical foundations. They are cheap during a build and expensive afterwards.',
    body: [
      {
        heading: 'One page, one title',
        paragraphs: [
          'Every page needs a unique, descriptive title element and a meta description written for a human reading a result list. Duplicated titles across a site are one of the most common and most easily fixed problems.'
        ]
      },
      {
        heading: 'Headings describe structure',
        paragraphs: [
          'One h1 per page describing that page, with h2 and h3 following the actual outline. Heading levels chosen for their font size rather than their position in the hierarchy break both search parsing and screen-reader navigation.'
        ]
      },
      {
        heading: 'URLs and redirects',
        paragraphs: [
          'Readable, stable URLs are worth designing. When a URL has to change, a permanent redirect preserves whatever that address had earned. A static host handles this with a redirect configuration file rather than server rules.'
        ]
      },
      {
        heading: 'Sitemap and robots',
        paragraphs: [
          'A sitemap should list URLs that exist and return a successful response. Listing pages that have been removed or that redirect elsewhere makes the file actively misleading, which is worse than not having one.'
        ]
      },
      {
        heading: 'Speed and mobile layout count',
        paragraphs: [
          'Page experience signals are technical work. A fast, stable, mobile-friendly page supports every other SEO effort, and no amount of content strategy compensates for a site that is slow to become usable.'
        ]
      }
    ]
  }
];

export const getArticle = (slug) => articles.find((article) => article.slug === slug);

export const relatedArticles = (slug, limit = 3) => {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, limit);
  const sameCategory = articles.filter((a) => a.slug !== slug && a.category === current.category);
  const others = articles.filter((a) => a.slug !== slug && a.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
};
