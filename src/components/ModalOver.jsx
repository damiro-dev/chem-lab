import { useEffect, useState } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { useGame, useGameUpdate } from '../context/GameProvider';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useLocalStorage } from '../context/LocalStorageProvider';
import { motion, AnimatePresence } from 'framer-motion';
import referenceData from '../data/reference';
import cn from '../lib/tailwindMerge';
import Badge from '../assets/badge';
import getBadge from '../lib/getBadge';
import getColor from '../lib/getColor';
import ItemCard from '../assets/ItemCard';

export default function ModalOver() {
  const navUpdate = useNavigationUpdate();
  const { items, numItems, name, itemFound, level, score, revealItems } = useGame();
  const { setRevealItems } = useGameUpdate();
  const { addLabsGameItem } = useLocalStorage();
  const [animate, setAnimate] = useState(false);

  // Function to add a new listing
  const handleAddListing = () => {
    const newListing = {
      name: name,
      score: score,
      level: level,
      timestamp: new Date().toLocaleString(),
    };
    addLabsGameItem(newListing);
  };

  // ON LOAD
  useEffect(() => {
    handleAddListing();
    setRevealItems(false);
    setAnimate(true);
  }, []);

  const handleExit = () => {
    setAnimate(false);
    setTimeout(() => {
      navUpdate('home');
    }, 320);
  };

  const renderItem = (item) => {
    const ref = referenceData.find((refData) => refData.reference === item.reference);
    if (!ref) return null;
    return <ItemCard key={item.id} item={item} reference={ref} length={items.length} />;
  };

  return (
    <div className='max-h-screen -my-10 pt-28 pb-10 overflow-scroll'>
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
                <Badge
                  color={getColor(level)}
                  stars={level % 5 === 0 ? 4 : (level % 5) - 1}
                  icon={level - 1}
                  text={getBadge(level)}
                />
              </motion.div>
            </div>

            {/* STATS */}
            <div className='flex flex-col gap-1 pb-4'>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className='mx-auto text-3xl text-center uppercase tracking-widest font-semibold drop-shadow-md'
              >
                Game Over
              </motion.span>
              <span className='mx-auto text-sm text-center uppercase tracking-widest font-semibold drop-shadow-md'>
                Time is up! Found {numItems - itemFound} of {numItems} {numItems === 1 ? 'item' : 'items'}
              </span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className={cn(
                  score <= 0 && 'hidden',
                  'mx-auto text-sm text-center uppercase tracking-widest font-semibold opacity-70 drop-shadow-md'
                )}
              >
                Congrats {name} for reaching level {level} ({score}0 POINTS)
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
                    {renderItem(item)}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* EXIT BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1, ease: 'easeOut' }}
              onClick={handleExit}
              className='flex mx-auto rounded-full scale-75 md:scale-100 items-center justify-center cursor-pointer'
            >
              <span className='backdrop-blur-sm bg-black/70 px-8 py-4 pr-16 tracking-[0.3em] rounded-full shadow-md'>
                EXIT
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
