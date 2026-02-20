# 🎨 Customization Guide

Make this app your own! Here's how to customize every aspect.

## 📝 Change the Message

### Flying Text
Edit `src/components/FlyingText.jsx`:

```jsx
const words = [
  { text: 'ALL', ... },      // Change to your text
  { text: 'THE', ... },      // Change to your text
  { text: 'BEST', ... },     // Change to your text
  { text: 'FOR', ... },      // Change to your text
  { text: 'BOARDS', ... },   // Change to your text
]
```

**Example for Birthday:**
```jsx
const words = [
  { text: 'HAPPY', ... },
  { text: 'BIRTHDAY', ... },
  { text: 'TO', ... },
  { text: 'YOU', ... },
  { text: '🎂', ... },
]
```

### Marquee Message
Edit `src/components/MarqueeMessage.jsx`:

```jsx
const message = "Your custom message here! • Another message • "
```

### Footer Message
Edit `src/App.jsx` (look for the footer section):

```jsx
<p className="...">
  Your custom message here! ❤️
</p>
```

### Instruction Text
Edit `src/components/EggInteraction.jsx`:

```jsx
const [instructionText, setInstructionText] = useState("Your initial message...")

// And in the useEffect:
if (clickCount === 1) {
  setInstructionText("First click message!")
} else if (clickCount === 3) {
  setInstructionText("Third click message!")
}
```

## 🖼️ Replace Images

### Photo Reveal
Replace `public/assets/images/anusha-reveal.png` with your image.

**Tips:**
- Recommended size: 400x400px
- Format: PNG or JPG
- Keep file size under 500KB for performance

### Egg Images
Replace these files in `public/assets/images/`:
- `egg-whole.png` - Starting state
- `egg-crack-1.png` - First crack
- `egg-crack-2.png` - Second crack
- `egg-shell.png` - Final broken state

**Alternative Ideas:**
- Gift box (unwrapping animation)
- Balloon (popping animation)
- Flower bud (blooming animation)
- Treasure chest (opening animation)

### Chick/Character
Replace `chick-flying.png` with:
- Butterfly for graduation
- Heart for anniversary
- Star for achievement
- Balloon for birthday

## 🎨 Change Colors

Edit `tailwind.config.js`:

### Pastel Aesthetic (Current)
```js
lavender: { 200: '#E0D7FF' },
peach: { 200: '#FFDACE' },
mint: { 200: '#D1F5E9' },
rose: { 200: '#FFC2D1' },
```

### Dark Mode Kawaii
```js
lavender: { 200: '#7C5CBF' },
peach: { 200: '#FF9A76' },
mint: { 200: '#4ECDC4' },
rose: { 200: '#FF6B9D' },
```

### Ocean Theme
```js
ocean: { 200: '#B8E6F9' },
coral: { 200: '#FFB4A2' },
seafoam: { 200: '#C7FFD8' },
pearl: { 200: '#F0F0F0' },
```

### Sunset Theme
```js
orange: { 200: '#FFB366' },
pink: { 200: '#FF8FA3' },
purple: { 200: '#C89DFF' },
yellow: { 200: '#FFE66D' },
```

Then update component colors:

**Example - Change primary color:**
```jsx
// In FlyingText.jsx
className="text-rose-300"  // Change to text-ocean-200
```

## 🎵 Change Audio

Replace files in `public/assets/audio/`:

### Background Music
- `bgm.mp3` - Should be calm, looping music
- Recommended length: 30-60 seconds
- Format: MP3, 128kbps

### Sound Effects
- `crack.mp3` - Short click/pop sound
- `cheer.mp3` - Celebratory sound (1-3 seconds)

