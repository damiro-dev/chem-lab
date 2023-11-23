import { motion, AnimatePresence } from 'framer-motion';
import { useAnimateChar } from '../context/AnimateCharProvider';
import cn from '../lib/tailwindMerge';

export default function AnimateSlide({ children, side, index, rotate }) {
  const animateChar = useAnimateChar();
  const windowWidth = window.innerWidth;
  const leftLimit = windowWidth / 6;
  const rightLimit = windowWidth - windowWidth / 6;

  return (
    <motion.div
      initial={{ translateX: side === 'left' ? -360 : window.innerWidth, rotate: rotate && '-180deg' }}
      animate={{ translateX: side === 'left' ? leftLimit - 170 : rightLimit - 170, rotate: rotate && '0deg' }}
      exit={{ translateX: side === 'left' ? -360 : window.innerWidth, rotate: rotate && '-180deg' }}
      transition={{ delay: index * 0.3, duration: 0.4, ease: 'easeOut' }}
      className='absolute -bottom-20 lg:-bottom-10'
    >
      <motion.div
        initial={{ rotate: rotate && '5deg' }}
        animate={{ rotate: rotate && '0deg' }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeOut' }}
        className={cn(rotate && 'origin-[50%_100%]')}
      >
        <AnimatePresence>
          {animateChar && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: side === 'left' ? -100 : 100 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
