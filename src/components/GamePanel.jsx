import { useEffect } from 'react';
import { useTimer, useTimerUpdate } from '../context/TimerProvider';
import cn from '../lib/tailwindMerge';

export default function GamePanel({ items }) {
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
      <section>
        <div
          className={cn(
            'absolute z-20 left-1/2 -translate-x-1/2 top-4',
            'w-12 aspect-square flex items-center justify-center rounded-full',
            'font-bold text-white backdrop-blur-sm bg-black/40'
          )}
        >
          {time}
        </div>
        <span
          className={cn(
            'absolute z-20 left-1/2 -translate-x-1/2 top-14',
            'uppercase text-[10px] tracking-widest bg-red-600 px-3 py-0.5 rounded-full'
          )}
        >
          SEC REMAINING
        </span>
      </section>
      <section
        className={cn(
          'absolute z-20 bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black/40 px-6 py-2 mb-2 rounded-full',
          'flex flex-row items-center justify-center gap-4'
        )}
      >
        <button onClick={toggleTimer} className='z-[60] px-4 bg-red-400 rounded-full'>
          {isRunning ? 'Pause' : 'Resume'}
        </button>
        <button onClick={resetTimer} className='z-[60] px-4 bg-red-400 rounded-full'>
          {'reset'}
        </button>
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
