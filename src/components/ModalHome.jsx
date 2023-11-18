import { useState, useEffect } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useGameUpdate } from '../context/GameProvider';
import { useTimer, useTimerUpdate } from '../context/TimerProvider';
import { useLocalStorage } from '../context/LocalStorageProvider';
import cn from '../lib/tailwindMerge';
import getBadge from '../lib/getBadge';
import Logo from '../assets/Logo';

export default function ModalHome() {
  const setContent = useNavigationUpdate();
  const { setScene, setRevealItems, setLevel, setName, setScore } = useGameUpdate();
  const { setTime } = useTimerUpdate();
  const { initialTime } = useTimer();
  const { labsGameData } = useLocalStorage();

  const [inputChange, setInputChange] = useState('');
  const [feedback, setFeedback] = useState(' ');
  const handleInputChange = (e) => setInputChange(e.currentTarget.value);

  // ON LOAD
  useEffect(() => {
    setScore(0);
    setRevealItems(false);
    setTime(initialTime);
    setScene(4);
  }, []);

  const handlePlay = () => {
    const newName = inputChange.trim().substring(0, 16); // Remove leading and trailing spaces, and limit to 16 characters
    if (newName.length >= 3) {
      setName(newName);
      setLevel(1);
      setContent('comic');
    } else {
      setFeedback('Name must be at least 3 characters long');
    }
  };

  return (
    <div className='max-h-screen -my-10 py-20 overflow-scroll'>
      <div className='rounded-2xl backdrop-blur-sm bg-black/40 px-8 md:px-20 pt-10 pb-16 flex flex-col gap-4 shadow-md'>
        <div className='absolute z-10 flex gap-3 -top-4 left-1/2 -translate-x-1/2'>
          <div
            onClick={() => setContent('highscore')}
            className={cn(
              // labsGameData.length === 0 && 'hidden',
              'font-semibold uppercase text-[12px] tracking-[4px] bg-black/70 hover:bg-black/60 pl-6 pr-4 py-2 rounded-full cursor-pointer shadow-md'
            )}
          >
            LEADERBOARD
          </div>
          <div
            onClick={() => setContent('about')}
            className='min-w-[34px] font-semibold uppercase text-[12px] bg-black/70 hover:bg-black/60 px-0 py-2 rounded-full cursor-pointer text-center shadow-md'
          >
            ?
          </div>
        </div>

        <div className='flex items-center justify-center mx-auto aspect-square w-[200px] rounded-full border-2 my-0 md:my-10 border-white shadow-md scale-75 md:scale-100'>
          <Logo className={'drop-shadow-md'} />
        </div>

        <p className='text-sm text-white/50'>
          Gear up for the ultimate challenge as the Labs Game beckons you to claim the top spot on the leaderboard and
          snag all the coveted badges! Become the lab virtuoso by tackling brain-teasing tasks, showcasing your skills,
          and outsmarting the competition. Are you ready to rise to the occasion and etch your name in the annals of
          laboratory greatness? Aim high, aim for the stars, and let the badge collection begin!
        </p>

        <div className='text-sm font-bold text-white/70 uppercase'>
          {labsGameData.length !== 0 &&
            labsGameData.slice(0, 1).map((entry, index) => (
              <span key={index}>
                TO BEAT: {entry.name} - {getBadge(entry.score)} - {entry.score}0 - {entry.timestamp}
              </span>
            ))}
        </div>

        {/* INPUT NAME */}
        <div className='absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 h-10 scale-75 md:scale-100'>
          <div className='flex items-center'>
            <input
              name='inputName'
              type='text'
              onChange={handleInputChange}
              value={inputChange}
              placeholder='Enter name to play'
              className='backdrop-blur-sm bg-white/70 placeholder-black/40 text-black px-6 py-3 w-[280px] rounded-full uppercase tracking-widest shadow-md'
            />
            <div
              onClick={handlePlay}
              className={cn(
                'z-10 w-10 aspect-square flex items-center justify-center rounded-full -ml-11',
                'cursor-pointer bg-black/70 hover:bg-black/60'
              )}
            >
              <PiPlayFill className='scale-110' />
            </div>
          </div>
          <span className='text-sm font-semibold text-red-800 tracking-wide'>{feedback}</span>
        </div>
      </div>
    </div>
  );
}
