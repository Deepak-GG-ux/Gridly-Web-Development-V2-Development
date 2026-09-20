/**
 * Solutions ("Solutions for Every Stage"), the five Gridly principles,
 * and the interactive industries panel.
 *
 * These describe what Gridly offers. They are not case studies and contain
 * no claims about past clients or results.
 */

export const principles = [
  {
    number: '01',
    title: 'Business First',
    body: 'A website is a business tool. We start with what the organisation needs to happen — enquiries, bookings, sales, fewer support emails — and design backwards from there.'
  },
  {
    number: '02',
    title: 'Designed for People',
    body: 'Visitors arrive with a task and limited patience. Navigation, labels and forms are written in plain language so the next step is always obvious.'
  },
  {
    number: '03',
    title: 'Built to Scale',
    body: 'Content lives in structured data, not scattered through markup. Adding a service, project or article later should take minutes, not a rebuild.'
  },
  {
    number: '04',
    title: 'Performance Matters',
    body: 'Every dependency has to earn its place. We keep payloads small, load images lazily and measure against Core Web Vitals rather than guessing.'
  },
  {
    number: '05',
    title: 'Support After Launch',
    body: 'Launch day is the middle of the project. Documentation, handover and a maintenance plan are part of the work, not an upsell.'
  }
];

export const solutions = [
  {
    id: 'starting-from-zero',
    title: 'Starting From Zero',
    audience: 'For businesses that need their first professional online presence.',
    problem: 'You have a business and a phone number, but nothing a customer can be sent to.',
    solution:
      'A focused website that explains what you do, who it is for, and how to get in touch — structured so it can grow later without a rebuild.',
    examples: ['Home, services and contact pages', 'Enquiry form', 'Google Maps location', 'Mobile-first layout'],
    cta: { label: 'Plan a first website', href: '/contact.html?type=business-website' }
  },
  {
    id: 'ready-to-grow',
    title: 'Ready to Grow',
    audience: 'For businesses whose existing website needs better design, performance or functionality.',
    problem: 'The site exists but feels dated, loads slowly, or does not convert visitors into enquiries.',
    solution:
      'An audit followed by a targeted rebuild of layout, speed and content structure — keeping the URLs and content that already work.',
    examples: ['Performance audit', 'Responsive redesign', 'Clearer calls to action', 'Improved page structure'],
    cta: { label: 'Review an existing site', href: '/contact.html?type=redesign' }
  },
  {
    id: 'sell-online',
    title: 'Sell Online',
    audience: 'For businesses entering e-commerce.',
    problem: 'Orders arrive through direct messages and are tracked by hand.',
    solution:
      'A storefront with a real product catalogue, cart and checkout flow, plus the admin views needed to manage stock and orders.',
    examples: ['Product catalogue', 'Search and filters', 'Cart and checkout', 'Order management'],
    cta: { label: 'Scope a storefront', href: '/contact.html?type=ecommerce' }
  },
  {
    id: 'automate-work',
    title: 'Automate Work',
    audience: 'For businesses that need custom web applications or internal tools.',
    problem: 'A recurring task lives in a spreadsheet that three people edit and nobody trusts.',
    solution:
      'A small internal web application with validation, roles and a proper database behind it, built around the workflow you already use.',
    examples: ['Role-based access', 'Structured data entry', 'Dashboards and reports', 'Export and audit trail'],
    cta: { label: 'Describe a workflow', href: '/contact.html?type=web-application' }
  },
  {
    id: 'upgrade-your-stack',
    title: 'Upgrade Your Stack',
    audience: 'For businesses with outdated websites or systems.',
    problem: 'The site runs on software nobody wants to touch, and changes are risky.',
    solution:
      'A migration plan that moves content to a maintainable setup, documents the architecture and leaves you able to deploy without fear.',
    examples: ['Content migration', 'Modern deployment pipeline', 'Documentation and handover', 'Security review'],
    cta: { label: 'Plan a migration', href: '/contact.html?type=other' }
  }
];

