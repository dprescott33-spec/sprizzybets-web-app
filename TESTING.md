# Testing Guide

## Local Development

### Setup
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

## Manual Test Scenarios

### Homepage (`/`)
- [ ] Layout renders without errors
- [ ] Navigation bar displays correctly
- [ ] Live scores cards show game data
- [ ] Responsive design works on mobile (max-width: 768px)

### Auth Page (`/auth`)
- [ ] Sign Up form renders and accepts input
- [ ] Sign In form renders and accepts input
- [ ] Form toggle between modes works
- [ ] Error handling displays Firebase auth errors
- [ ] Loading state shows during submission

## Type Checking & Linting

```bash
npm run build    # TypeScript validation + production build
npm run lint     # ESLint rules
```

## Environment Variables

See `.env.example` for required Firebase credentials. Copy to `.env.local` for local development:

```bash
cp .env.example .env.local
# Edit .env.local with your Firebase credentials
```

## Production Build

```bash
npm run build
npm start  # Start production server
```

## Recommended Future Improvements

1. **Unit Tests** — Add Jest + React Testing Library for component testing
2. **E2E Tests** — Add Playwright for full user flow testing
3. **Auth Flow Tests** — Test sign-up, sign-in, and error scenarios
4. **Responsive Design Tests** — Ensure mobile/tablet layouts work correctly
5. **Accessibility Tests** — Run axe or similar to catch a11y issues
