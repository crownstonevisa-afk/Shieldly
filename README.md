# Shieldly

**Shieldly** — Small Business Insurance & Cyber Protection, Explained Simply.

A static, framework-free website (plain HTML, one shared `styles.css`, one small `script.js`) publishing original, in-depth guides to US small business insurance and cyber protection for small business owners. Founded and written by Muhammad Sameer, Cyber Security Consultant. Based in Lahore, Pakistan — serving US readers online.

## Site structure

- `index.html` — homepage (hero, trust stats, categories, featured guides, how it works, FAQ, newsletter form)
- `articles.html` — index of all 20 articles, with JavaScript search and category filter
- `articles/` — 20 article pages (insurance basics, cyber, costs, industry guides, claims & paperwork, glossary)
- `about.html`, `contact.html`
- `privacy-policy.html` (includes Google AdSense / advertising cookies, GDPR and CCPA sections), `terms.html`, `disclaimer.html`, `editorial-policy.html`
- `sitemap.html` (human sitemap), `sitemap.xml`, `robots.txt`, `404.html`, `favicon.svg`
- `styles.css`, `script.js` — shared design (photorealistic photo headers via picsum.photos, navy/emerald/gold palette, glassmorphism) and behaviour (mobile nav, FAQ accordion, article filter, form thank-you messages, current year)
- `BUILD_REPORT.md` — build verification: file list, per-article word counts, link check, image seed status

Canonical base URL used throughout: https://shieldly-lemon.vercel.app/

## How to deploy

This is a plain static site — no build step.

1. **Vercel:** import the folder/repository in Vercel (Framework Preset: Other / no build command, output directory = project root), or drag the folder into a new Vercel project. Deploy, then confirm `index.html`, an article page, `sitemap.xml`, and `robots.txt` all load on the live URL.
2. **Any other static host:** upload the whole folder as-is, keeping the directory structure.

## AdSense application steps for the owner

1. Point the site at its final domain first if you plan to use a custom domain (see below), and let it run publicly for a short period while you check every page on mobile and desktop.
2. Create / sign in to a Google AdSense account (owner must be 18+ and hold only one AdSense account).
3. Add the site in AdSense and verify ownership using the method AdSense gives you (ads.txt / meta tag / snippet) once the site is live.
4. Submit for review. Review typically checks: original, substantial content; clear navigation; working Privacy Policy, About, and Contact pages; no prohibited content. Do not click your own ads and do not buy traffic while under review.
5. After approval (below): add the AdSense ad code, publish `ads.txt`, connect Search Console, and submit the sitemap there.

## What to add AFTER AdSense approval

- **ads.txt** — deliberately NOT included in this build. Create `ads.txt` at the site root only with your real publisher line from AdSense, in the form: `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0` (replace the X's with your own publisher ID). Publishing a placeholder or someone else's ID can break monetisation.
- **AdSense code** — paste the Auto ads / ad unit code AdSense provides just before `</head>` (or per AdSense's current instructions) on every page, or use the Vercel/host-level snippet if available.
- **Google Search Console** — verify the property, submit `https://shieldly-lemon.vercel.app/sitemap.xml` (or the custom-domain equivalent), and check Coverage for indexing errors.
- **Custom domain** — in Vercel: Project > Settings > Domains, add your domain, set the DNS records Vercel shows at your registrar, wait for the SSL certificate, then update every canonical URL, `sitemap.xml`, and `robots.txt` from `shieldly.vercel.app` to the new domain and re-submit the sitemap in Search Console and to AdSense (Add site) if the domain changed after approval.
- **Analytics (optional)** — add Google Analytics 4 only with appropriate cookie consent handling for EEA/UK visitors.

## Contact

Site contact email is published on the Contact page only (per brand rule) and is intentionally not repeated in this README.
