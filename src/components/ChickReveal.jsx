import { motion } from 'framer-motion'

const ChickReveal = () => {
  return (
    <motion.div
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="absolute top-[38%] sm:top-[40%] left-1/2 -translate-x-1/2 z-[80] w-64 sm:w-80"
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Flying chick */}
        <motion.img
          src="/assets/images/chick-flying.png"
          alt="Flying Chick"
          className="w-28 sm:w-36 mx-auto block select-none"
          animate={{
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 0.12,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            filter: 'drop-shadow(0 10px 20px rgba(224, 215, 255, 0.3))'
          }}
        />
        
        {/* Photo frame */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 3 }}
          transition={{
            delay: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          className="
            relative -mt-4 mx-auto w-36 sm:w-44 h-36 sm:h-44
            bg-white p-2 sm:p-2.5 rounded-3xl
            shadow-marshmallow
          "
        >
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <img
              src="/assets/images/anusha-reveal.png"
              alt="Anusha"
              className="w-full h-full object-cover select-none"
            />
          </div>
          
          {/* Decorative tape effect */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-peach-200/60 rounded rotate-2" />
          <div className="absolute -bottom-2 left-1/4 w-12 h-6 bg-mint-200/60 rounded -rotate-3" />
        </motion.div>
        
        {/* Floating hearts */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -60],
              x: [0, (i - 1) * 20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeOut"
            }}
            className="absolute top-0 left-1/2 text-2xl"
          >
            ❤️
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default ChickReveal
