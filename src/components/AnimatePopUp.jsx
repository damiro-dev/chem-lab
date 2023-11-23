import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimateChar } from '../context/AnimateCharProvider';
import randomBetween from '../lib/randomBetween';

export default function AnimatePopUp({ children }) {
  const animateChar = useAnimateChar();
  const windowWidth = window.innerWidth - 200;
  const windowHeight = window.innerHeight;
  const leftLimit = windowWidth / 2 - 200;
  const rightLimit = windowWidth / 2 + 200;

  const [x, setX] = useState(randomBetween(0, leftLimit));
  const [y, setY] = useState(windowHeight + 100);
  const [delay, setDelay] = useState(0.5);

  const getNewValues = () => {
    setX(randomBetween(0, windowWidth));
    setY(randomBetween(windowHeight - 340, windowHeight - 200));
    setDelay(Math.floor(randomBetween(5, 60)) * 0.1);
    console.log(x, y, delay);
  };

  return (
    <motion.div
      initial={{ x: 0, y: windowHeight + 100 }}
      animate={{ x: [x], y: [windowHeight + 100, windowHeight + 100, y] }}
      transition={{
        duration: 0.7,
        delay: delay,
        times: [0, 0.05, 0.6],
        repeat: 1,
        repeatType: 'reverse',
        ease: 'easeOut',
      }}
      onAnimationComplete={() => getNewValues()}
      className='absolute origin-top-left'
      style={{ x: x, y: y }}
    >
      <AnimatePresence>
        {animateChar && (
          <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 200 }}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
