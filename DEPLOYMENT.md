# 🚀 Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended) ⚡

**Easiest and fastest option!**

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite - just click "Deploy"!

**Or use Vercel CLI:**
```bash
npm install -g vercel
vercel
```

### 2. Netlify 🌐

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"!

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### 3. GitHub Pages 📄

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/kawaii-egg-app"
   }
   ```

3. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/kawaii-egg-app/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Cloudflare Pages ☁️

1. Push to GitHub
2. Visit [pages.cloudflare.com](https://pages.cloudflare.com)
3. Create new project
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
6. Deploy!

## Build Optimization Tips

### 1. Optimize Images
Before deploying, compress your images:
```bash
# Install imagemin
npm install -g imagemin-cli

# Compress images
imagemin public/assets/images/* --out-dir=public/assets/images/optimized
```

### 2. Enable Compression
Most platforms enable gzip/brotli automatically, but you can verify in your platform's settings.

### 3. Add Caching Headers
For Netlify, create `public/_headers`:
```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/assets/audio/*
  Cache-Control: public, max-age=31536000, immutable
```

### 4. Preload Critical Assets
Already configured in `index.html` with Google Fonts preconnect!

## Environment Variables

If you need environment variables:

1. Create `.env.local`:
   ```
   VITE_API_URL=your_api_url
   ```

2. Access in code:
   ```js
   const apiUrl = import.meta.env.VITE_API_URL
   ```

3. Add to your deployment platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment

## Performance Checklist

✅ Images optimized
✅ Audio files compressed (MP3 recommended)
✅ Bundle size analyzed
✅ Lazy loading implemented (already done with React.lazy if needed)
✅ Font loading optimized (preconnect added)
✅ Service worker (optional - not included, but can add)

## Monitoring

### Add Analytics (Optional)

**Google Analytics:**
```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Troubleshooting

### Audio not playing on iOS?
- Ensure user interaction before playing
- Add `playsInline` attribute
- Already handled in the code!

### Images not loading?
- Check paths: should be `/assets/images/...`
- Verify files are in `public/` folder

### Animations laggy on mobile?
- Reduce particle count in confetti
- Disable animations for low-power mode (already implemented!)

### Font not loading?
- Check Google Fonts link in `index.html`
- Fonts are preconnected for performance

## Custom Domain

### Vercel
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as shown

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS with provided values

### Cloudflare Pages
1. Click "Custom Domains"
2. Add your domain
3. DNS automatically configured if using Cloudflare

---

**Pro Tip**: Use Vercel for the best developer experience and automatic preview deployments on every commit! 🎉

Happy deploying! 🚀✨
