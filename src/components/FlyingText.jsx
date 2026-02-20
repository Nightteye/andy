import { motion } from 'framer-motion'

const FlyingText = () => {
  const words = [
    { text: 'ALL', delay: 0, position: 'top-[10%] sm:top-[14%] left-[10%] sm:left-[15%] rotate-[-8deg] scale-90', sparkle: true },
    { text: 'THE', delay: 0.6, position: 'top-[5%] sm:top-[8%] left-1/2 -translate-x-1/2 rotate-0 scale-110', sparkle: false },
    { text: 'BEST', delay: 1.2, position: 'top-[10%] sm:top-[14%] right-[10%] sm:right-[15%] rotate-[8deg] scale-90', sparkle: true },
    { text: 'FOR', delay: 1.8, position: 'top-[18%] sm:top-[22%] left-[20%] sm:left-[25%] rotate-[-5deg] scale-85', sparkle: false },
    { text: 'MATHS', delay: 2.4, position: 'top-[18%] sm:top-[22%] right-[20%] sm:right-[25%] rotate-[5deg] scale-85', sparkle: false },
  ]
  
  return (
    <>
      {words.map((word, index) => (
        <motion.div
          key={index}
          initial={{ 
            opacity: 0, 
            scale: 0,
            y: 100,
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: word.delay,
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          className={`
            absolute ${word.position} z-[100]
            font-fredoka font-bold text-4xl sm:text-5xl md:text-6xl
            text-rose-300
            pointer-events-none
          `}
          style={{
            textShadow: '3px 3px 0px #fff, 0 0 20px rgba(255, 194, 209, 0.4)',
          }}
        >
          <span className="relative inline-block">
            {word.text}
            
            {/* Sparkles */}
            {word.sparkle && (
              <>
                <motion.span
                  className="absolute -top-2 -left-3 text-2xl"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✨
                </motion.span>
                <motion.span
                  className="absolute -bottom-1 -right-3 text-xl"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  ✨
                </motion.span>
              </>
            )}
          </span>
        </motion.div>
      ))}
    </>
  )
}

export default FlyingText
