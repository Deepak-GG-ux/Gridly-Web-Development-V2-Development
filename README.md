# Gridly

**Build Better. Launch Smarter.**

A complete multi-page website for Gridly, a web development and digital solutions
studio. Built as a static site with hand-written HTML, modern CSS and vanilla
JavaScript modules — no framework, no build step, no runtime dependencies.

This repository is also the project for a Web Developer internship. See
[Internship project](#internship-project) below.

> **Project status notice.** Gridly is a studio project created as a portfolio
> and internship piece. Portfolio entries are labelled **Concept Project** and
> are not client work. Contact details are demonstration values. No clients,
> revenue figures, awards, certifications or partnerships are claimed anywhere
> on this site.

---

## Contents

- [Pages](#pages)
- [Technology stack](#technology-stack)
- [Folder structure](#folder-structure)
- [Running locally](#running-locally)
- [Deploying to Netlify](#deploying-to-netlify)
- [Internship project](#internship-project)
- [How certificate verification works](#how-certificate-verification-works)
- [Customising content](#customising-content)
- [Connecting the contact form](#connecting-the-contact-form)
- [Accessibility](#accessibility)
- [Security notes](#security-notes)
- [Known limitations](#known-limitations)

---

## Pages

| URL | File | Purpose |
|-----|------|---------|
| `/` | `index.html` | Homepage: hero, services, approach, solutions, industries, work, process, technologies |
| `/about` | `about.html` | Introduction, mission, vision, values, philosophy, approach, why Gridly |
| `/services` | `services.html` | Eight services in detail, solutions by stage, industries, process |
| `/work` | `work.html` | Concept project archive with filtering and full case studies |
| `/process` | `process.html` | Seven development stages with deliverables and a responsibility table |
| `/technologies` | `technologies.html` | Technology catalogue, stack architecture, how the stack is chosen |
| `/insights` | `insights.html` | Editorial articles with category filtering and search |
| `/article?slug=...` | `article.html` | Article detail with related reading |
| `/internship` | `internship.html` | Internship overview, objectives, workflow, testing, outcomes, certificate |
| `/contact` | `contact.html` | Project enquiry form with full client-side validation |
| `/faq` | `faq.html` | Accordion of frequently asked questions |
| `/verify/?id=...` | `verify/index.html` | Certificate verification lookup |
| `/certificate?id=...` | `certificate.html` | Printable certificate record (noindex) |
| `/privacy` | `privacy.html` | Privacy template |
| `/terms` | `terms.html` | Terms template |
| any other path | `404.html` | Custom not-found page |

Clean URLs are configured in `netlify.toml`. Internal links use the `.html`
form so the site also works under a plain local static server.

---

## Technology stack

| Layer | Choice | Why |
|-------|--------|-----|
| Markup | Semantic HTML5 | Accessible by default, indexable, zero tooling |
| Styling | CSS custom properties, Grid, Flexbox, fluid type | One token file drives light theme, dark theme and dark panels |
| Behaviour | ES modules (native `import` / `export`) | Real code organisation without a bundler |
| Content | JavaScript data modules in `scripts/data/` | Edit content in one place; markup never duplicates it |
| Fonts | Archivo, Inter, JetBrains Mono via Google Fonts | Single request, `display=swap` |
| Version control | Git and GitHub | Continuous deployment source |
| Hosting | Netlify | Static deploy, no build command |

**Backend and database.** PHP, Python and MySQL are part of Gridly's working
stack and are documented on `/technologies`. They are **not** executing on this
deployment — a Netlify static site serves files only. The site states this
plainly rather than implying a backend exists.

---

## Folder structure

```
Gridly-Web-Development/
├── index.html              Homepage
├── about.html              About
├── services.html           Services
├── work.html               Portfolio
├── process.html            Development process
├── technologies.html       Technology catalogue
├── insights.html           Article index
├── article.html            Article detail (?slug=)
├── internship.html         Internship project page
├── contact.html            Project enquiry form
├── faq.html                FAQ accordion
├── certificate.html        Printable certificate record (?id=)
├── privacy.html            Privacy template
├── terms.html              Terms template
├── 404.html                Custom not-found page
│
├── verify/
│   └── index.html          Certificate verification (/verify/?id=...)
│
├── assets/
│   ├── favicon.svg         Brand mark, also used as the favicon
│   └── img/                Drop real screenshots and OG images here
│
├── styles/
│   ├── tokens.css          Design system: colour, type, spacing, motion
│   ├── base.css            Reset, typography, layout primitives, utilities
│   ├── components.css      Buttons, cards, forms, modal, accordion, states
│   ├── layout.css          Header, navigation, drawer, footer
│   ├── home.css            Homepage and shared section styles
│   ├── page.css            Inner page styles
│   ├── work.css            Project cards and case-study modal
│   ├── verify.css          Verification and certificate, including print
│   └── error.css           404 page
│
├── scripts/
│   ├── core/
│   │   ├── app.js          Bootstraps shared chrome on every page
│   │   ├── utils.js        DOM helpers, HTML escaping, focus trap, scroll lock
│   │   ├── theme.js        Dark mode with localStorage persistence
│   │   └── reveal.js       IntersectionObserver reveals, scroll progress
│   ├── components/
│   │   ├── header.js       Navigation and accessible mobile drawer
│   │   ├── footer.js       Footer
│   │   ├── sections.js     Shared section renderers used by every page
│   │   ├── icons.js        Inline SVG icon set
│   │   ├── tabs.js         Reusable WAI-ARIA tabs controller
│   │   ├── accordion.js    Reusable accordion
│   │   ├── project-card.js Portfolio card and generated cover art
│   │   └── case-study-modal.js
│   ├── data/
│   │   ├── site.js         Brand, navigation, footer, contact details
│   │   ├── services.js     The eight services
│   │   ├── solutions.js    Solutions, principles, industries
│   │   ├── projects.js     Portfolio projects and case studies
│   │   ├── process.js      Process stages and technology catalogue
│   │   ├── insights.js     Articles
│   │   ├── faq.js          Questions and answers
│   │   └── internship.js   Internship content and certificate records
│   └── pages/
│       ├── home.js  about.js  services.js  work.js  process.js
│       ├── technologies.js  insights.js  article.js  faq.js
│       ├── contact.js  internship.js  verify.js  certificate.js
│       └── static-page.js  (pages needing only shared chrome)
│
├── netlify.toml            Redirects, security headers, cache rules
├── robots.txt
├── sitemap.xml
├── .gitignore
└── README.md
```

---

## Running locally

ES modules are blocked by browser security rules when a page is opened directly
from the file system, so **open the site through a local server** rather than
double-clicking `index.html`.

```bash
# Python (pre-installed on macOS and most Linux systems)
python3 -m http.server 5173

# or Node
npx serve .

# or VS Code: install "Live Server" and click "Go Live"
```

Then visit http://localhost:5173.

Internal links use `.html` extensions, so every page works under a plain static
server. The clean URLs (`/about`, `/verify/`) are provided by Netlify and are
not available under `python3 -m http.server`.

---

## Deploying to Netlify

No build step is required.

1. Push this repository to GitHub — **including the `styles/`, `scripts/`,
   `assets/` and `verify/` folders.**
2. In Netlify: **Add new site → Import an existing project → GitHub**.
3. Choose the repository. Leave **Build command** empty and set **Publish
   directory** to `.` — `netlify.toml` already declares both.
4. Deploy. Every push to `main` redeploys automatically, and each pull request
   gets its own preview URL.

**After the first deploy**, replace `https://gridly.netlify.app` with your real
domain in:

- the `<link rel="canonical">` and `og:url` tags in each HTML file
- `robots.txt`
- `sitemap.xml`
- `site.url` in `scripts/data/site.js`

No environment variables are needed. This project contains no secrets.

### Uploading correctly

If you upload through the GitHub web interface, drag the **whole project
folder** onto the upload page, not just the files at the root. Uploading only
the root files leaves out `styles/`, `scripts/` and `assets/`, and every page
then loads without styling or navigation. Using Git avoids this entirely:

```bash
git init
git add .
git commit -m "Complete Gridly website"
git branch -M main
git remote add origin https://github.com/<your-username>/Gridly-Web-Development.git
git push -u origin main
```

Confirm on GitHub that `styles/`, `scripts/`, `assets/` and `verify/` appear in
the repository root before deploying.

---

## Internship project

This website is the project for a Web Developer internship at Gridly. The
`/internship` page documents the placement in full: overview, objectives,
learning areas, responsibilities, development workflow, project work, testing
carried out, learning outcomes and the completion record.

| Field | Value |
|-------|-------|
| Name | Deepak Barman |
| Roll number | UORS211403 |
| Organization | Gridly |
| Role | Web Developer |
| Project | Website |
| Duration | 17/08/2026 – 07/09/2026 |
| Technologies | HTML, CSS, JavaScript, PHP, Python, MySQL, Other |
| Authorized signatory | Malaika Arora |
| Signatory position | HOD Web Development |
| Issue date | 10/09/2026 |
| Certificate ID | `GRIDLY-INT-2026-DB014` |

This record is held in `scripts/data/internship.js` and is the single source of
truth for both the verification page and the certificate record page.

**Scope of the record.** It confirms an internship completed on the Gridly
website project. It is not an accreditation, a university record or a
government-issued credential, and both the verification page and the
certificate page say so explicitly. The certificate carries no seals, emblems
or third-party approval marks.

---

## How certificate verification works

**Entry points**

- `/verify/` — the lookup form
- `/verify/?id=GRIDLY-INT-2026-DB014` — a direct link that resolves on load
- `/certificate?id=GRIDLY-INT-2026-DB014` — the printable record

**The lookup**

1. `scripts/pages/verify.js` reads the `id` query parameter on page load, so a
   direct visit and a page refresh both work.
2. The ID is tested against `CERTIFICATE_PATTERN`
   (`GRIDLY-INT-YYYY-XXNNN`, case-insensitive) in
   `scripts/data/internship.js`.
3. If the format is valid, `findCertificate(id)` searches the
   `certificateRecords` array, comparing in upper case and ignoring surrounding
   whitespace.
4. A matching record renders as a definition list; no match renders the
   not-found state.
5. Submitting the form updates the address bar with `history.pushState`, so the
   result is linkable and the browser back button moves between lookups.

**The four states**

| State | When | Shown |
|-------|------|-------|
| Idle | No `id` in the URL and nothing entered | Instructions and the expected format |
| Invalid | `id` present but not matching the pattern | Format explanation, no lookup performed |
| Not found | Well-formed `id` with no matching record | "Certificate not found" and what to do next |
| Verified | Matching record found | Full record, status badge, links to the certificate |

**Adding a record**

Append an object to `certificateRecords` in `scripts/data/internship.js` using
the same fields. Only add records that have actually been issued — the
verification page treats every entry in that array as genuine.

The lookup runs entirely in the browser against data shipped with the site. No
request is made and no ID is logged. A static dataset is appropriate here
because this is a static deployment; moving to a database would require a
backend and is out of scope for this project.

---

## Customising content

Almost all content lives in `scripts/data/`. Change it there and every page
using it updates.

| To change | Edit |
|-----------|------|
| Navigation, footer links, contact details, site URL | `scripts/data/site.js` |
| The eight services | `scripts/data/services.js` |
| Solutions, principles, industries | `scripts/data/solutions.js` |
| Portfolio projects and case studies | `scripts/data/projects.js` |
| Process stages, technology catalogue | `scripts/data/process.js` |
| Articles | `scripts/data/insights.js` |
| FAQ questions | `scripts/data/faq.js` |
| Internship content, certificate records | `scripts/data/internship.js` |
| Colours, fonts, spacing, radii, motion | `styles/tokens.css` |

**Changing the accent colour:** edit `--c-accent` (light) and
`--c-night-accent` (dark) in `styles/tokens.css`. Every component reads the
semantic `--accent` token, so nothing else needs touching.

**Adding a project:** append an object to the `projects` array. Give it a
`cover.pattern` (`menu`, `listings`, `catalogue`, `courses`, `blueprint`,
`frames`) and a `cover.hue` (0–360) and a matching graphic is generated. To use
a real screenshot, set `cover.image` to a path under `assets/img/`.

**Adding a page:** create the `.html` file, add a redirect in `netlify.toml`,
add the URL to `sitemap.xml`, and add the nav entry in `scripts/data/site.js`.
All four steps matter — a redirect pointing at a file that does not exist is
exactly what produces a 404.

---

## Connecting the contact form

The form at `/contact` is fully validated but **does not send anything**. On
submit it shows a clearly labelled state explaining that nothing was
transmitted, and offers the composed enquiry for copying or for opening in the
visitor's own mail client.

To connect it using Netlify Forms:

1. In `contact.html`, add `netlify` and `name="contact"` to the `<form>` tag,
   and add `<input type="hidden" name="form-name" value="contact">` as its
   first child.
2. In `scripts/pages/contact.js`, remove the `setTimeout` demo branch in
   `handleSubmit` and call `form.submit()` once validation passes.
3. Redeploy. Submissions then appear in the Netlify dashboard under **Forms**.

Update `privacy.html` at the same time to name the service handling the data.

---

## Accessibility

- Semantic landmarks, one `<h1>` per page, ordered heading levels
- Skip link to main content on every page
- Visible focus rings on every interactive element (`:focus-visible`)
- Mobile drawer: labelled dialog, focus trapped, Escape to close, focus
  restored to the toggle, background scroll locked and marked `inert`
- Tabs (industries, process) follow the WAI-ARIA pattern with roving tabindex
  and arrow-key navigation
- Accordion supports arrow keys, Home and End
- Case-study modal: `role="dialog"`, `aria-modal`, focus trapped and restored
- Form fields have real labels, `aria-describedby` hints and specific error
  messages; the error summary uses `role="alert"`
- Result areas that change use `aria-live="polite"`
- `prefers-reduced-motion` removes transforms, parallax and looping animation
  rather than merely shortening them
- Content is visible by default; scroll reveals are an enhancement

---

## Security notes

This is a static frontend, but it is written as if it were not:

- **All dynamic content is escaped.** `scripts/core/utils.js` exports an `html`
  tagged template that escapes every interpolated value. Anything rendered from
  data goes through it. `raw()` exists for markup this codebase generated
  itself and is used sparingly.
- **No secrets.** No API keys, database credentials or tokens exist in this
  repository. `.env` files are git-ignored. If a backend is added later,
  credentials belong in Netlify environment variables, never in source.
- **Client-side validation is a convenience, not a control.** If the contact
  form is connected to a backend, every field must be re-validated server-side —
  client-side checks can always be bypassed. The technologies page states this
  explicitly in the PHP entry.
- **Security headers** (`X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`) are set in `netlify.toml`.
- **No third-party scripts**, analytics or trackers. The only external request
  is to Google Fonts.

---

## Known limitations

1. **JavaScript renders the header, footer and content lists.** With JavaScript
   disabled, pages show their static prose and a `<noscript>` navigation
   fallback, but data-driven grids are empty. This is the cost of the
   centralised data layer. The upgrade path is Eleventy: keep `scripts/data/`
   as-is, render the same data to static HTML at build time, and set Netlify's
   build command accordingly.
2. **ES modules require a local server** during development.
3. **Clean URLs only work on Netlify.** Locally the site uses `.html` paths.
4. **The contact form does not send email.** This is stated on the page itself.
5. **PHP, Python and MySQL are documented, not deployed.** A static host cannot
   execute them.
6. **No automated test suite.** Testing was manual against a written checklist,
   recorded on the internship page.

---

## Licence

Project code: free to use for learning and portfolio purposes. The Gridly name,
mark and written content were created for this project.