export const industries = [
  {
    id: 'restaurants',
    label: 'Restaurants & Hospitality',
    headline: 'Menus that stay current and tables that get booked.',
    description:
      'Hospitality sites are read on a phone, often while someone is deciding where to eat in the next twenty minutes. Speed and clarity matter more than decoration.',
    features: ['Online menu', 'Reservations', 'Gallery', 'Location & hours', 'Contact'],
    projectType: 'Restaurant website with an editable menu and booking enquiry flow'
  },
  {
    id: 'retail',
    label: 'Retail',
    headline: 'Product catalogues that people can actually search.',
    description:
      'Retail lives or dies on findability. Categories, filters and clean product pages do more for sales than any homepage animation.',
    features: ['Product catalogue', 'Filters & search', 'Stock indicators', 'Store locator', 'Enquiry or checkout'],
    projectType: 'Catalogue-first retail site with a path to full e-commerce'
  },
  {
    id: 'education',
    label: 'Education',
    headline: 'Course information that answers admissions questions first.',
    description:
      'Education sites serve several audiences at once — prospective students, parents and current students. Structure carries most of that load.',
    features: ['Course pages', 'Admissions', 'Faculty profiles', 'Announcements', 'Contact'],
    projectType: 'Education platform with course listings and an admissions enquiry flow'
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    headline: 'Listings that are easy to filter and easy to enquire about.',
    description:
      'Property search is a filtering problem. The faster someone narrows down to three listings, the sooner they contact an agent.',
    features: ['Property listings', 'Search & filters', 'Inquiry forms', 'Photo galleries', 'Agent profiles'],
    projectType: 'Property listing site with saved searches and enquiry routing'
  },
  {
    id: 'professional-services',
    label: 'Professional Services',
    headline: 'Credibility, expertise and a clear way to book a consultation.',
    description:
      'For firms selling expertise, the website is the first credibility check. Clear service descriptions and easy contact beat stock photography.',
    features: ['Service pages', 'Team profiles', 'Case notes', 'Consultation booking', 'Resources'],
    projectType: 'Professional services site with structured service and team pages'
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    headline: 'Appointment details, locations and trust — without the clutter.',
    description:
      'Healthcare visitors want practical information quickly: what is treated, by whom, where, and how to book. Accessibility requirements are non-negotiable.',
    features: ['Department pages', 'Practitioner profiles', 'Appointment requests', 'Location & timings', 'Patient information'],
    projectType: 'Clinic website with accessible appointment request forms'
  },
  {
    id: 'travel',
    label: 'Travel',
    headline: 'Itineraries and packages presented in a way people can compare.',
    description:
      'Travel is a comparison purchase. Consistent package layouts, real photography slots and clear pricing structures help people decide.',
    features: ['Package listings', 'Itinerary pages', 'Gallery', 'Enquiry forms', 'Seasonal offers'],
    projectType: 'Travel operator site with comparable package pages'
  },
  {
    id: 'startups',
    label: 'Startups',
    headline: 'A landing page today that will not block the product tomorrow.',
    description:
      'Early-stage sites change weekly. We build them so that copy, screenshots and positioning can be swapped without touching the layout code.',
    features: ['Product landing page', 'Feature breakdown', 'Pricing structure', 'Waitlist or signup', 'Documentation entry'],
    projectType: 'Product landing page with a component-based content structure'
  },
  {
    id: 'creative',
    label: 'Creative Businesses',
    headline: 'Portfolios where the work is the interface.',
    description:
      'For studios and photographers the images are the product. Everything else — navigation, typography, loading behaviour — should stay out of the way.',
    features: ['Project galleries', 'Lightbox viewing', 'Case pages', 'About & services', 'Contact'],
    projectType: 'Portfolio site with image-led project pages'
  }
];
