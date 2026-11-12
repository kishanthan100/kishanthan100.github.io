# Resume site

Run locally:

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # creates /dist

Publish on GitHub Pages:

1. Create a GitHub repo and push this project to the `main` branch.
2. In the repo go to Settings > Pages and set Source to "GitHub Actions".
3. Every push to `main` now builds and deploys the site automatically.
   Your site appears at https://<username>.github.io/<repo-name>/

Edit your content in `src/resume.js`. Replace the PDF in `public/` when your CV changes.
