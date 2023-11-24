import { useState, useEffect } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { useGame } from '../context/GameProvider';
import { useTimer } from '../context/TimerProvider';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimateCharUpdate } from '../context/AnimateCharProvider';
import cn from '../lib/tailwindMerge';
import Badge from '../assets/badge';
import getColor from '../lib/getColor';
import getBadge from '../lib/getBadge';

export default function ModalPaused() {
  const res = window.innerHeight;
  const { name, inGame, level } = useGame();
  const { isRunning, startTimer, stopTimer } = useTimer();
  const [animate, setAnimate] = useState(false);
  const setPage = useNavigationUpdate();
  const setAnimateChar = useAnimateCharUpdate();

  useEffect(() => {
    setAnimate(true);
    setAnimateChar(true);
  }, []);

  // ON PAUSE
  const toggleTimer = () => {
    if (inGame && isRunning) {
      setAnimate(true);
      setAnimateChar(true);
      setTimeout(() => {
        stopTimer();
        setPage('paused');
      }, 320);
    } else {
      setAnimate(false);
      setAnimateChar(false);
      setTimeout(() => {
        startTimer();
        setPage('game');
      }, 320);
    }
  };

  return (
    <div className='max-h-screen -my-10 py-10 overflow-hide scrollbar-hide'>
      <AnimatePresence>
        {animate && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ scale: res < 800 && '75%' }} 
            className='flex flex-col gap-4'
          >
            {/* TITLE */}
            <div className='flex flex-col items-center mb-4 md:mb-10 scale-75 md:scale-100'>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Badge
                  color={getColor(level)}
                  stars={level % 5 === 0 ? 4 : (level % 5) - 1}
                  icon={level - 1}
                  text={getBadge(level)}
                />
              </motion.div>
            </div>

            {/* CONTENT */}
            <div className='rounded-2xl backdrop-blur-sm bg-black/40 px-8 md:px-20 py-20 flex flex-col gap-4 shadow-md'>
              <span
                style={{ color: getColor(level) }}
                className='absolute bg-black/70 uppercase text-sm text-center font-semibold tracking-[8px] px-6 py-2 pl-9 -top-4 left-1/2 -translate-x-1/2  rounded-full drop-shadow-md'
              >
                {name}
              </span>
              <span className='text-4xl md:text-6xl text-center font-bold uppercase tracking-widest opacity-30'>
                Game Paused
              </span>
            </div>

            {/* GAME ON BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1, ease: 'easeOut' }}
              onClick={toggleTimer}
              className='flex mx-auto -mt-11 rounded-full scale-75 md:scale-100 items-center justify-center cursor-pointer'
            >
              <span className='backdrop-blur-sm bg-black/70 px-8 py-4 pr-16 tracking-[0.3em] rounded-full shadow-md'>
                CONTINUE
              </span>
              <div
                className={cn(
                  'z-10 w-10 aspect-square flex items-center justify-center rounded-full -ml-12',
                  'bg-white/60 hover:bg-white/80'
                )}
              >
                <PiPlayFill className='text-black/70 scale-110' />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
