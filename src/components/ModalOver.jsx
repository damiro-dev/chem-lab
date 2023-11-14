import { useEffect } from 'react';
import { useGame } from '../context/GameProvider';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { PiPlayFill } from 'react-icons/Pi';
import { useLocalStorage } from '../context/LocalStorageProvider';
import getBadge from '../lib/getBadge';
import cn from '../lib/tailwindMerge';

export default function ModalOver() {
  const navUpdate = useNavigationUpdate();
  const { items, numItems, name, itemFound, level, score } = useGame();
  const { addLabsGameItem } = useLocalStorage();

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
    <>
      {/* CONTENT */}
      <div className={cn('rounded-lg backdrop-blur-sm bg-black/40 px-6 py-10 flex flex-col gap-4')}>
        <h1 className='text-3xl font-bold'>Game Over {name}</h1>
        <p>
          Time is up! You only found {numItems - itemFound} of {numItems} {numItems === 1 ? 'item' : 'items'}.
        </p>
        {items.map((item) => (
          <span key={item.id} className={cn('whitespace-nowrap', item.tagged && 'line-through opacity-40')}>
            {item.name}
          </span>
        ))}
        <p>Congrats for reaching level {level}!</p>
        <p>
          Score: {score}0, Badge: {getBadge(score)}
        </p>
      </div>

      {/* EXIT BUTTON */}
      <div onClick={handleExit} className='absolute flex items-center -mt-5 right-12 cursor-pointer'>
        <span className='backdrop-blur-sm bg-black/70 px-6 py-2 pr-14 rounded-full'>EXIT</span>
        <div
          className={cn(
            'z-10 w-8 aspect-square flex items-center justify-center rounded-full -ml-9',
            'bg-green-800 hover:bg-green-600'
          )}
        >
          <PiPlayFill />
        </div>
      </div>
    </>
  );
}
