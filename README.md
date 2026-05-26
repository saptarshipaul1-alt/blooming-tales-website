# Blooming Tales — Website Guide

A personal website for **Shweta Nair**, Psychologist & Counsellor, under the brand **Blooming Tales**.

---

## File Structure

```
blooming-tales-website/
├── index.html          ← Home page
├── about.html          ← About Shweta
├── services.html       ← All services
├── contact.html        ← Contact form & info
├── css/
│   └── styles.css      ← All visual styles (colours, fonts, layout)
├── js/
│   └── main.js         ← Mobile menu, animations, form behaviour
└── images/             ← Add all photos here (create this folder)
```

---

## How to Update Content (No coding needed)

### Change text on any page
1. Open the relevant `.html` file in any text editor (e.g. Notepad, VS Code)
2. Find the text you want to change — it reads like normal sentences
3. Replace it and save the file
4. Re-upload or re-deploy the site

### Add your photo
Photos go in an `images/` folder (create it inside `blooming-tales-website/`).

Then in the HTML, find the placeholder comment like:
```html
<!-- TO UPDATE: Replace with: <img src="images/shweta-hero.jpg" alt="..." /> -->
```
And replace the `<div class="hero-image-placeholder">...</div>` block with:
```html
<img src="images/shweta-hero.jpg" alt="Shweta Nair, Psychologist" />
```

### Update contact email
In `contact.html`, find and replace:
```
hello@bloomingtales.in
```
with your actual email address.

### Update qualifications / credentials
In `about.html`, find the `<ul class="credentials-list">` section and edit the `<li>` items.

---

## Colours (for reference — sourced from the Blooming Tales logo)

| Token            | Hex       | Used for                          |
|------------------|-----------|-----------------------------------|
| Logo Teal        | `#2E9DAA` | Primary brand colour, CTAs, links |
| Logo Gold        | `#C89A28` | Accent, highlights, icons         |
| Light Gold       | `#E8C45A` | Secondary warmth accent           |
| Cool Cream       | `#F5F8F9` | Page background                   |
| Deep Navy-Teal   | `#1B3B5A` | Headings (from logo text colour)  |

To change any colour site-wide, edit the `:root { }` block at the top of `css/styles.css`.

---

## Hosting — Deploying on Netlify (Free)

Netlify gives you free hosting, HTTPS, and automatic form handling.

### Steps:
1. Go to [netlify.com](https://www.netlify.com) and sign up for free
2. On the dashboard, click **"Add new site" → "Deploy manually"**
3. Drag and drop the `blooming-tales-website/` folder onto the page
4. Your site will be live at a Netlify URL in seconds (e.g. `blooming-tales.netlify.app`)
5. Connect your own domain later from the Netlify dashboard

### Contact Form (Netlify Forms — already set up)
The contact form in `contact.html` is already configured for Netlify Forms.
- Once deployed, form submissions will appear in your Netlify dashboard under **Forms**
- Netlify can also email you on every submission — set this up in **Forms → Notifications**
- No backend, no code, no extra setup required

---

## Adding More Pages Later

To add a new page (e.g. Testimonials, Blog, FAQ):
1. Copy `about.html` as a starting point
2. Rename it (e.g. `testimonials.html`)
3. Update the page hero, breadcrumb, and main content section
4. Add the link to the navbar in all four HTML files

---

## Domain Name Tips

Good available domain options to check:
- `bloomingtales.in`
- `bloomingtales.co.in`
- `shwetanair.in`
- `bloomingtales.com`

Register at [GoDaddy India](https://www.godaddy.com/en-in) or [BigRock](https://www.bigrock.in), then connect to Netlify.

---

*Built with care — HTML, CSS, JavaScript. No framework, easy to update.*
