# Natnael Debebe | Portfolio

Personal portfolio website. Plain HTML, CSS and JavaScript: no build step, no dependencies.

## Structure

```
index.html        Page content
styles.css        Styles, dark mode, animations
script.js         Projects list, filters, modal, contact form, scroll animations
404.html          "Page not found" page
assets/
  img/            Optimised WebP images + og-image.jpg (social share preview)
  Natnael_Debebe_Resume.pdf
vercel.json       Caching and security headers (Vercel)
_source/          Raw design files and originals (ignored by git, not deployed)
```

## Editing

- **Projects:** edit the `PROJECTS` list at the top of `script.js`. Images go in `assets/img/` (WebP preferred).
- **Contact form:** sends via Formspree. The form ID is `FORMSPREE_ID` in `script.js`.
- **CV:** replace `assets/Natnael_Debebe_Resume.pdf` (keep the same file name).

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Deploy (Vercel)

1. Push this folder to a GitHub repository.
2. On vercel.com, choose **Add New → Project**, import the repo, keep the defaults (Framework: *Other*, no build command), and click **Deploy**.
3. Every `git push` redeploys automatically.

After the first deploy, update the `og:image` / `twitter:image` tags in `index.html` to the full URL
(e.g. `https://your-domain/assets/img/og-image.jpg`) so link previews show the image.
