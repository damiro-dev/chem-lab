import { useState, useEffect } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useGameUpdate } from '../context/GameProvider';
import { useTimer } from '../context/TimerProvider';
import itemsData from '../data/items';
import cn from '../lib/tailwindMerge';

export default function ModalHome() {
  const setContent = useNavigationUpdate();
  const { startTimer } = useTimer();
  const { setScene, setNumItems, setInGame, setRandomItems } = useGameUpdate();

  const [inputChange, setInputChange] = useState('');
  const handleInputChange = (e) => setInputChange(e.currentTarget.value);

  const handlePlay = () => {
    setContent('game');
    setNumItems(5);
    setScene('yard');
    setRandomItems(itemsData);
    setInGame(true);
    startTimer();
    console.log('PLAY!');
  };

  return (
    <>
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
          Highscore
        </div>
      </div>

      <div className={cn('rounded-lg backdrop-blur-sm bg-black/40 px-6 py-10 flex flex-col gap-4')}>
        <h1 className='text-4xl font-bold'>Chem Lab</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto sapiente fugiat reiciendis modi,
          autem delectus ratione error labore facilis quo eos, nisi vitae quam temporibus quasi nulla iure voluptatibus?
          Animi, minima minus voluptatibus enim, nam odit quas voluptates harum, voluptatem in exercitationem?
        </p>
        <p>
          Odio veritatis, numquam quidem repellat sequi perspiciatis eveniet debitis, maxime, dolore neque quod
          accusamus quasi magni totam. Sit, unde. Laboriosam veritatis hic neque nulla maiores odio saepe soluta illum?
          Cumque sunt quo quas eos quos nesciunt nulla doloremque, hic, tempore asperiores sed consequuntur provident,
          itaque labore vero.
        </p>
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
