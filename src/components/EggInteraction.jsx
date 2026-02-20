import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const EggInteraction = ({ clickCount, isCracked, onEggClick }) => {
  const [isShaking, setIsShaking] = useState(false)
  const [instructionText, setInstructionText] = useState("Tap the egg to de-stress...")
  
  // Update instruction text based on click count
  useEffect(() => {
    if (clickCount === 1) {
      setInstructionText("Hey! Be gentle! 🥚")
    } else if (clickCount === 3) {
      setInstructionText("Stop! It's gonna break! 😱")
    } else if (clickCount >= 5) {
      setInstructionText("")
    }
  }, [clickCount])
  
  // Determine egg image based on state
  const getEggImage = () => {
    if (isCracked) return '/assets/images/egg-shell.png'
    if (clickCount >= 3) return '/assets/images/egg-crack-2.png'
    if (clickCount >= 1) return '/assets/images/egg-crack-1.png'
    return '/assets/images/egg-whole.png'
  }
  
  const handleClick = () => {
    if (!isCracked) {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 400)
    }
    onEggClick()
  }
  
  return (
    <div className="relative z-40 flex flex-col items-center">
      {/* Instruction text */}
      <AnimatePresence mode="wait">
        {instructionText && !isCracked && (
          <motion.div
            key={instructionText}
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className="mb-6 sm:mb-8"
          >
            <div className="glass-strong px-6 py-3 sm:px-8 sm:py-4 rounded-4xl shadow-marshmallow">
              <h2 className="text-xl sm:text-2xl font-quicksand font-bold text-lavender-400 text-kawaii">
                {instructionText}
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Egg wrapper */}
      <div className="relative w-64 h-72 sm:w-80 sm:h-96 flex items-center justify-center">
        {/* Egg image */}
        <motion.img
          src={getEggImage()}
          alt="Interactive Egg"
          onClick={handleClick}
          className={`
            w-48 sm:w-64 max-w-full cursor-pointer select-none
            ${isShaking ? 'animate-shake' : ''}
            ${!isCracked ? 'hover:scale-105 active:scale-95' : ''}
            transition-transform duration-200
          `}
          style={{
            filter: 'drop-shadow(0 15px 25px rgba(224, 215, 255, 0.3))',
          }}
          animate={{
            scale: isCracked ? [1, 1.1, 0.95] : [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: isCracked ? 0 : Infinity,
            ease: "easeInOut"
          }}
          whileHover={!isCracked ? { scale: 1.05 } : {}}
          whileTap={!isCracked ? { scale: 0.95 } : {}}
        />
        
        {/* Shadow */}
        <motion.div
          className="absolute bottom-8 sm:bottom-12 w-28 sm:w-32 h-4 bg-lavender-200/30 rounded-full blur-md"
          animate={{
            scale: isCracked ? 0 : [1, 1.1, 1],
            opacity: isCracked ? 0 : [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: isCracked ? 0 : Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  )
}

export default EggInteraction
