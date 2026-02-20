import { motion } from 'framer-motion'
import './MarqueeMessage.css'

const MarqueeMessage = () => {
  const message = "Don't stress, do your best! • You are capable of amazing things • Good Luck Andyyy! • "
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1,
        type: "spring",
        stiffness: 100
      }}
      className="absolute top-[28%] sm:top-[32%] left-0 w-full z-[90] overflow-hidden"
    >
      <div className="glass-strong border-y-2 border-white/60 py-3 sm:py-4 flex items-center">
        <div className="marquee-track">
          <div className="marquee-content">
            {message}
          </div>
          <div className="marquee-content">
            {message}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MarqueeMessage
