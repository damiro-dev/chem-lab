import { useEffect } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { FaCheckCircle } from 'react-icons/fa';
import { useGame, useGameUpdate } from '../context/GameProvider';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useLocalStorage } from '../context/LocalStorageProvider';
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
  }, []);

  const handleExit = () => {
    navUpdate('home');
  };

  const renderItem = (item) => {
    const ref = referenceData.find((refData) => refData.reference === item.reference);
    if (!ref) return null;
    return <ItemCard key={item.id} item={item} reference={ref} length={items.length} />;
  };

  return (
    <div className='max-h-screen -my-10 pt-28 pb-10 overflow-scroll'>
      <div className='flex flex-col gap-4'>
        {/* TITLE */}
        <div className='flex flex-col items-center -mb-4 md:mb-4 scale-75 md:scale-100'>
          <Badge
            color={getColor(level)}
            stars={level % 5 === 0 ? 4 : (level % 5) - 1}
            icon={level - 1}
            text={getBadge(level)}
          />
        </div>

        {/* STATS */}
        <div className='flex flex-col gap-1 pb-4'>
          <span className='mx-auto text-3xl text-center uppercase tracking-widest font-semibold drop-shadow-md'>
            Game Over
          </span>
          <span className='mx-auto text-sm text-center uppercase tracking-widest font-semibold drop-shadow-md'>
            Time is up! Found {numItems - itemFound} of {numItems} {numItems === 1 ? 'item' : 'items'}
          </span>
          <span
            className={cn(
              score <= 0 && 'hidden',
              'mx-auto text-sm text-center uppercase tracking-widest font-semibold opacity-70 drop-shadow-md'
            )}
          >
            Congrats {name} for reaching level {level} ({score}0 POINTS)
          </span>
        </div>

        {/* ITEMS */}
        <div className='overflow-scroll pb-6'>
          <div
            className={cn(
              // hide to use for development purposes: mapping of items
              'flex gap-3 mx-auto',
              items.length < 3 ? 'flex-col max-w-[400px]' : 'flex-row w-4xl'
            )}
          >
            {items.map((item) => renderItem(item))}
            {console.log(items)}
          </div>
        </div>

        {/* EXIT BUTTON */}
        <div
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
        </div>
      </div>
    </div>
  );
}
