# The Pitched Fort — Website

A boutique website for **The Pitched Fort**, a luxury sleepover tent party rental company in
Shreveport, LA. Whimsical, elevated, and parent-friendly — built to feel like an elevated extension
of your DIY Pick-Up form aesthetic (navy + sage + blush + cream).

You have **two versions** of the site. Use whichever fits you best:

| Version | Where | Needs tools? | Best for |
|---|---|---|---|
| **Standalone site** | `index.html` (this folder) | ❌ None | Viewing now, easy edits, simple hosting |
| **React project** | `react-app/` folder | ✅ Node.js | Multi-page site, developer handoff, future growth |

Both have **identical content and design**. Start with the standalone — it's the easiest.

---

## 1. The Standalone Site (recommended to start) 

Everything lives in a single file: **`index.html`**.

### See it
- **Just double-click `index.html`** — it opens in your web browser. That's it.

### Put it online (free options)
- **Netlify Drop** — go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the whole
  folder in. You get a live link in seconds.
- **GitHub Pages**, **Cloudflare Pages**, or any web host — just upload `index.html` (and your
  photos). No build step needed.

> One harmless note: the browser console shows a "cdn.tailwindcss.com should not be used in
> production" message. It's only a reminder — the site works perfectly. If you'd like to remove it
> later, a developer can use the React version, which compiles the styles properly.

---

## 2. Updating the Standalone Site

Open `index.html` in any text editor (even TextEdit). At the **bottom** of the file there's a
`<script>` section with easy-to-edit lists:

| What you want to change | Find this in the script |
|---|---|
| Prices | `const PRICING = [ ... ]` |
| Add-ons (name, price, description) | `const ADDONS = [ ... ]` |
| Themes | `const THEMES = [ ... ]` |
| FAQ | `const FAQS = [ ... ]` |
| Policy sections | `const POLICIES = [ ... ]` |
| "How it works" steps | `const STEPS = [ ... ]` |

Headings and intro paragraphs are in the HTML above the script — search for the words you want to
change and edit them directly.

### Add your photos
1. Put your image files in the same folder as `index.html` (a `photos/` subfolder is fine).
2. Find a placeholder block (search for `placeholder` or `Add your`) and replace it with:
   ```html
   <img src="photos/your-photo.jpg" alt="Unicorn sleepover setup"
        class="aspect-square w-full rounded-3xl object-cover" />
   ```
3. The hero, "what we do", gallery, and theme cards all have placeholders ready to swap.

### Make the inquiry form email you (5 minutes)
Right now the form shows a lovely "Thank you!" message and also links people to your Google Form as a
backup. To get inquiries **emailed straight to you**:
1. Go to [formspree.io](https://formspree.io) and create a free form. Copy your endpoint URL
   (looks like `https://formspree.io/f/abcdwxyz`).
2. In `index.html`, find `const FORM_ENDPOINT = '';` (top of the script) and paste your URL inside
   the quotes: `const FORM_ENDPOINT = 'https://formspree.io/f/abcdwxyz';`
3. Done — submissions now arrive in your inbox.

### Update links & social handles
Search `index.html` for these and edit as needed:
- Facebook: `facebook.com/thepitchedfort` (already set)
- Instagram / TikTok: `instagram.com/thepitchedfort`, `tiktok.com/@thepitchedfort`
  (⚠️ **confirm these handles** — they're best guesses)
- Address & Google Form link are already filled in.

---

## 3. The React Project (`react-app/`)

A full, multi-page version using **React + Vite + Tailwind CSS** with reusable components — exactly
the structure you asked for. Each section (Home, About, Themes, Pricing, Add-Ons, Gallery, FAQ,
Policies, Contact) is its own page with shared components.

### Run it (requires [Node.js](https://nodejs.org) — install the LTS version)
```bash
cd react-app
npm install      # one-time setup
npm run dev      # start a local preview at http://localhost:5173
npm run build    # create a production "dist/" folder to upload
```

### Where content lives
All editable content is centralized in `react-app/src/data/`:
- `site.js` — business info, address, links, social handles
- `pricing.js` — prices & notes
- `addons.js` — add-on services
- `themes.js` — themes
- `faqs.js` — FAQ
- `policies.js` — policy sections (with "REVIEW & REPLACE" reminders)

Components are in `react-app/src/components/`, pages in `react-app/src/pages/`. The inquiry form's
email setup works the same way (`FORM_ENDPOINT` in `src/pages/Contact.jsx`).

### Photos
Drop images into `react-app/public/` (e.g. `public/gallery/`) and reference them by path
(`/gallery/photo.jpg`). Any `<ImagePlaceholder src="..." />` automatically shows the real photo.

---

## 4. Important notes & to-dos

- **Confirm your Instagram & TikTok handles** (placeholders use `@thepitchedfort`).
- **Replace the policy placeholder text** with your final, reviewed contract / DIY-setup language
  (the structure is built; the wording is a friendly placeholder — see the on-page note) .
- **Add real photos** wherever you see a dashed placeholder.
- The graphics you mentioned (pricing, add-on, DIY form) didn't arrive as files, so the visual
  system was rebuilt from your written design direction. If you share them, the palette/details can
  be tuned to match exactly.
- See **`BRAND-AND-LOGO.md`** for the logo concept, fonts, color palette, and usage guidance.

---

Made with care for sweet dreams & big celebrations. ⭐
