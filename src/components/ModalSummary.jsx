import { useEffect, useState } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useGame, useGameUpdate } from '../context/GameProvider';
import { useLocalStorage } from '../context/LocalStorageProvider';
import { motion, AnimatePresence } from 'framer-motion';
import comicsData from '../data/comics';
import referenceData from '../data/reference';
import cn from '../lib/tailwindMerge';
import Badge from '../assets/badge';
import getColor from '../lib/getColor';
import getBadge from '../lib/getBadge';
import ItemCard from '../assets/ItemCard';

export default function ModalSummary() {
  const { name, level, items, score } = useGame();
  const { setLevel } = useGameUpdate();
  const { labsGameData } = useLocalStorage();
  const [animate, setAnimate] = useState(false);
  const navUpdate = useNavigationUpdate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handlePlay = () => {
    // Lookup in advance if there is a comic in the next level (level + 1)
    const peekComic = comicsData.find((comicData) => comicData.level === level + 1);
    setAnimate(false);
    setTimeout(() => {
      setLevel(level + 1);
      peekComic ? navUpdate('comic') : navUpdate('levelup');
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
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Badge
                  color={getColor(level)}
                  stars={level % 5 === 0 ? 5 : level % 5}
                  icon={level}
                  text={getBadge(level)}
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                style={{ color: getColor(level) }}
                className='hidden bg-black/70 uppercase text-sm text-center font-semibold tracking-[8px] px-6 py-2 pl-10 -mt-[46px] rounded-full drop-shadow-md'
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
                Good Work {name}!
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className='mx-auto text-sm text-center uppercase tracking-widest font-semibold drop-shadow-md'
              >
                Level {level} Cleared: {score}0 Points
                {/* Got {items.length - itemFound + 1} of {items.length} {items.length === 1 ? 'item' : 'items'} */}
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

            {/* CONTINUE BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1, ease: 'easeOut' }}
              onClick={handlePlay}
              className='flex mx-auto rounded-full scale-75 md:scale-100 items-center justify-center cursor-pointer'
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
