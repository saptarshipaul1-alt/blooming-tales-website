# Product Requirements Document (PRD)
## Blooming Tales — Personal Psychologist Website

| Field              | Detail                                      |
|--------------------|---------------------------------------------|
| Document Version   | 1.0                                         |
| Date               | 18 May 2026                                 |
| Prepared by        | GitHub Copilot (AI Assistant)               |
| Prepared for       | Saptarshi Paul (Project Coordinator)        |
| Client / End Owner | Shweta Nair — Blooming Tales                |
| Status             | Built & Ready for Deployment                |

---

## 1. Project Overview

### 1.1 Background
Shweta Nair is a licensed psychologist and founder of **Blooming Tales**, a mental health practice registered as an MSME under the Government of India. She offers a range of therapeutic and counselling services to individuals, children, and organisations. This website was commissioned to establish her professional digital presence.

### 1.2 Project Goal
Create a professional, warm, and accessible website that:
- Introduces Shweta Nair and her practice to prospective clients
- Showcases the services she offers
- Builds trust and credibility as a registered professional
- Makes it easy for visitors to get in touch and book a session
- Can be updated independently by Shweta without technical knowledge

---

## 2. Target Audience

| Audience Segment        | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| Primary — Individuals   | Adults seeking therapy for anxiety, stress, relationships, life transitions |
| Secondary — Parents     | Parents looking for child counselling support                               |
| Tertiary — Corporates   | HR managers, L&D teams, school administrators seeking workshops             |
| Incidental — Educators  | Teachers and school staff looking for well-being programs                   |

**Geography:** Hyderabad (in-person) + pan-India (online sessions)

---

## 3. Business Goals

| # | Goal                                                       | Priority |
|---|------------------------------------------------------------|----------|
| 1 | Attract new clients and generate enquiry leads             | High     |
| 2 | Establish personal brand and professional credibility      | High     |
| 3 | Showcase full range of services clearly                    | High     |
| 4 | Enable contact / session booking without friction          | High     |
| 5 | Be easily managed by a non-technical user (Shweta herself) | High     |
| 6 | Allow future expansion (blog, testimonials, booking tool)  | Medium   |

---

## 4. Scope

### 4.1 In Scope — Version 1.0
- 4-page static website (Home, About, Services, Contact)
- Fully responsive design (desktop, tablet, mobile)
- Contact form with Netlify Forms integration (no backend required)
- On-brand visual design matching the Blooming Tales logo palette
- SEO metadata on all pages
- Accessibility basics (ARIA labels, semantic HTML, keyboard navigation)
- Mobile navigation (hamburger menu)
- Scroll-triggered animations
- Deployment-ready for Netlify (free tier)
- README / plain-English update guide for the site owner

### 4.2 Out of Scope — Version 1.0 (can be added post-launch)
- Blog / resource section
- Testimonials page
- Online booking integration (e.g. Calendly)
- Logo image in the navbar (pending asset from Shweta)
- Custom domain setup (e.g. bloomingtales.in)
- Analytics (Google Analytics / Hotjar)
- Multi-language support
- Client login / portal
- Payment gateway

---

## 5. Pages & Content Requirements

### 5.1 Home Page (`index.html`)

| Section            | Content                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------|
| Navbar             | Logo (text), links: Home / About / Services / Book a Session CTA                             |
| Hero               | Tagline: "Heal patterns. Reclaim joy." · Sub-headline · CTA buttons · Photo placeholder · MSME badge · Floating "5+ Years" badge |
| Trust Bar          | 4 service highlights in a full-width teal band                                                |
| About Teaser       | Short bio, 4 credentials, link to full About page, photo placeholder                         |
| Services Overview  | 4 service cards (Individual Therapy, Child Counselling, Corporate, Coaching)                  |
| Why Blooming Tales | 3 value proposition cards (Safe & Confidential, Evidence-Based, Flexible & Accessible)        |
| CTA Banner         | "Ready to begin your journey?" — link to Contact page                                         |
| Footer             | Brand blurb, quick links, services links, Instagram link, copyright, MSME note                |

---

### 5.2 About Page (`about.html`)

| Section               | Content                                                                                  |
|-----------------------|------------------------------------------------------------------------------------------|
| Page Hero             | Breadcrumb, page title, sub-headline                                                     |
| Main About Section    | 2-column layout: sticky photo (left) + scrollable content (right)                        |
| Content — Bio         | "Why I became a psychologist", founding story of Blooming Tales                          |
| Content — Approach    | Description of therapeutic style, adaptability, client-centredness                       |
| Content — Credentials | Bulleted list: degrees, certifications, registration, MSME, years of experience          |
| Content — Who I Work With | Adults, adolescents, children, professionals, corporate teams                        |
| Content — Personal Note | Closing warm message to prospective clients                                            |
| Approach Cards        | 5 framework cards: CBT, ACT, Mindfulness, Play Therapy, Solution-Focused                |
| CTA Banner            | "Let's work together"                                                                    |
| Footer                | Same as Home                                                                             |

