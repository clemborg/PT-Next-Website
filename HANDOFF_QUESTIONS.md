# Questions for the dev team before handoff

The PT Next site is built and ready (Next.js, full static export — the
`out/` folder is plain HTML/CSS/JS, deployable anywhere). A few choices are
better made by whoever's running it day to day:

1. **Hosting** — any preference? The build is a static export, so it runs
   on Vercel, Netlify, Cloudflare Pages, S3/CloudFront, or anywhere else
   that serves static files. If you already have infra/conventions for
   other marketing sites, happy to match them.

2. ~~**Analytics**~~ — confirmed: Google Analytics (GA4). It's wired in
   already, gated behind an env var (`NEXT_PUBLIC_GA_ID`) so it only loads
   once a real ID is set — nothing fires in dev/preview builds. One thing
   still needed: **the GA4 Measurement ID** (format `G-XXXXXXXXXX`, found
   in GA4 Admin → Data Streams) to set as a build-time env var on the host.

3. **Search Console**
   - Does anyone on the team currently have login access to a Google
     account that previously verified ptnext.com in Search Console?
   - **If yes:** log in and check the verification method. A DNS TXT
     record survives the site swap untouched. An HTML file or meta tag,
     though, is tied to the *old* Pac Team site's content and will
     silently break the moment the new site deploys — add a DNS TXT
     record as a second verification method now, before cutover, as
     insurance. Once live, add `sitemap.xml` to the property so Google
     starts crawling the new page structure, and add a second owner (a
     shared/company Google account, not just one person's login) so
     access can't get stranded again.
   - **If no (or unsure):** verify fresh via a DNS TXT record when we
     repoint DNS in #4 — whoever does the DNS change automatically gets
     Search Console access too, no hunting for old credentials. Submit
     the sitemap after. Tradeoff: any historical Search Console data
     (old query/indexing history) doesn't carry over — not a blocker,
     just a fresh start.

4. **DNS repoint**
   - Who has admin access to ptnext.com's DNS records (which registrar,
     and who can log in)?
   - Besides pointing the domain at the Pac Team Group site, is there
     anything else on ptnext.com's DNS worth preserving — email (MX
     records), other subdomains, or TXT records for other services?
   - **If a specific person has access (e.g. the head engineer):** the
     actual record values needed depend on the hosting choice in #1 —
     Vercel/Netlify/Cloudflare Pages each generate their own A record /
     CNAME target once the domain is connected in their dashboard, so
     this step waits on that decision. Time the change deliberately
     (propagation can take minutes to ~48 hours) and do it when someone
     can monitor afterward. Also worth a heads-up to whoever manages Pac
     Team Group's site/marketing, since this domain is currently serving
     their content and is being reclaimed.
   - **If access is unclear or gatekept** (old contractor, lost login,
     etc.): that's an actual launch blocker, not just a preference —
     flag it now rather than at deploy time. Recovery is usually through
     the registrar's account-recovery process, proving ownership via
     billing history or the WHOIS record.

5. ~~**Formspree**~~ — confirmed: the form posts to
   `https://formspree.io/f/xojooqbl`, the intended production endpoint.
   No open question here — just make sure whoever owns that Formspree
   account has notification routing set up and, once the domain is live,
   restricts allowed origins to `ptnext.com` in the Formspree dashboard.

6. **Repo / CI** — where should this code live (which GitHub org/repo), and
   is there an existing CI pipeline it should plug into, or is a plain
   `npm run build` + deploy on push fine to start?

Nothing here is blocking — the site works today — but knowing your
preferences upfront saves a round-trip later.
