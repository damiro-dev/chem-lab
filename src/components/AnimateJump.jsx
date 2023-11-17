import { motion } from 'framer-motion';
import cn from '../lib/tailwindMerge';
import randomBetween from '../lib/randomBetween';
import { useEffect, useState } from 'react';

export default function AnimateJump({ children, bounds }) {
  const [side, setSide] = useState('left');

  const randomHeight = () => {
    return randomBetween(0, window.innerHeight / 2);
  };

  const randomSide = () => {
    return randomBetween(0, 2) === 0 ? 'left' : 'right';
  };

  useEffect(() => {
    setSide(randomSide());
  }, []);

  return (
    <motion.div
      initial={{ top: window.innerHeight }}
      animate={{ top: randomHeight() }}
      transition={{
        duration: 0.65,
        ease: 'easeOut',
        repeat: 1,
        delay: 0.5,
        repeatType: 'reverse',
      }}
      style={{ left: side === 'left' ? randomBetween(0, bounds.left) : randomBetween(bounds.right, window.innerWidth) }}
      className={cn(side === 'left' && 'scale-x-[-100%]', 'absolute -translate-x-1/2 origin-center')}
    >
      {children}
    </motion.div>
  );
}