**Note:** Credentials section contains placeholder text marked for Shweta to update (university name, licensing body).

---

### 5.3 Services Page (`services.html`)

| Service Block         | ID Anchor    | Key Details                                                        |
|-----------------------|--------------|--------------------------------------------------------------------|
| Individual Therapy    | `#individual`| Anxiety, depression, grief, relationships, self-esteem; online + in-person |
| Child Counselling     | `#child`     | Play-based, ages broad; school anxiety, behaviour, family change; in-person Hyd |
| Corporate Workshops   | `#corporate` | Customisable, multi-module; burnout, resilience, psych safety; online + in-person |
| Educator Workshops    | `#teachers`  | Compassion fatigue, student distress identification; online + in-person |
| Counselling Coaching  | `#coaching`  | Career, confidence, values; goal-oriented; online + in-person      |

Each block includes:
- Emoji icon + gradient background
- 2-column layout (alternating direction)
- Bullet list of sub-topics covered
- Service tag (mode/location)
- Direct CTA button to Contact page

**Mini FAQ section** at bottom of Services page covers: session length, number of sessions, confidentiality, online availability.

---

### 5.4 Contact Page (`contact.html`)

| Section            | Content                                                                           |
|--------------------|-----------------------------------------------------------------------------------|
| Page Hero          | Breadcrumb, title, sub-headline with response time note                           |
| Left Column        | Location (Hyderabad), Online availability, Email (placeholder), Instagram, Response Time, Confidentiality note |
| Right Column       | Contact form (see below)                                                          |
| CTA Banner         | "Not quite ready?" — link to Services page                                        |

**Contact Form Fields:**
| Field              | Type     | Required | Notes                                  |
|--------------------|----------|----------|----------------------------------------|
| First Name         | Text     | Yes      |                                        |
| Last Name          | Text     | No       |                                        |
| Email Address      | Email    | Yes      | Validated client-side                  |
| Phone Number       | Tel      | No       |                                        |
| Service Enquiry    | Select   | Yes      | 6 options incl. General Enquiry        |
| Session Mode       | Select   | Yes      | Online / In-person / Either            |
| Message            | Textarea | Yes      |                                        |

**Form handling:** Netlify Forms (`data-netlify="true"`) — submissions captured in Netlify dashboard, email notifications configurable. Honeypot bot protection included. No backend or third-party required.

---

## 6. Design Specifications

### 6.1 Brand Identity
| Element      | Value                                          |
|--------------|------------------------------------------------|
| Brand Name   | Blooming Tales                                 |
| Tagline      | Heal patterns. Reclaim joy.                    |
| Logo         | Lotus flower with face silhouette (AI-created) |
| Logo Source  | Instagram: @bloomingtales_counselling          |
| MSME Reg.    | Government of India                            |

### 6.2 Colour Palette (sourced from logo)
| Name            | Hex       | Usage                                    |
|-----------------|-----------|------------------------------------------|
| Logo Teal       | `#2E9DAA` | Primary — buttons, links, nav, accents   |
| Teal Dark       | `#1E7D8A` | Hover states, gradients                  |
| Teal Light      | `#5DBFCA` | Gradients, image backgrounds             |
| Teal Pale       | `#C8E9ED` | Badges, card borders, form focus rings   |
| Logo Gold       | `#C89A28` | Accent — credential icons, service tags  |
| Light Gold      | `#E8C45A` | Secondary warmth accent                  |
| Cool Cream      | `#F5F8F9` | Page background                          |
| Section Cream   | `#EEF5F7` | Alternate section background             |
| Deep Navy-Teal  | `#1B3B5A` | Headings (matches logo text colour)      |
| Mid Navy        | `#3A5568` | Body text                                |
| Muted Slate     | `#7A96A8` | Sub-text, labels, captions               |

### 6.3 Typography
| Role       | Font                              | Weights       |
|------------|-----------------------------------|---------------|
| Headings   | Playfair Display (Google Fonts)   | 400, 600, 700 |
| Body       | Lato (Google Fonts)               | 300, 400, 700 |
| Fallbacks  | Georgia (headings) / Arial (body) |               |

### 6.4 Layout
- Max container width: 1140px
- Section padding: 88px top/bottom (desktop), scales down to 56px (mobile)
- Border radius: 8px (small), 16px (medium), 32px (large), full pill
- Grid: CSS Grid with `auto-fit / minmax` for responsive columns
- No CSS framework — pure custom CSS

