# 🚀 Quick Start Guide

Get your Kawaii Egg App running in **3 minutes**! ⏱️✨

## Step 1: Prerequisites ✅

Make sure you have:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- A code editor (VS Code recommended)

**Check your installation:**
```bash
node --version  # Should show v18.0.0 or higher
npm --version   # Should show 9.0.0 or higher
```

## Step 2: Install Dependencies 📦

Open your terminal in the project folder and run:

```bash
npm install
```

This will install:
- React & React DOM
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Canvas Confetti (particle effects)
- Lucide React (icons)

**Installation takes ~2 minutes** ⏰

## Step 3: Start Development Server 🎯

```bash
npm run dev
```

You should see:
```
VITE v5.2.11  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

**Open your browser** to `http://localhost:3000` 🎉

## Step 4: Test the App 🥚

1. **Click the egg** - It should shake!
2. **Keep clicking** (5 times total)
3. Watch the magic happen! ✨

**Things you should see:**
- Egg cracks progressively
- Flying text appears
- Marquee message scrolls
- Chick flies in with photo
- Confetti celebrations!

## Common Issues & Fixes 🔧

### Port 3000 already in use?
```bash
# Change port in vite.config.js
server: {
  port: 3001,  // Change to any available port
}
```

### Dependencies won't install?
```bash
# Clear npm cache and try again
npm cache clean --force
npm install
```

### Blank screen?
1. Check browser console (F12)
2. Make sure all files are in place
3. Try `npm run dev` again

### Images not loading?
- Verify files are in `public/assets/images/`
- Check browser console for 404 errors
- Paths should be `/assets/images/filename.png`

### Audio not playing?
- Click the egg first (browsers require user interaction)
- Check browser console for errors
- Make sure files are in `public/assets/audio/`

## Next Steps 🎨

### Customize Your App
Read **CUSTOMIZATION.md** to:
- Change the message
- Replace images
- Modify colors
- Adjust animations

### Deploy Your App
Read **DEPLOYMENT.md** for:
- Vercel deployment (easiest!)
- Netlify deployment
- GitHub Pages setup
- Custom domain setup

### Learn the Code
Explore these files:
1. `src/App.jsx` - Main application logic
2. `src/components/` - Individual components
3. `tailwind.config.js` - Design system colors

## Development Commands 💻

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure 📁

```
kawaii-egg-app/
├── 📁 public/              # Static assets
│   └── 📁 assets/
│       ├── 🖼️ images/      # Egg, chick, photos
│       └── 🎵 audio/       # Sounds & music
├── 📁 src/                 # Source code
│   ├── 📁 components/      # React components
│   │   ├── EggInteraction.jsx
│   │   ├── FlyingText.jsx
│   │   ├── MarqueeMessage.jsx
│   │   ├── ChickReveal.jsx
│   │   └── FloatingDecorations.jsx
│   ├── App.jsx            # Main app
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── 📄 index.html           # HTML template
├── ⚙️ vite.config.js       # Vite config
├── 🎨 tailwind.config.js   # Tailwind config
└── 📦 package.json         # Dependencies
```

## Keyboard Shortcuts (VS Code) ⌨️

- `Ctrl + \`` - Toggle terminal
- `Ctrl + B` - Toggle sidebar
- `Ctrl + P` - Quick file open
- `Ctrl + Shift + P` - Command palette

## Performance Tips ⚡

### During Development
- Keep terminal open to see errors
- Use React DevTools browser extension
- Check console for warnings

### Before Deploying
- Run `npm run build` to test
- Check bundle size
- Optimize images (use TinyPNG)
- Test on mobile devices

## Helpful Resources 📚

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Docs](https://vitejs.dev)

## Need More Help? 💬

1. **Check the docs:**
   - README.md - Project overview
   - CUSTOMIZATION.md - How to customize
   - DEPLOYMENT.md - How to deploy

2. **Debug checklist:**
   - ✅ Node.js installed?
   - ✅ Dependencies installed?
   - ✅ Dev server running?
   - ✅ Console errors?
   - ✅ Files in correct locations?

3. **Still stuck?**
   - Check browser console (F12)
   - Try `npm install` again
   - Delete `node_modules` and reinstall

## You're All Set! 🎉

Your kawaii app is ready to customize and deploy!

**Happy coding!** 💖✨

---

Made with love and kawaii vibes 🌸
Last updated: February 2026
