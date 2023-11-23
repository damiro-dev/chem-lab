import { motion } from 'framer-motion';
import cn from '../lib/tailwindMerge';

export default function AnimateSlide({ children, side, index }) {
  const windowWidth = window.innerWidth;
  const leftLimit = windowWidth / 6;
  const rightLimit = windowWidth - windowWidth / 6;

  return (
    <motion.div
      initial={{ translateX: side === 'left' ? -240 : window.innerWidth }}
      animate={{ translateX: side === 'left' ? leftLimit - 120 : rightLimit - 120 }}
      transition={{ delay: index * 0.3, duration: 0.4, ease: 'easeOut' }}
      className='absolute -bottom-20 lg:-bottom-10'
    >
      {children}
    </motion.div>
  );
}
