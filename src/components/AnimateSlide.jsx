import { motion } from 'framer-motion';
import cn from '../lib/tailwindMerge';

export default function AnimateSlide({ children, side, index, rotate }) {
  const windowWidth = window.innerWidth;
  const leftLimit = windowWidth / 6;
  const rightLimit = windowWidth - windowWidth / 6;

  return (
    <motion.div
      initial={{ translateX: side === 'left' ? -360 : window.innerWidth, rotate: rotate && '-180deg' }}
      animate={{ translateX: side === 'left' ? leftLimit - 170 : rightLimit - 170, rotate: rotate && '0deg' }}
      transition={{ delay: index * 0.3, duration: 0.4, ease: 'easeOut' }}
      className='absolute -bottom-20 lg:-bottom-10'
    >
      <motion.div
        initial={{ rotate: rotate && '5deg' }}
        animate={{ rotate: rotate && '0deg' }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeOut' }}
        className={cn(rotate && 'origin-[50%_100%]')}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
