import { useState, useEffect } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useGameUpdate } from '../context/GameProvider';
import { useTimer, useTimerUpdate } from '../context/TimerProvider';
import { useLocalStorage } from '../context/LocalStorageProvider';
import getBadge from '../lib/getBadge';
import cn from '../lib/tailwindMerge';
import BadgeFlaskAngled from '../assets/badge-flask-angled';
import Badge from '../assets/badge';

export default function ModalHome() {
  const setContent = useNavigationUpdate();
  const { setScene, setRevealItems, setLevel, setName, setScore } = useGameUpdate();
  const { setTime } = useTimerUpdate();
  const { initialTime } = useTimer();
  const { labsGameData } = useLocalStorage();

  const [inputChange, setInputChange] = useState('');
  const handleInputChange = (e) => setInputChange(e.currentTarget.value);

  // ON LOAD
  useEffect(() => {
    setScore(0);
    setRevealItems(false);
    setTime(initialTime);
    setScene(4);
  }, []);

  const handlePlay = () => {
    setLevel(1);
    setName(inputChange);
    setContent('comic');
    console.log('PLAY!');
  };

  return (
    <>
      <div className='mb-16'>
        <Badge color='gold' />
      </div>
      <div className='absolute z-10 flex gap-4 -mt-3 right-12 justify-end'>
        <div
          onClick={() => setContent('about')}
          className='uppercase text-[12px] tracking-[4px] bg-red-600 px-3 py-1 rounded-full cursor-pointer'
        >
          About
        </div>
        <div
          onClick={() => setContent('highscore')}
          className='uppercase text-[12px] tracking-[4px] bg-red-600 px-3 py-1 rounded-full cursor-pointer'
        >
          Hall of Fame
        </div>
      </div>

      <div className={cn('rounded-lg backdrop-blur-sm bg-black/40 px-6 py-10 flex flex-col gap-4')}>
        <h1 className='text-4xl font-bold'>Labs GAME</h1>
        <p>
          Interactive and educational game designed to enhance laboratory skills and familiarity with laboratory
          apparatuses, materials, and equipment. A learner or player will embark on a learning journey where they engage
          in memory challenges and interactive tasks related to the laboratory environment.
        </p>

        {labsGameData.length === 0 ? (
          <p>No entries to display.</p>
        ) : (
          labsGameData.slice(0, 1).map((entry, index) => (
            <p key={index} className='font-bold text-green-600/60'>
              Title holder: {getBadge(entry.score)} {entry.name} - {entry.score}0 - {entry.timestamp}
            </p>
          ))
        )}
      </div>

      <div className='absolute flex items-center -mt-5 right-12'>
        <input
          name='inputName'
          type='text'
          onChange={handleInputChange}
          value={inputChange}
          placeholder='Input name to play'
          className='backdrop-blur-sm bg-black/70 px-6 py-2 pr-12 rounded-full'
        />
        <div
          onClick={handlePlay}
          className={cn(
            'z-10 w-8 aspect-square flex items-center justify-center rounded-full -ml-9',
            'cursor-pointer bg-green-800 hover:bg-green-600'
          )}
        >
          <PiPlayFill />
        </div>
      </div>
    </>
  );
}
