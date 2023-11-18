import cn from '../lib/tailwindMerge';
import { PiPlayFill } from 'react-icons/Pi';
import { useGame } from '../context/GameProvider';
import { useTimer } from '../context/TimerProvider';
import { useNavigationUpdate } from '../context/NavigationProvider';
import Badge from '../assets/badge';
import getColor from '../lib/getColor';
import getBadge from '../lib/getBadge';

export default function ModalPaused() {
  const { name, inGame, level } = useGame();
  const { isRunning, startTimer, stopTimer } = useTimer();
  const navUpdate = useNavigationUpdate();

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

  return (
    <>
      {/* TITLE */}
      <div className='flex flex-col items-center mb-4 md:mb-10 scale-75 md:scale-100'>
        <Badge
          color={getColor(level)}
          stars={level % 5 === 0 ? 4 : (level % 5) - 1}
          icon={level - 1}
          text={getBadge(level)}
        />
      </div>

      {/* CONTENT */}
      <div className='rounded-2xl backdrop-blur-sm bg-black/40 px-8 md:px-20 py-16 flex flex-col gap-4 shadow-md'>
        <span
          style={{ color: getColor(level) }}
          className='absolute bg-black/70 uppercase text-sm text-center font-semibold tracking-[8px] px-6 py-2 pl-9 -top-4 left-1/2 -translate-x-1/2  rounded-full drop-shadow-md'
        >
          {name}
        </span>
        <span className='text-4xl md:text-6xl text-center font-bold uppercase tracking-widest opacity-30'>
          Game Paused
        </span>
      </div>

      {/* GAME ON BUTTON */}
      <div
        onClick={toggleTimer}
        className='-mt-7 flex mx-auto rounded-full scale-75 md:scale-100 items-center justify-center cursor-pointer'
      >
        <span className='backdrop-blur-sm bg-black/70 px-8 py-4 pr-16 tracking-[0.3em] rounded-full shadow-md'>
          CONTINUE
        </span>
        <div
          className={cn(
            'z-10 w-10 aspect-square flex items-center justify-center rounded-full -ml-12',
            'bg-white/60 hover:bg-white/80'
          )}
        >
          <PiPlayFill className='text-black/70 scale-110' />
        </div>
      </div>
    </>
  );
}
