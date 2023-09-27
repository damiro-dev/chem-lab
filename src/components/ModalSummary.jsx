import { PiPlayFill } from 'react-icons/Pi';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useGame, useGameUpdate } from '../context/GameProvider';
import getBadge from '../lib/getBadge';
import comicsData from '../data/comics';
import cn from '../lib/tailwindMerge';

export default function ModalSummary() {
  const { name, level, items, itemFound, score } = useGame();
  const { setLevel } = useGameUpdate();
  const navUpdate = useNavigationUpdate();

  const handlePlay = () => {
    // Lookup in advance if there is a comic in the next level (level + 1)
    const peekComic = comicsData.find((comicData) => comicData.level === level + 1);
    peekComic ? navUpdate('comic') : navUpdate('levelup');
    setLevel(level + 1);
  };

  return (
    <>
      {/* CONTENT */}
      <div className={cn('rounded-lg backdrop-blur-sm bg-black/40 px-6 py-10 flex flex-col gap-4')}>
        <h1 className='text-3xl font-bold'>Good Work {name}!</h1>
        <p>
          Level {level} complete! Got {items.length - itemFound + 1} of {items.length} items.
        </p>
        <p>
          Score: {score}0, Badge: {getBadge(score)}
        </p>
        {items.map((item) => (
          <span key={item.id} className={cn('whitespace-nowrap', item.tagged && 'line-through opacity-40')}>
            {item.name}
          </span>
        ))}
      </div>

      {/* EXIT BUTTON */}
      <div onClick={handlePlay} className='absolute flex items-center -mt-5 right-12 cursor-pointer'>
        <span className='backdrop-blur-sm bg-black/70 px-6 py-2 pr-14 rounded-full'>CONTINUE</span>
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
