import { motion } from 'framer-motion'

const FloatingDecorations = () => {
  const decorations = [
    { emoji: '✨', top: '10%', left: '8%', duration: 15, delay: 0, scale: 1 },
    { emoji: '❤️', top: '75%', left: '12%', duration: 20, delay: 2, scale: 0.8 },
    { emoji: '🥚', top: '40%', left: '88%', duration: 25, delay: 1, scale: 1 },
    { emoji: '🍀', top: '15%', left: '80%', duration: 18, delay: 3, scale: 0.9 },
    { emoji: '☁️', top: '65%', left: '85%', duration: 22, delay: 1.5, scale: 1.2 },
    { emoji: '✨', top: '50%', left: '5%', duration: 30, delay: 4, scale: 0.9 },
  ]
  
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {decorations.map((deco, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl sm:text-5xl opacity-50 select-none"
          style={{
            top: deco.top,
            left: deco.left,
            scale: deco.scale,
            filter: 'blur(1px)',
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: deco.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: deco.delay,
          }}
        >
          {deco.emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingDecorations
