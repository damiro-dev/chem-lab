import { useEffect } from 'react';
import { useTimer, useTimerUpdate } from '../context/TimerProvider';
import { usePlayer } from '../context/PlayerProvider';
import { PiPlayFill } from 'react-icons/Pi';
import cn from '../lib/tailwindMerge';

export default function GamePanel({ items }) {
  const { inGame } = usePlayer();
  const { isRunning, time, startTimer, stopTimer, isCountdown } = useTimer();
  const { setIsCountdown, setTime } = useTimerUpdate();
  const timeRange = 30;

  useEffect(() => {
    setTime(timeRange);
    setIsCountdown(true);
  }, [setTime, setIsCountdown]);

  const toggleTimer = () => {
    isRunning ? stopTimer() : startTimer();
  };

  const resetTimer = () => {
    stopTimer();
    isCountdown ? setTime(timeRange) : setTime(0);
  };

  return (
    <>
      <section className={cn(!inGame && 'hidden')}>
        <div
          onClick={toggleTimer}
          className={cn(
            'absolute z-20 left-1/2 -translate-x-1/2 top-4',
            'w-12 aspect-square flex items-center justify-center rounded-full cursor-pointer',
            'font-semibold text-2xl text-white backdrop-blur-sm bg-black/40'
          )}
        >
          {isRunning ? time : <PiPlayFill />}
        </div>
        <span
          className={cn(
            'absolute z-20 left-1/2 -translate-x-1/2 top-14',
            'uppercase text-[10px] tracking-widest bg-red-600 px-3 py-1 rounded-full'
          )}
        >
          {isRunning ? 'SEC REMAINING' : 'PAUSED'}
        </span>
      </section>
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
            'uppercase text-[10px] tracking-widest bg-red-600 px-3 py-1 rounded-full'
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
