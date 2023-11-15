import { useEffect } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useGame, useGameUpdate } from '../context/GameProvider';
import { useTimer, useTimerUpdate } from '../context/TimerProvider';
import cn from '../lib/tailwindMerge';
import Badge from '../assets/badge';
import itemsData from '../data/items';
import getColor from '../lib/getColor';

export default function Modallevelup() {
  const setContent = useNavigationUpdate();
  const { name, scene, items, level, levelTime, numItems } = useGame();
  const { setInGame, setRevealItems, setItems } = useGameUpdate();
  const { setTime, setInitialTime } = useTimerUpdate();
  const { startTimer } = useTimer();

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
          <Badge color={getColor(level)} stars={level % 5 === 0 ? 4 : (level % 5) - 1} icon={level - 1} />
          <span
            style={{ color: getColor(level) }}
            className='bg-black/70 uppercase text-sm text-center font-semibold tracking-[8px] px-6 py-2 pl-10 -mt-[46px] rounded-full drop-shadow-md'
          >
            Level {level}
          </span>
        </div>

        <div className='flex flex-col gap-1 pb-4'>
          <span className='mx-auto text-3xl text-center uppercase tracking-widest font-semibold drop-shadow-md'>
            Ready {name}!
          </span>
          <span className='mx-auto text-sm text-center uppercase tracking-widest font-semibold drop-shadow-md'>
            find {numItems} {numItems > 1 ? 'items' : 'item'} in {levelTime} seconds
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
                  'min-w-[130px] flex p-4 rounded-2xl backdrop-blur-sm bg-black/40',
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
