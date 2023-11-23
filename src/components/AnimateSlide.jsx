import { motion } from 'framer-motion';
import cn from '../lib/tailwindMerge';

export default function AnimateSlide({ children, side, index, rotate }) {
  const windowWidth = window.innerWidth;
  const leftLimit = windowWidth / 6;
  const rightLimit = windowWidth - windowWidth / 6;

  return (
    <motion.div
      initial={{ translateX: side === 'left' ? -240 : window.innerWidth, rotate: rotate && '-180deg' }}
      animate={{ translateX: side === 'left' ? leftLimit - 120 : rightLimit - 120, rotate: rotate && '0deg' }}
      transition={{ delay: index * 0.3, duration: 0.4, ease: 'easeOut' }}
      className='absolute -bottom-16 lg:-bottom-8'
    >
      {children}
    </motion.div>
  );
}
