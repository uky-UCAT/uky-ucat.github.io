# UCAT / Ishan Thakkar — personal site

A **pure static** website (plain HTML/CSS/JS). No build step, no framework,
no server. GitHub Pages serves the files exactly as they are. You can even
open `index.html` by double-clicking it on your laptop.

The content that changes often lives in small **data files** under `data/`.
To update the site you edit one text file and push — that's it.

---

## Pages

| File | What it shows | Data file to edit |
|------|----------------|-------------------|
| `index.html` | Home: bio, honors, service, news | `data/profile.js`, `data/news.js` |
| `research.html` | Research areas (linked to papers) | `data/research.js` |
| `publications.html` | Journals / conferences / chapters / patents / talks | `data/publications.js` |
| `teaching.html` | Courses by term | `data/teaching.js` |
| `group.html` | Students, alumni, prospective students | `data/students.js` |

The header, footer, and page rendering live in `assets/js/site.js`.
Styles are in `assets/css/main.css`. You rarely need to touch these.

## Everyday updates

**Add a publication** — open `data/publications.js`, copy the top line of the
right group (journal, conference, etc.), paste it as the new first line, bump
the id (e.g. `J18` → `J19`), and fill in `authors`, `title`, `venue`, `year`.
Add `award:"..."` if relevant. Your name is bolded automatically. Save, commit,
push.

**Add a news item** — open `data/news.js`, add a new object at the **top** of
the list: `{ date:"Sep 2026", html:"..." }`. You can use `<strong>` / `<em>`
inside `html`.

**Add / move a student** — edit `data/students.js` (move a name from `phd` to
`alumni`, add a `degree` and where they went).

**Edit bio, honors, service, links** — `data/profile.js`.

**Add your headshot** — drop a square photo at `assets/img/profile.jpg`. Until
then the site shows an "IT" monogram.

**Update your CV** — replace `assets/Thakkar_CV.pdf`.

After any edit: `git add . && git commit -m "update" && git push`. GitHub Pages
republishes within ~1 minute.

---

## Deploy on GitHub Pages (org: `uky-UCAT`)

**Option A — organization site (shortest URL, `uky-ucat.github.io`)**
1. Create a repo named exactly `uky-ucat.github.io` under the `uky-UCAT` org.
2. Put the contents of this folder in the repo root and push to `main`.
3. Repo → Settings → Pages → Source: *Deploy from a branch*, Branch: `main` / `root`.
4. Live at `https://uky-ucat.github.io/` in a minute.

**Option B — project site (`uky-ucat.github.io/<repo>`)**
1. Create any repo, e.g. `website`; push these files.
2. Settings → Pages → Deploy from `main` / `root`.
3. Live at `https://uky-ucat.github.io/website/`.

**Custom domain (optional)** — in Settings → Pages set a custom domain, then
add the DNS records GitHub shows. A file named `CNAME` containing your domain
will be added to the repo.

> All links here are relative, so both options work with no code changes.

## Local preview

Just double-click `index.html`. (Data is loaded via `<script>` tags, so it
works from `file://` — no local server needed.)

---

## Logo assets

Derived from your uploaded master files:

- `assets/img/ucat-mark.png` — compact UK + UCAT mark (nav bar).
- `assets/img/ucat-full.png` — full stacked lockup incl. tagline (hero, footer).
- `assets/img/ucat-wordmark.png` — the "UCAT" wordmark alone.
- `assets/img/favicon-32.png`, `favicon-180.png`, `favicon-512.png` — browser/tab icons.
- Masters kept: `UCAT-logo-2000.png`, `UCAT-logo-512.png`, `UCAT-logo-transparent.png`.
