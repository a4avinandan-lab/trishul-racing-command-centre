# Trishul Racing Command Centre

A responsive React + TypeScript team workspace for Trishul Racing. This is a local-first, no-API, no-subscription version. Trishul AI uses a built-in STEM Racing knowledge base and saved local team workspace data; it is not connected to a paid generative AI service.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run typecheck
npm run build
npm run preview
```

## Data and backups

- The app automatically saves data in this browser's `localStorage`.
- Use **Settings → Backup & restore** to export or import a JSON backup.
- Data stays on this browser/device and is not automatically shared with other team members or devices.
- No OpenAI API key, paid AI service, backend server, or cloud account is required.

## GitHub

Create an empty GitHub repository, then from this folder run:

```bash
git init
git add .
git commit -m "Build Trishul Racing Command Centre starter"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
