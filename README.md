# Chenshan Hu — Academic Website

Static source for [chenshanhu369.github.io](https://chenshanhu369.github.io/), hosted with GitHub Pages.

The site has no build step, framework, database, analytics tracker, or server-side dependency. Every page is ordinary HTML with one shared stylesheet and a small accessibility-focused navigation script.

## Structure

```text
.
├── index.html                 # Home and selected research
├── research.html              # Publications, working papers, presentations
├── teaching-service.html      # Teaching, service, and awards
├── cv.html                    # CV viewer and download link
├── 404.html                   # Custom not-found page
├── assets/
│   ├── css/styles.css         # Shared responsive design
│   ├── images/
│   │   ├── profile.jpg        # Profile photograph
│   │   ├── favicon.svg        # Site icon
│   │   ├── research-hero.jpg           # Previous charcoal hero background
│   │   ├── research-hero-burgundy.jpg  # Previous burgundy hero background
│   │   └── research-hero-ai.jpg        # Current AI-focused burgundy hero background
│   └── js/main.js             # Mobile navigation only
├── files/chenshan-hu-cv.pdf   # Downloadable CV
├── robots.txt
└── sitemap.xml
```

## Update content

Edit the relevant HTML file directly:

- Biography and selected work: `index.html`
- Papers and presentations: `research.html`
- Courses, professional service, and awards: `teaching-service.html`
- CV introduction or controls: `cv.html`

Use semantic headings, keep publication titles linked to their canonical paper pages, and update the matching page's `description` metadata when its purpose changes substantially.

## Replace the photograph or CV

- Replace `assets/images/profile.jpg` while keeping the filename unchanged. A portrait-oriented JPEG is recommended.
- Replace `files/chenshan-hu-cv.pdf` while keeping the filename unchanged. The CV page and download links will continue to work automatically.

Do not commit private drafts, credentials, unpublished confidential material, or access tokens. This repository and all committed files are public.

## Preview locally

From the repository root:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Test the home page, all navigation links, the CV viewer, keyboard focus, and at least one mobile-width viewport before publishing.

## Publish with GitHub Pages

The repository name must remain `chenshanhu369.github.io`. In **Settings → Pages**, choose **Deploy from a branch**, select `main`, and publish from `/ (root)`. Commits pushed to `main` will then update the public site.

## License

The website source code is available under the MIT License. Profile photographs, CV content, academic papers, and personal biographical content remain the property of their respective rights holders and are not relicensed by the source-code license.
