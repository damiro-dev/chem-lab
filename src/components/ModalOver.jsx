import { useEffect } from 'react';
import { useGame } from '../context/GameProvider';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { PiPlayFill } from 'react-icons/Pi';
import { FaCheckCircle } from 'react-icons/fa';
import { useLocalStorage } from '../context/LocalStorageProvider';
import getBadge from '../lib/getBadge';
import getColor from '../lib/getColor';
import Badge from '../assets/badge';
import cn from '../lib/tailwindMerge';

export default function ModalOver() {
  const navUpdate = useNavigationUpdate();
  const { items, numItems, name, itemFound, level, score } = useGame();
  const { labsGameData, addLabsGameItem } = useLocalStorage();

  // Function to add a new listing
  const handleAddListing = () => {
    const newListing = {
      name: name,
      score: score,
      timestamp: new Date().toLocaleString(),
    };
    addLabsGameItem(newListing);
  };

  // ON LOAD
  useEffect(() => {
    handleAddListing();
  }, []);

  const handleExit = () => {
    navUpdate('home');
  };

  return (
    <div className='max-h-screen -my-10 py-20 overflow-scroll'>
      <div className='rounded-2xl backdrop-blur-sm bg-black/40 px-4 md:px-8 pt-28 pb-12 flex flex-col gap-4 shadow-md'>
        {/* TITLE */}
        <div className='absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center -mb-4 md:mb-4 scale-75 md:scale-100'>
          <Badge color={getColor(level)} stars={level % 5 === 0 ? 5 : level % 5} icon={level} text={getBadge(level)} />
        </div>

        <div className='flex flex-col gap-1 pb-4'>
          <span className='mx-auto text-3xl text-center uppercase tracking-widest font-semibold drop-shadow-md'>
            Game Over
          </span>
          <span className='mx-auto text-sm text-center uppercase tracking-widest font-semibold drop-shadow-md'>
            Time is up! You only found {numItems - itemFound} of {numItems} {numItems === 1 ? 'item' : 'items'}
          </span>
          <span className='mx-auto text-sm text-center uppercase tracking-widest font-semibold drop-shadow-md'>
            Congrats for reaching level {level} ({score}0)
          </span>
        </div>

        {/* ITEMS */}
        <div className='overflow-scroll pb-4'>
          <div
            className={cn(
              // hide to use for development purposes: mapping of items
              'flex gap-3 mx-auto',
              items.length < 3 ? 'flex-col max-w-[400px]' : 'flex-row max-w-4xl'
            )}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className={cn(
                  'min-w-[140px] flex p-4 rounded-2xl backdrop-blur-sm bg-black/40',
                  items.length < 3 ? 'flex-row gap-4' : 'flex-col gap-3'
                )}
              >
                <div className={cn(!item.tagged && 'hidden', 'absolute top-6 left-6')}>
                  <FaCheckCircle size={32} />
                </div>
                <div className='min-h-[120px] w-full rounded-sm bg-white/30' />
                <div className='flex flex-col gap-2.5'>
                  <span className='uppercase tracking-wide text-sm font-semibold'>{item.name}</span>
                  <p className='text-sm opacity-70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EXIT BUTTON */}
        <div
          onClick={handleExit}
          className='absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer'
        >
          <span className='backdrop-blur-sm bg-black/70 px-8 py-4 pr-16 tracking-[0.3em] rounded-full'>EXIT</span>
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
