import { useEffect } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { useGame, useGameUpdate } from '../context/GameProvider';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useTimer, useTimerUpdate } from '../context/TimerProvider';
import itemsData from '../data/items';
import cn from '../lib/tailwindMerge';

export default function Modallevelup() {
  const { items, level } = useGame();
  const { setLevel, setScene, setNumItems, setInGame, setRandomItems, setRevealItems } = useGameUpdate();
  const { startTimer, initialTime } = useTimer();
  const { setTime } = useTimerUpdate();
  const setContent = useNavigationUpdate();

  // ON LOAD
  useEffect(() => {
    setRevealItems(false);
    setNumItems(2);
    setScene('yard');
    setRandomItems(itemsData);
    setLevel((prev) => prev + 1);
    setTime(initialTime);
  }, []);

  const handlePlay = () => {
    setContent('game');
    setInGame(true);
    startTimer();
    console.log('GAME ON!');
  };

  return (
    <>
      <div className={cn('rounded-lg backdrop-blur-sm bg-black/40 px-6 py-10 flex flex-col gap-4')}>
        <h1 className='text-3xl font-bold'>Level {level}</h1>
        <p>Show next level items here</p>
        {items.map((item) => (
          <span key={item.id} className={cn('whitespace-nowrap', item.tagged && 'line-through opacity-40')}>
            {item.name}
          </span>
        ))}
      </div>
      <div onClick={handlePlay} className='absolute flex items-center -mt-5 right-12 cursor-pointer'>
        <span className='backdrop-blur-sm bg-black/70 px-6 py-2 pr-14 rounded-full'>Game on!</span>
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
