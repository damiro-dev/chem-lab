import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import cn from '../lib/tailwindMerge';
import randomBetween from '../lib/randomBetween';

export default function AnimateJump({ children }) {
  const windowWidth = window.innerWidth - 200;
  const windowHeight = window.innerHeight;
  const leftLimit = windowWidth / 2 - 200;
  const rightLimit = windowWidth / 2 + 200;

  const [side, setSide] = useState('left');
  const [x, setX] = useState(randomBetween(0, leftLimit));
  const [y, setY] = useState(window.innerHeight);
  const [rotate, setRotate] = useState('0deg');

  const getNewValues = () => {
    const randomSide = randomBetween(0, 2) === 1 ? 'left' : 'right';
    const randomX = randomSide === 'left' ? randomBetween(0, leftLimit) : randomBetween(rightLimit, windowWidth);
    const randomY = randomBetween(0, (windowHeight / 3) * 2);
    const randomRotate = randomBetween(-45, 45);
    setSide(randomSide);
    setX(randomX);
    setY(randomY);
    setRotate(randomRotate + 'deg');
  };

  return (
    <motion.div
      initial={{ x: 0, y: windowHeight, rotate: '0deg' }}
      animate={{ x: [x], y: [windowHeight, windowHeight, y], rotate: [rotate] }}
      transition={{
        duration: (windowHeight - y) * 0.001, // 0.6
        delay: randomBetween(5, 30) * 0.1,
        times: [0, 0.05, 0.6],
        repeat: 1,
        repeatType: 'reverse',
        ease: 'easeOut',
      }}
      onAnimationComplete={() => getNewValues()}
      className={cn(side === 'left' && 'scale-x-[-100%]', 'absolute -translate-x-1/2 origin-center')}
      style={{ x: x, y: y }}
    >
      {children}
    </motion.div>
  );
}
