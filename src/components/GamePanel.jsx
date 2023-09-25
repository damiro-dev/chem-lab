import { useEffect } from 'react';
import { useGame, useGameUpdate } from '../context/GameProvider';
import { useTimer, useTimerUpdate } from '../context/TimerProvider';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { PiPlayFill } from 'react-icons/Pi';
import cn from '../lib/tailwindMerge';

export default function GamePanel() {
  const { inGame, items, revealItems } = useGame();
  const { time, isRunning, startTimer, stopTimer, isCountdown, initialTime } = useTimer();
  const { setIsCountdown, setTime } = useTimerUpdate();
  const navUpdate = useNavigationUpdate();
  const { setRevealItems, setInGame } = useGameUpdate();

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

  const resetTimer = () => {
    stopTimer();
    isCountdown ? setTime(initialTime) : setTime(0);
  };

  return (
    <>
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
            'absolute z-20 left-1/2 -translate-x-1/2 top-14',
            'uppercase text-[10px] tracking-widest bg-red-600 px-3 py-1 rounded-full whitespace-nowrap'
          )}
        >
          {isRunning ? 'SEC REMAINING' : 'PAUSED'}
        </span>
      </section>

      {/* MISSING LIST */}
      <section
        className={cn(
          inGame ? 'flex' : 'hidden',
          'absolute z-20 bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black/40 px-6 py-3 mb-2 rounded-full',
          'flex-row items-center justify-center gap-4'
        )}
      >
        <span
          className={cn(
            'absolute z-20 left-1/2 -translate-x-1/2 -top-4',
            'uppercase text-[10px] tracking-widest bg-red-600 px-3 py-1 rounded-full whitespace-nowrap'
          )}
        >
          {'Missing Equipment'}
        </span>
        <div className='flex flex-row items-center justify-center gap-6'>
          {items.map((item) => (
            <span key={item.id} className={cn('whitespace-nowrap', item.tagged && 'line-through opacity-40')}>
              {item.name}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
