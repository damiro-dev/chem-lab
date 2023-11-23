import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useLocalStorage } from '../context/LocalStorageProvider';
import cn from '../lib/tailwindMerge';
import Logo from '../assets/Logo';

export default function ModalAbout() {
  const setPage = useNavigationUpdate();
  const { resetLabsGame } = useLocalStorage();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const gotoPage = (page) => {
    setAnimate(false);
    setTimeout(() => {
      setPage(page);
    }, 720);
  };

  const handleReset = () => {
    resetLabsGame();
  };

  return (
    <AnimatePresence>
      {animate && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className='max-h-screen -my-10 py-10 overflow-scroll'
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className='flex flex-col gap-2 items-center justify-center mx-auto my-10 scale-75 md:scale-100'
          >
            <Logo orientation='horizontal' className={'drop-shadow-md'} />
            <h2 className='text-xl text-white font-semibold tracking-[8px] -mr-4 drop-shadow-md'>ABOUT</h2>
          </motion.div>

          <div className='rounded-2xl backdrop-blur-sm bg-black/40 px-8 md:px-20 py-8 md:py-20 flex flex-col gap-4 text-sm md:text-md'>
            <motion.div
              initial={{ opacity: 0, top: -50 }}
              animate={{ opacity: 1, top: -16 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className='absolute z-10 flex gap-3 -top-4 left-1/2 -translate-x-1/2'
            >
              <div
                onClick={() => gotoPage('home')}
                className='font-semibold uppercase text-[12px] tracking-[4px] bg-black/70 hover:bg-black/60 pl-6 pr-4 py-2 rounded-full cursor-pointer shadow-md'
              >
                PLAY
              </div>
              <div
                onClick={() => gotoPage('highscore')}
                className='font-semibold uppercase text-[12px] tracking-[4px] bg-black/70 hover:bg-black/60 pl-6 pr-4 py-2 rounded-full cursor-pointer shadow-md'
              >
                LEADERBOARD
              </div>
            </motion.div>

            <p>
              Interactive and educational game designed to enhance laboratory skills and familiarity with laboratory
              apparatuses, materials, and equipment. The player will embark on a learning journey where they engage in
              memory challenge and interactive hidden-game adeventure on a laboratory environment.
            </p>
            <p>
              The idea is to embed a mini game into computers at school that can be played quickly, which is fun and,
              challenging and at the same time become a learning opportunity to anyone who plays it.
            </p>
            <div className='flex flex-row gap-4'>
              <span className='w-8 aspect-square bg-black/80 rounded-full'></span>
              <span className='w-8 aspect-square bg-black/80 rounded-full'></span>
              <span onClick={handleReset} className='w-8 aspect-square bg-black/80 rounded-full'></span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
