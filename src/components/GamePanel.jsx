import { useEffect } from 'react';
import { useGame, useGameUpdate } from '../context/GameProvider';
import { useTimer, useTimerUpdate } from '../context/TimerProvider';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { PiPlayFill } from 'react-icons/Pi';
import cn from '../lib/tailwindMerge';

export default function GamePanel() {
  const { inGame, items, revealItems } = useGame();
  const { setRevealItems, setInGame } = useGameUpdate();
  const { time, isRunning, startTimer, stopTimer, initialTime } = useTimer();
  const { setIsCountdown, setTime } = useTimerUpdate();
  const navUpdate = useNavigationUpdate();

  // ON LOAD
  useEffect(() => {
    setTime(initialTime);
    setIsCountdown(true);
  }, []);

  // ON GAMEOVER
  useEffect(() => {
    if (inGame && time === 0) {
      console.log('gp GAMEOVER');
      navUpdate('over');
      setRevealItems(true);
      setInGame(false);
    }
  }, [time, inGame, revealItems]);

  // ON PAUSE
  const toggleTimer = () => {
    if (inGame && isRunning) {
      console.log('gp PAUSED');
      stopTimer();
      navUpdate('paused');
    } else {
      console.log('gp RESUMED');
      startTimer();
      navUpdate('game');
    }
  };

  return (
    <div className={cn(!isRunning && 'hidden')}>
      <section className={cn(!inGame && 'hidden')}>
        {/* TIMER */}
        <div
          onClick={toggleTimer}
          className={cn(
            'absolute z-20 left-1/2 -translate-x-1/2 top-4',
            'flex w-12 aspect-square items-center justify-center rounded-full cursor-pointer',
            'font-semibold text-2xl text-white backdrop-blur-sm bg-black/40'
          )}
        >
          {isRunning ? time : <PiPlayFill />}
        </div>
        <span
          className={cn(
            'absolute z-20 left-1/2 -translate-x-1/2 top-14 whitespace-nowrap',
            'font-semibold uppercase text-[12px] tracking-[4px] bg-black/70 hover:bg-black/60 pl-6 pr-4 py-2 rounded-full cursor-pointer shadow-md'
          )}
        >
          {isRunning ? 'SEC REMAINING' : 'PAUSED'}
        </span>
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
          className={cn(
            'absolute z-20 left-1/2 -translate-x-1/2 -top-4 whitespace-nowrap',
            'font-semibold uppercase text-[12px] tracking-[4px] bg-black/70 hover:bg-black/60 pl-6 pr-4 py-2 rounded-full cursor-pointer shadow-md'
          )}
        >
          {'Missing Equipment'}
        </span>

        <div className='flex flex-row flex-wrap leading-0 items-center justify-center py-2 px-6 gap-x-6 font-semibold uppercase tracking-wider'>
          {items.map((item) => (
            <span key={item.id} className={cn('whitespace-nowrap', item.tagged && 'line-through opacity-40')}>
              {item.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
