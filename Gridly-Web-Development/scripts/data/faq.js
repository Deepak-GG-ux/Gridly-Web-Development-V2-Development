/**
 * Frequently asked questions.
 * Rendered by the accordion component on faq.html and in a shortened form on
 * contact.html.
 */

export const faqs = [
  {
    id: 'how-projects-begin',
    question: 'How does a website project begin?',
    answer:
      'It begins with a conversation about what the site has to achieve, not about pages or features. From that we produce a short written summary of goals, audiences and constraints, followed by a proposed sitemap and scope. Nothing is designed or built until that document is agreed, because it is far cheaper to change your mind at that stage than during development.',
    featured: true
  },
  {
    id: 'how-long',
    question: 'How long does a website take to build?',
    answer:
      'It depends almost entirely on page count and the amount of custom functionality. A focused business website is typically two to five weeks; an e-commerce build or a custom web application is usually longer. The most common cause of delay is not development, it is content — text and images that still need to be written or gathered. We give a timeline with the scope document rather than before it.',
    featured: true
  },
  {
    id: 'redesign',
    question: 'Can you redesign an existing website?',
    answer:
      'Yes, and a redesign rarely needs to start from zero. We audit what is already working, keep the content and URLs that earn traffic, and rebuild the layout, performance and mobile experience around them. Where URLs must change, we map redirects so existing links keep working.',
    featured: true
  },
  {
    id: 'ecommerce',
    question: 'Do you build e-commerce websites?',
    answer:
      'Yes. That covers the product catalogue, category structure, search and filtering, cart and checkout flow, and the data model behind orders and stock. Payment processing is always handled by an established payment provider — card details are never stored or processed by the site itself.',
    featured: false
  },
  {
    id: 'mobile',
    question: 'Will the website work properly on mobile devices?',
    answer:
      'Every project is built mobile-first and tested across the full breakpoint range, from a 320-pixel phone up to a widescreen desktop. That includes the parts that are usually skipped: the navigation while it is open, forms showing validation errors, and any table or data view.',
    featured: true
  },
  {
    id: 'maintenance',
    question: 'Do you provide maintenance after launch?',
    answer:
      'Yes, on a monthly or quarterly arrangement. Maintenance covers updates, backups, uptime and error monitoring, broken-link checks, bug fixes, small content changes and a periodic improvement report. Launch is the middle of a project rather than the end of it.',
    featured: false
  },
  {
    id: 'web-apps',
    question: 'Can you build custom web applications?',
    answer:
      'Yes. These usually start when a spreadsheet or a manual process stops scaling. We map the existing workflow, design the data model, then build the smallest tool that removes the manual work — with user roles, real validation on the server as well as the client, and admin views for the people who run it.',
    featured: false
  },
  {
    id: 'quote',
    question: 'How do I request a quote?',
    answer:
      'Use the contact form and describe what the project needs to achieve, roughly how many pages or screens you expect, and any deadline you are working towards. A budget range is helpful because it changes what can sensibly be recommended. We reply within two working days with questions or an approach.',
    featured: true
  },
  {
    id: 'technologies',
    question: 'Which technologies do you use?',
    answer:
      'The frontend is built with HTML, CSS and JavaScript. Where a project needs server-side work, that is typically PHP or Python, with MySQL for relational data. Version control is Git with GitHub, and static sites deploy to Netlify. Technology is chosen per project against the requirement rather than applied uniformly.',
    featured: false
  },
  {
    id: 'ownership',
    question: 'Who owns the website and the code?',
    answer:
      'You do. The source lives in a repository you control, the domain and hosting accounts are registered in your name, and the handover includes everything needed to hand the project to another developer. Nothing is locked to a proprietary builder you cannot leave.',
    featured: false
  }
];

export const featuredFaqs = () => faqs.filter((faq) => faq.featured);