**Where to find free audio:**
- [Freesound.org](https://freesound.org)
- [Pixabay Music](https://pixabay.com/music/)
- [YouTube Audio Library](https://studio.youtube.com)

## 🎭 Modify Animations

### Speed Up/Slow Down

**Egg Breathing:**
In `EggInteraction.jsx`:
```jsx
transition={{
  duration: 3,  // Change to 2 for faster, 5 for slower
  repeat: Infinity,
}
```

**Flying Text Delay:**
In `FlyingText.jsx`:
```jsx
const words = [
  { text: 'ALL', delay: 0, ... },      // Appears immediately
  { text: 'THE', delay: 0.6, ... },    // Appears 0.6s later
  { text: 'BEST', delay: 1.2, ... },   // Adjust these values!
]
```

**Confetti Amount:**
In `App.jsx`:
```jsx
confetti({
  particleCount: 100,  // Change to 50 for less, 200 for more
  spread: 70,          // Change to 90 for wider spread
  // ...
})
```

### Change Animation Style

**Bouncy → Smooth:**
```jsx
// Current (bouncy)
transition={{ type: "spring", stiffness: 200 }}

// Change to (smooth)
transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
```

## 🔢 Adjust Interaction

### Change Number of Clicks
In `App.jsx`:
```jsx
const MAX_CLICKS = 5  // Change to any number (2-10 recommended)
```

### Add More Click States
In `EggInteraction.jsx`:
```jsx
useEffect(() => {
  if (clickCount === 1) {
    setInstructionText("Message after 1 click")
  } else if (clickCount === 2) {  // Add new state
    setInstructionText("Message after 2 clicks")
  } else if (clickCount === 3) {
    setInstructionText("Message after 3 clicks")
  }
  // etc...
}, [clickCount])
```

## 🎯 Different Occasions

### Birthday Version
1. Change flying text to "HAPPY BIRTHDAY"
2. Replace egg with gift box images
3. Change marquee: "Make a wish! • Have the best day! •"
4. Replace chick with party balloon
5. Change colors to vibrant (pink, yellow, blue)

### Graduation Version
1. Flying text: "YOU DID IT GRADUATE"
2. Replace egg with diploma scroll
3. Marquee: "Congratulations! • The future is yours! •"
4. Replace chick with graduation cap
5. Colors: Gold, white, and school colors

### Anniversary Version
1. Flying text: "HAPPY ANNIVERSARY"
2. Replace egg with heart
3. Marquee: "Forever and always • Love you more •"
4. Replace chick with couple photo
5. Colors: Rose pink and gold

### Achievement Version
1. Flying text: "YOU ARE AMAZING"
2. Replace egg with trophy
3. Marquee: "Hard work pays off! • Keep going! •"
4. Replace chick with star
5. Colors: Gold and blue

## 🌐 Add More Languages

### Multi-language Support (Simple)

In `App.jsx`, add:
```jsx
const messages = {
  en: {
    instruction: "Tap the egg to de-stress...",
    footer: "You're going to crush it!"
  },
  es: {
    instruction: "Toca el huevo para relajarte...",
    footer: "¡Vas a triunfar!"
  },
  // Add more languages
}

const [language, setLanguage] = useState('en')
```

## 🎪 Add Your Own Features

### Add a Reset Button
In `App.jsx`:
```jsx
const resetGame = () => {
  setClickCount(0)
  setIsCracked(false)
  setShowFlyingText(false)
  setShowMarquee(false)
  setShowChick(false)
}

// In return:
<button onClick={resetGame} className="btn-primary">
  Start Over
</button>
```

### Add More Decoration Elements
In `FloatingDecorations.jsx`, add to the array:
```jsx
{ emoji: '🌟', top: '30%', left: '50%', duration: 20, delay: 0, scale: 1 },
```

### Add Your Name/Watermark
In `App.jsx`, add at the bottom:
```jsx
<div className="absolute bottom-2 right-2 text-xs text-gray-400">
  Made with ❤️ by YourName
</div>
```

## 💡 Pro Tips

1. **Test on Mobile**: Always test your changes on a phone!
2. **Keep It Simple**: Less is often more with kawaii design
3. **Consistent Colors**: Stick to 3-4 main colors
4. **Readable Text**: Ensure good contrast for text
5. **Performance**: Keep images under 500KB each
6. **Backup**: Save your original files before editing!

## 🆘 Need Help?

Common issues and solutions:

**Images not showing?**
- Check file paths start with `/assets/images/`
- Verify files are in `public/assets/images/`

**Colors look wrong?**
- Run `npm run dev` to rebuild with new Tailwind classes
- Check for typos in color names

**Animation not working?**
- Check console for errors (F12 in browser)
- Verify Framer Motion syntax

---

Have fun customizing! 🎨✨
