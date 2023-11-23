import { useEffect, useState } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useGame, useGameUpdate } from '../context/GameProvider';
import { useTimer, useTimerUpdate } from '../context/TimerProvider';
import { motion, AnimatePresence } from 'framer-motion';
import itemsData from '../data/items';
import referenceData from '../data/reference';
import cn from '../lib/tailwindMerge';
import getColor from '../lib/getColor';
import Badge from '../assets/badge';
import ItemCard from '../assets/ItemCard';

export default function Modallevelup() {
  const { name, scene, items, level, levelTime, numItems } = useGame();
  const { setInGame, setRevealItems, setItems } = useGameUpdate();
  const { setTime, setInitialTime } = useTimerUpdate();
  const { startTimer } = useTimer();
  const [animate, setAnimate] = useState(false);
  const setContent = useNavigationUpdate();

  // ON LOAD
  useEffect(() => {
    setInitialTime(levelTime);
    setTime(levelTime);
    setRevealItems(false);
    setItems(itemsData[scene]);
    setAnimate(true);
  }, []);

  const handlePlay = () => {
    setAnimate(false);
    setTimeout(() => {
      setContent('game');
      startTimer();
      setInGame(true);
    }, 320);
  };

  const renderItem = (item, index) => {
    const ref = referenceData.find((refData) => refData.reference === item.reference);
    if (!ref) return null;
    return <ItemCard key={index} index={index} reference={ref} item={item} />;
  };

  return (
    <div className='max-h-screen -my-10 py-10 overflow-scroll'>
      <AnimatePresence>
        {animate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='flex flex-col gap-4'
          >
            {/* TITLE */}
            <div className='flex flex-col items-center -mb-4 md:mb-4 scale-75 md:scale-100'>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Badge color={getColor(level)} stars={level % 5 === 0 ? 4 : (level % 5) - 1} icon={level} />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                style={{ color: getColor(level) }}
                className='bg-black/70 uppercase text-sm text-center font-semibold tracking-[8px] px-6 py-2 pl-10 -mt-[46px] rounded-full drop-shadow-md'
              >
                Level {level}
              </motion.span>
            </div>

            {/* STATS */}
            <div className='flex flex-col gap-1 pb-4'>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className='mx-auto text-3xl text-center uppercase tracking-widest font-semibold drop-shadow-md'
              >
                Ready {name}!
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className='mx-auto text-sm text-center uppercase tracking-widest font-semibold drop-shadow-md'
              >
                find {numItems} {numItems > 1 ? 'items' : 'item'} in {levelTime} seconds
              </motion.span>
            </div>

            {/* ITEMS */}
            <div className='overflow-scroll pb-6'>
              <div
                className={cn(
                  // hide to use for development purposes: mapping of items
                  'flex gap-3 mx-auto',
                  items.length < 3 ? 'flex-col max-w-[580px]' : 'flex-row w-4xl'
                )}
              >
                {items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={index}
                    className={cn(
                      'min-w-[130px] w-full min-h-full flex p-4 rounded-2xl backdrop-blur-sm shadow-md bg-black/40',
                      items.length < 3 ? 'flex-col gap-3 md:flex-row md:gap-4' : 'flex-col gap-3'
                    )}
                  >
                    {renderItem(item, index)}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* GAME ON BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1, ease: 'easeOut' }}
              onClick={handlePlay}
              className='flex mx-auto rounded-full scale-75 md:scale-100 items-center justify-center cursor-pointer'
            >
              <span className='backdrop-blur-sm bg-black/70 px-8 py-4 pr-16 tracking-[0.3em] rounded-full shadow-md'>
                GAME ON!
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
