# 🌸 Kawaii Egg App - Good Luck Message ✨

A delightful, interactive React application with a **Kawaii-Aesthetic** design featuring an egg-cracking animation to reveal an encouraging message for board exams!

## ✨ Features

- 🎨 **Soft Dreams Color Palette**: Pastel lavender, peach, mint, and rose
- 🔮 **Glassmorphism**: Beautiful backdrop-blur effects with transparency
- 🎭 **Framer Motion**: Spring physics and bouncy animations
- 🎉 **Canvas Confetti**: Celebratory particle effects
- 🎵 **Audio Integration**: Background music and sound effects
- 📱 **Mobile-First Design**: Optimized for all screen sizes
- 💫 **Smooth Interactions**: Micro-animations on every interaction
- 🌈 **Gradient Backgrounds**: Radial gradients for depth

## 🚀 Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool (Lightning fast!)
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Canvas Confetti** - Confetti effects
- **Lucide React** - Beautiful icons

## 📦 Installation

1. **Clone the repository** or extract the files

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:3000`

## 🎯 Usage

1. **Tap the egg** to start the interaction
2. **Keep tapping** (5 times total) to crack it open
3. **Enjoy** the flying text, marquee message, and flying chick reveal!

## 🎨 Design System

### Colors
- **Background**: `#FCFDF7` (Cream)
- **Primary**: `#E0D7FF` (Pastel Lavender)
- **Secondary**: `#FFDACE` (Soft Peach)
- **Accent 1**: `#D1F5E9` (Mint Green)
- **Accent 2**: `#FFC2D1` (Rose Pink)

### Typography
- **Primary Font**: Quicksand (500, 700)
- **Display Font**: Fredoka (400-700)

### Border Radius
- Extra rounded: `rounded-3xl` (1.5rem)
- Ultra rounded: `rounded-4xl` (2rem)
- Maximum rounded: `rounded-5xl` (2.5rem)

### Shadows
- **Marshmallow**: Soft, multi-layered shadows
- **Glow**: Subtle lavender glow effect

## 📁 Project Structure

```
kawaii-egg-app/
├── public/
│   └── assets/
│       ├── images/          # Egg images, chick, photo
│       └── audio/           # Background music, sound effects
├── src/
│   ├── components/
│   │   ├── EggInteraction.jsx
│   │   ├── FlyingText.jsx
│   │   ├── MarqueeMessage.jsx
│   │   ├── ChickReveal.jsx
│   │   └── FloatingDecorations.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎬 Animations

All animations use **spring physics** for a bouncy, organic feel:

- **Egg Breathing**: Gentle scale animation
- **Shake Effect**: Triggered on each click
- **Flying Text**: Staggered spring entrance
- **Marquee**: Smooth horizontal scroll
- **Chick Hover**: Continuous bobbing motion
- **Confetti**: Particle celebration effects

## 🔧 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## 📱 Mobile Optimizations

- Touch-friendly tap targets (minimum 44px)
- Prevents pull-to-refresh
- Uses `100dvh` for proper mobile viewport height
- Haptic feedback support (vibration)
- Responsive text sizing with `clamp()`
- Disabled text selection for better UX

## 🎵 Audio Files

Make sure these audio files are in `public/assets/audio/`:
- `bgm.mp3` - Background music (loops)
- `crack.mp3` - Egg crack sound effect
- `cheer.mp3` - Celebration sound

## 🖼️ Image Assets

Required images in `public/assets/images/`:
- `egg-whole.png` - Intact egg
- `egg-crack-1.png` - First crack
- `egg-crack-2.png` - Second crack
- `egg-shell.png` - Broken shell
- `chick-flying.png` - Flying chick
- `anusha-reveal.png` - Photo reveal

## 🌟 Customization

### Change Colors
Edit `tailwind.config.js` to modify the color palette.

### Modify Animations
Adjust timing in component files or `tailwind.config.js`.

### Update Messages
Edit the text in `FlyingText.jsx` and `MarqueeMessage.jsx`.

## 📝 License

This project is created for personal use. Feel free to customize it for your own encouraging messages!

## 💖 Acknowledgments

Created with love and kawaii vibes! 🌸✨

Made for Andyy's board exams - You got this! 💪❤️
