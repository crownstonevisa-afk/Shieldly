# Laam — Domain Fix Plan (prepared 2026-10-17, ~11:10 PKT)

## Verified state (checked 2026-10-17 06:10 UTC via Google Public DNS + live curl)

- `laam.buzz` — Google Public DNS returns **Status 3 (NXDOMAIN)** for A, NS, CNAME and TXT queries. RDAP lookup returns 404.
  Meaning: the domain is **not registered at all yet** — this is not DNS propagation and not just a missing Vercel step.
- Live site side effects of the domain not existing:
  - `https://shieldly-lemon.vercel.app/sitemap.xml` returns **308 Permanent Redirect → https://laam.buzz/sitemap.xml** (dead destination).
  - Homepage HTML canonical and OG URLs already point to `https://laam.buzz/` on every page.
  - Homepage itself still serves 200 from Vercel edge cache, but fresh paths follow the redirects to the non-existent domain.

## Why this matters now

1. The site cannot be cleanly reviewed by AdSense / Search Console while its canonicals and sitemap point to a non-existent domain.
2. While it stays unregistered, **anyone else can register laam.buzz** — the name, price ($2.49 first year on Vercel, checked 2026-10-17) and availability were verified earlier, but availability is not a reservation.

## Option A — user registers the domain (his stated plan)

1. Buy `laam.buzz` (Vercel Domains, or any registrar).
2. In Vercel project `shieldly` (prj_aG44ycwRk5UIJJEcfOs96s1AmW0G): Settings → Domains → add `laam.buzz` (and `www.laam.buzz`).
3. If bought outside Vercel, add the DNS records Vercel shows at the registrar.
4. Nothing else is needed website-side: canonicals, sitemap, robots and redirects already point to laam.buzz and were redeployed (GitHub HEAD 57647ac).
5. Tell Muse "domain lag gaya" — Muse re-verifies DNS + all key pages live and then prepares the AdSense application steps on the final domain.

## Option B — domain purchase is delayed / not wanted right now

Tell Muse "abhi domain nahi, lemon par wapas karo" and Muse will, in one pass:
- Remove the three host redirects from `vercel.json` (www / lemon / laam-buzz hosts → laam.buzz).
- Switch every canonical/OG URL, `sitemap.xml` and `robots.txt` back from `https://laam.buzz/` to `https://shieldly-lemon.vercel.app/`.
- Push to GitHub `crownstonevisa-afk/Laam`, redeploy to Vercel production, and verify homepage, one article, sitemap.xml and robots.txt return 200 with lemon canonicals.
This is fully reversible — the same pass can be re-run forward the day the domain is registered.

## Not done / not claimed

- No domain was bought, no Vercel/GitHub change was made in preparing this plan.
- AdSense has NOT been applied for — that needs the user's own AdSense account and, after approval, his publisher ID for ads.txt + ad code.
