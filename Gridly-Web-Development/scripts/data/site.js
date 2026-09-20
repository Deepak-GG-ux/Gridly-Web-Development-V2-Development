/**
 * Central site configuration.
 * Edit this file to change navigation, footer links and contact details
 * across every page at once. Nothing here is duplicated in markup.
 */

export const site = {
  name: 'Gridly',
  tagline: 'Build Better. Launch Smarter.',
  description:
    'Gridly designs and develops responsive websites, e-commerce experiences and custom web solutions for modern businesses.',

  // TODO: replace with the production Netlify domain (used for canonical + OG tags).
  url: 'https://gridly.netlify.app',

  /**
   * Demo contact details for this portfolio project.
   * Replace with real details before using the site commercially.
   */
  contact: {
    email: 'hello@gridly.studio',
    phone: '+91 00000 00000',
    location: 'Remote-first studio',
    hours: 'Monday to Friday, 10:00-18:00 IST',
    responseTime: 'We reply to project enquiries within two working days.'
  }
};

/** Primary navigation. `id` matches `document.body.dataset.page` for the active state. */
export const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about.html' },
  { id: 'services', label: 'Services', href: '/services.html' },
  { id: 'work', label: 'Work', href: '/work.html' },
  { id: 'process', label: 'Process', href: '/process.html' },
  { id: 'technologies', label: 'Technologies', href: '/technologies.html' },
  { id: 'insights', label: 'Insights', href: '/insights.html' },
  { id: 'internship', label: 'Internship', href: '/internship.html' }
];

export const primaryCta = { label: 'Start a Project', href: '/contact.html' };

export const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about.html' },
      { label: 'Work', href: '/work.html' },
      { label: 'Process', href: '/process.html' },
      { label: 'Insights', href: '/insights.html' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'Website Development', href: '/services.html#website-development' },
      { label: 'Web Applications', href: '/services.html#web-applications' },
      { label: 'UI/UX Design', href: '/services.html#ui-ux' },
      { label: 'E-Commerce', href: '/services.html#ecommerce' },
      { label: 'Maintenance', href: '/services.html#maintenance' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Technologies', href: '/technologies.html' },
      { label: 'FAQ', href: '/faq.html' },
      { label: 'Internship', href: '/internship.html' },
      { label: 'Verify a Certificate', href: '/verify/' },
      { label: 'Contact', href: '/contact.html' }
    ]
  }
];

export const legalLinks = [
  { label: 'Privacy', href: '/privacy.html' },
  { label: 'Terms', href: '/terms.html' }
];
