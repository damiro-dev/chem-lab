import { useEffect } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useGame, useGameUpdate } from '../context/GameProvider';
import { useTimer, useTimerUpdate } from '../context/TimerProvider';
import itemsData from '../data/items';
import cn from '../lib/tailwindMerge';
import Badge from '../assets/badge';
import comicsData from '../data/comics';

export default function Modallevelup() {
  const setContent = useNavigationUpdate();
  const { scene, items, level, levelTime, numItems } = useGame();
  const { setInGame, setRevealItems, setItems } = useGameUpdate();
  const { setTime, setInitialTime } = useTimerUpdate();
  const { startTimer } = useTimer();

  const comicData = comicsData.find((comicData) => comicData.level === level);
  if (!comicData) return <h1>Not Found</h1>;

  // ON LOAD
  useEffect(() => {
    setInitialTime(levelTime);
    setTime(levelTime);
    setRevealItems(false);
    setItems(itemsData[scene]);
  }, []);

  const handlePlay = () => {
    setContent('game');
    setInGame(true);
    startTimer();
  };

  return (
    <div className='max-h-screen -my-10 py-10 overflow-scroll'>
      <div className='flex flex-col gap-4'>
        {/* TITLE */}
        <div className='flex flex-col items-center -mb-4 md:mb-4 scale-75 md:scale-100'>
          <Badge color={'#7E7E7E'} stars={(level % 5) - 1} />
          <span
            style={{ color: '#7E7E7E' }}
            className='bg-black/70 uppercase text-sm text-center font-semibold tracking-[8px] px-6 py-2 pl-10 -mt-[46px] rounded-full drop-shadow-md'
          >
            Level {level}
          </span>
        </div>

        <span className='mx-auto text-sm text-center uppercase tracking-widest font-semibold'>
          find {numItems} {numItems > 1 ? 'items' : 'item'} in {levelTime} seconds
        </span>

        <div
          className={cn(
            'rounded-2xl backdrop-blur-sm bg-black/40 px-6 py-10 flex flex-col gap-4'
            // hide used for development purposes: mapping of items
            // 'hidden'
          )}
        >
          {items.map((item) => (
            <span key={item.id} className={cn('whitespace-nowrap', item.tagged && 'line-through opacity-40')}>
              {item.name}
            </span>
          ))}
        </div>

        {/* GAME ON BUTTON */}
        <div onClick={handlePlay} className='flex items-center justify-center cursor-pointer'>
          <span className='backdrop-blur-sm bg-black/70 px-8 py-4 pr-16 tracking-[0.3em] rounded-full'>GAME ON!</span>
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
