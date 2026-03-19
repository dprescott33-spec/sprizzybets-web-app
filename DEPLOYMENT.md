# Deployment Guide

## Pre-Deployment Checklist

- [x] Build passes: `npm run build`
- [x] Type checking passes: TypeScript validation complete
- [x] All pages render without errors
- [x] Firebase credentials externalized to environment variables
- [x] `.env.local` is in `.gitignore` (credentials never committed)
- [ ] Manual testing complete (`TESTING.md`)
- [ ] Code review completed

## Supported Deployment Platforms

### Vercel (Recommended for Next.js)

**Easiest option:**

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect to [Vercel.com](https://vercel.com)
3. Import this project
4. Add environment variables in project settings:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
5. Deploy (automatic on every push)

### Netlify

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add the same environment variables (above) in Site Settings > Build & Deploy
5. Deploy

### Self-hosted (Docker)

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Deploy with:
```bash
docker build -t sprizzybets .
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_FIREBASE_API_KEY=... \
  -e NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=... \
  # ... other env vars
  sprizzybets
```

## Environment Variables for Production

**Never commit credentials to git.** All Firebase keys must be injected at deployment:

| Variable | Source | Required |
|----------|--------|----------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase Console | Yes |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Console | Yes |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Console | Yes |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase Console | Yes |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase Console | Yes |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase Console | Yes |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Firebase Console | Optional (Analytics) |

**Get from Firebase Console:**
1. Go to your Firebase project settings
2. Copy config values into your deployment platform's environment variables
3. Do NOT hardcode in `.env` files that get committed

## Post-Deployment Testing

1. Visit your production URL
2. Test the same scenarios from `TESTING.md`
3. Check browser console for errors
4. Verify Firebase initialization logs show no errors
5. Test authentication (sign up, sign in)

## Performance Notes

- **Build optimization:** Turbopack (enabled in Next.js 16.2) provides fast builds
- **CSS:** Tailwind v4 PostCSS plugin optimizes CSS automatically
- **Static generation:** Homepage and auth page are prerendered as static HTML for speed
- **Firebase:** Credentials are `NEXT_PUBLIC_` so they load in the browser directly (no server round-trip)

## Rollback Plan

Keep the previous commit SHA saved. If deployment fails:
```bash
git revert <commit-sha>
git push  # Redeploy previous version
```

Most platforms (Vercel, Netlify) have built-in rollback functionality in their dashboards.

## Security Best Practices

✅ Already implemented:
- Credentials never hardcoded in source code
- `.env.local` is in `.gitignore`
- `NEXT_PUBLIC_` prefix correctly marks client-side variables

📋 Recommended next steps:
- Set up branch protection rules (require PR reviews before merge)
- Enable 2FA on Firebase project
- Use Firebase security rules to protect database/storage
- Monitor Firebase usage and set billing alerts
