import { useState, useEffect } from 'react';
import { useGame, useGameUpdate } from '../context/GameProvider';
import { useTimer, useTimerUpdate } from '../context/TimerProvider';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { PiPlayFill } from 'react-icons/Pi';
import { FaCircleChevronUp } from 'react-icons/fa6';
import cn from '../lib/tailwindMerge';
import referenceData from '../data/reference';

export default function GamePanel() {
  const { inGame, items, revealItems, level } = useGame();
  const { setRevealItems, setInGame } = useGameUpdate();
  const { time, isRunning, startTimer, stopTimer, initialTime } = useTimer();
  const { setIsCountdown, setTime } = useTimerUpdate();
  const [hideList, setHideList] = useState(false);
  const navUpdate = useNavigationUpdate();

  // ON LOAD
  useEffect(() => {
    setTime(initialTime);
    setIsCountdown(true);
  }, []);

  // ON GAMEOVER
  useEffect(() => {
    if (inGame && time === 0) {
      navUpdate('over');
      setRevealItems(true);
      setInGame(false);
    }
  }, [time, inGame, revealItems]);

  // ON PAUSE
  const toggleTimer = () => {
    if (inGame && isRunning) {
      stopTimer();
      navUpdate('paused');
    } else {
      startTimer();
      navUpdate('game');
    }
  };

  const renderItem = (item) => {
    const ref = referenceData.find((refData) => refData.reference === item.reference);
    if (!ref) return null;

    return (
      <span key={item.id} className={cn('whitespace-nowrap', item.tagged && 'line-through opacity-40')}>
        {ref.name}
      </span>
    );
  };

  return (
    <div className={cn(!isRunning && 'hidden')}>
      <section className={cn(!inGame && 'hidden')}>
        {/* TIMER */}
        <div
          className={cn(
            'absolute z-20 left-1/2 -translate-x-1/2 top-7 scale-75 whitespace-nowrap',
            'font-semibold uppercase text-[12px] tracking-[4px] bg-black/70 hover:bg-black/60 pl-6 pr-4 py-2 rounded-full cursor-pointer shadow-md flex flex-row gap-20'
          )}
        >
          <span className='w-[100px] text-center'>LEVEL {level}</span>
          <span className='w-[100px] text-center'>{isRunning ? 'SEC MORE' : 'PAUSED'}</span>
        </div>
        <div
          onClick={toggleTimer}
          className={cn(
            'absolute z-20 left-1/2 -translate-x-1/2 top-4',
            'flex w-14 aspect-square items-center justify-center rounded-full cursor-pointer',
            'font-semibold text-2xl backdrop-blur-sm bg-black/40',
            time <= 10 ? 'text-red-500' : 'text-white'
          )}
        >
          {isRunning ? <div>{time}</div> : <PiPlayFill />}
        </div>
      </section>

      {/* MISSING LIST */}
      <section
        className={cn(
          inGame ? 'flex' : 'hidden',
          'absolute z-20 bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black/40 px-6 py-3 mb-2 rounded-xl md:rounded-full',
          'flex-row items-center justify-center'
        )}
      >
        <span
          onClick={() => setHideList(!hideList)}
          className={cn(
            'absolute z-20 left-1/2 -translate-x-1/2 -top-4 whitespace-nowrap scale-75',
            'font-semibold uppercase text-[12px] tracking-[4px] bg-black/70 hover:bg-black/60 pl-6 pr-10 py-2 rounded-full cursor-pointer shadow-md'
          )}
        >
          <span>Missing items</span>
          <FaCircleChevronUp
            className={cn(!hideList && 'rotate-180', 'absolute right-2.5 top-1/2 -translate-y-1/2 scale-[2]')}
          />
        </span>
        {!hideList && (
          <div className='flex flex-row flex-wrap leading-0 items-center justify-center py-1 px-4 gap-x-6 text-sm font-semibold uppercase tracking-wider'>
            {items.map((item) => renderItem(item))}
          </div>
        )}
      </section>
    </div>
  );
}
