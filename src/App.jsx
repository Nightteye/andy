import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Sparkles, Heart, Egg, Clover, Cloud } from 'lucide-react'
import EggInteraction from './components/EggInteraction'
import FlyingText from './components/FlyingText'
import MarqueeMessage from './components/MarqueeMessage'
import ChickReveal from './components/ChickReveal'
import FloatingDecorations from './components/FloatingDecorations'

function App() {
  const [clickCount, setClickCount] = useState(0)
  const [isCracked, setIsCracked] = useState(false)
  const [showFlyingText, setShowFlyingText] = useState(false)
  const [showMarquee, setShowMarquee] = useState(false)
  const [showChick, setShowChick] = useState(false)
  const [musicStarted, setMusicStarted] = useState(false)
  
  // Audio refs
  const bgmRef = useRef(null)
  const crackSoundRef = useRef(null)
  const cheerSoundRef = useRef(null)
  
  const MAX_CLICKS = 5
  
  // Preload audio
  useEffect(() => {
    bgmRef.current = new Audio('/assets/audio/bgm.mp3')
    bgmRef.current.loop = true
    bgmRef.current.volume = 0.3
    
    crackSoundRef.current = new Audio('/assets/audio/crack.mp3')
    cheerSoundRef.current = new Audio('/assets/audio/cheer.mp3')
  }, [])
  
  const handleEggClick = () => {
    // Start background music on first interaction
    if (!musicStarted) {
      bgmRef.current?.play().catch(e => console.log("BGM autoplay prevented"))
      setMusicStarted(true)
    }
    
    if (isCracked) return
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
    
    const newCount = clickCount + 1
    setClickCount(newCount)
    
    // Play crack sound
    if (newCount === 1 || newCount === 3) {
      crackSoundRef.current?.play()
    }
    
    // Trigger finale
    if (newCount >= MAX_CLICKS) {
      setIsCracked(true)
      triggerFinale()
    }
  }
  
  const triggerFinale = () => {
    // Play cheer sound
    cheerSoundRef.current?.play()
    
    // Haptic pattern
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200])
    }
    
    // Initial confetti
    fireConfetti()
    
    // Sequence of reveals
    setTimeout(() => setShowFlyingText(true), 600)
    setTimeout(() => {
      fireConfetti()
      setShowMarquee(true)
    }, 3000)
    setTimeout(() => {
      setShowChick(true)
      fireConfetti()
    }, 3800)
  }
  
  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E0D7FF', '#FFDACE', '#D1F5E9', '#FFC2D1'],
      disableForReducedMotion: true,
      shapes: ['circle', 'square'],
      gravity: 0.8,
      scalar: 1.2,
    })
  }
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div 
          className="w-full h-full"
          style={{
            background: 'radial-gradient(transparent 60%, rgba(224, 215, 255, 0.2) 100%)'
          }}
        />
      </div>
      
      {/* Floating decorations */}
      <FloatingDecorations />
      
      {/* Bottom cloud decoration */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20">
        <svg 
          viewBox="0 0 1440 320" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="0.4" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      
      {/* Main content container */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4">
        
        {/* Flying text */}
        <AnimatePresence>
          {showFlyingText && <FlyingText />}
        </AnimatePresence>
        
        {/* Marquee */}
        <AnimatePresence>
          {showMarquee && <MarqueeMessage />}
        </AnimatePresence>
        
        {/* Egg interaction */}
        <EggInteraction 
          clickCount={clickCount}
          isCracked={isCracked}
          onEggClick={handleEggClick}
        />
        
        {/* Chick reveal */}
        <AnimatePresence>
          {showChick && <ChickReveal />}
        </AnimatePresence>
        
        {/* Footer message */}
        <AnimatePresence>
          {showChick && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-16 sm:bottom-20 z-50"
            >
              <div className="glass-strong px-8 py-4 rounded-5xl shadow-glow">
                <p className="text-lg sm:text-xl font-fredoka font-semibold text-lavender-500 text-kawaii">
                  You're going to crush it, Andyy! ❤️
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Sorry message (bottom left) */}
        <div className="absolute bottom-4 left-4 z-40">
          <div className="glass px-3 py-2 rounded-2xl text-xs sm:text-sm text-gray-600 italic font-quicksand">
            Sorry for using your photo without permission 😝😝
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
