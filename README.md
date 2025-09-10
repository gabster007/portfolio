# Finance Portfolio (Vite + React + TS + Tailwind)

A clean, professional portfolio for finance internships. Add projects by editing `src/content/projects.ts` and dropping files (PDFs, images, PPTX) into `public/uploads`.

## Quick Start
```bash
npm i
npm run dev
```

Build & preview:
```bash
npm run build
npm run preview
```

## Deploy
- **Vercel**: import this repo, framework = Vite, build = `npm run build`, output dir = `dist`
- **Netlify**: build = `npm run build`, publish = `dist`
- **Render (Static Site)**: build = `npm run build`, publish = `dist`

## Customize
- Update profile/contact in `src/App.tsx` (PROFILE object).
- Add or edit projects in `src/content/projects.ts`.
- Upload files to `public/uploads` and reference them with `/uploads/your-file.pdf`.
