# Omar Al-Kour — Portfolio

A responsive React portfolio with:
- English and Arabic language switching
- RTL layout when Arabic is selected
- Dark and light themes
- Theme and language preferences saved in localStorage
- Responsive navigation for mobile
- About, skills, projects, experience, education, services, and contact sections
- Contact form that prepares an email in the visitor's mail application

## Requirements
- Node.js 20+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Personalize before publishing
Search the project for these placeholders and replace them:
- `your-email@example.com` — your actual email address
- GitHub and LinkedIn profile links in `src/main.jsx`
- `/omar-al-kour-cv.pdf` — place your real CV PDF in the `public` folder
- Project descriptions and project links — replace demo descriptions with your real work
- University, location, and any personal information you want to adjust
- The stats in the hero section are design placeholders; update them to accurate values

## Notes
The contact form uses `mailto:` and does not send messages through a server. For a real online form, connect a backend/API or a form service.