### 6.5 Responsive Breakpoints
| Breakpoint | Behaviour                                                                 |
|------------|---------------------------------------------------------------------------|
| ≥ 901px    | Full desktop layout — all multi-column grids active                       |
| ≤ 900px    | Tablet — hero stacks to single column, photo column hidden on hero        |
| ≤ 600px    | Mobile — hamburger nav, single column everything, reduced padding         |

---

## 7. Technical Specifications

### 7.1 Tech Stack
| Layer      | Technology              | Reason                                           |
|------------|-------------------------|--------------------------------------------------|
| Markup     | HTML5 (semantic)        | Accessible, SEO-friendly, no framework needed    |
| Styling    | CSS3 (custom, no framework) | Full design control, lightweight, easy to edit |
| Behaviour  | Vanilla JavaScript (ES5+) | No dependencies, broad browser support         |
| Fonts      | Google Fonts (CDN)      | Free, fast, no install required                  |
| Forms      | Netlify Forms           | No backend, free, spam-protected                 |
| Hosting    | Netlify (free tier)     | Drag-and-drop deploy, free SSL, CDN              |

### 7.2 JavaScript Features (`js/main.js`)
- Mobile navigation toggle with ARIA state management
- Click-outside and Escape key to close nav
- Client-side form validation (required fields + email format)
- IntersectionObserver scroll-triggered fade-in animations
- Active nav link highlight based on current page

### 7.3 SEO
- Unique `<title>` and `<meta name="description">` on every page
- Open Graph tags on Home page
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- `aria-label` and `aria-current` throughout
- `alt` text on all image elements

### 7.4 File Structure
```
blooming-tales-website/
├── index.html              ← Home
├── about.html              ← About
├── services.html           ← Services
├── contact.html            ← Contact
├── css/
│   └── styles.css          ← All styles
├── js/
│   └── main.js             ← All JavaScript
├── images/                 ← (To be created — add photos here)
├── README.md               ← Non-technical update guide
└── BLOOMING-TALES-PRD.md   ← This document
```

---

## 8. Content Placeholders (Pending from Shweta)

The following items are marked in the HTML with `<!-- TO UPDATE -->` comments and need to be filled in before or after launch:

| Item                    | Location             | Action Required                             |
|-------------------------|----------------------|---------------------------------------------|
| Hero photo              | `index.html`         | Replace placeholder div with `<img>` tag    |
| About photo             | `index.html`, `about.html` | Replace placeholder div with `<img>` tag |
| Logo image              | All 4 navbars        | Add logo `<img>` when asset is provided     |
| Email address           | `contact.html`       | Replace `hello@bloomingtales.in`            |
| University name         | `about.html`         | Fill in actual degree institution           |
| Licensing body          | `about.html`         | e.g. RCI (Rehabilitation Council of India)  |

---

## 9. Deployment Plan

| Step | Action                                                                   | Owner   |
|------|--------------------------------------------------------------------------|---------|
| 1    | Sign up at netlify.com (free)                                            | Shweta / Saptarshi |
| 2    | Drag & drop `blooming-tales-website/` folder to Netlify dashboard        | Saptarshi |
| 3    | Site goes live at auto-generated URL (e.g. `bloomingtales.netlify.app`)  | Auto    |
| 4    | Rename site in Netlify settings to a cleaner URL                         | Saptarshi |
| 5    | Enable form email notifications in Netlify → Forms → Notifications       | Shweta  |
| 6    | Add photos and update placeholder content                                | Shweta  |
| 7    | Purchase domain (e.g. `bloomingtales.in`) — optional, ~₹800–1200/year   | Shweta  |
| 8    | Connect custom domain in Netlify → Domain settings                       | Saptarshi |

---

## 10. Future Enhancements (Post V1.0)

| Feature                  | Priority | Notes                                          |
|--------------------------|----------|------------------------------------------------|
| Logo image in navbar     | High     | Pending asset from Shweta                      |
| Testimonials page        | High     | Structure already in navbar — just add page    |
| Blog / Resources section | Medium   | Can be static HTML pages or connected to a CMS |
| Calendly booking embed   | Medium   | Replace contact form CTA with booking widget   |
| Google Analytics         | Medium   | Add `<script>` tag to all pages                |
| Custom domain            | High     | When Shweta is ready                           |
| FAQ standalone page      | Low      | Mini FAQ already exists on Services page       |
| WhatsApp chat button     | Low      | Floating button — simple JS addition           |
| Cookie consent banner    | Low      | Required if analytics is added                 |

---

## 11. Assumptions & Constraints

- Client has no existing website, domain, or hosting
- Client (Shweta) is non-technical — all update paths must require zero coding
- No budget assumed — all tools used are free tier
- Logo asset to be sourced from Shweta directly (not scraped from Instagram)
- No client database, payment processing, or login system in scope for V1
- Content (bio, credentials, qualifications) marked as placeholders will be provided by Shweta

---

*End of Document — Blooming Tales Website PRD v1.0*
