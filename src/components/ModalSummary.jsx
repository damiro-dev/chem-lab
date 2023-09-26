import { PiPlayFill } from 'react-icons/Pi';
import { useGame } from '../context/GameProvider';
import { useNavigationUpdate } from '../context/NavigationProvider';
import cn from '../lib/tailwindMerge';

export default function ModalSummary() {
  const { name } = useGame();
  const navUpdate = useNavigationUpdate();

  const handlePlay = () => {
    navUpdate('comic');
  };

  return (
    <>
      {/* CONTENT */}
      <div className={cn('rounded-lg backdrop-blur-sm bg-black/40 px-6 py-10 flex flex-col gap-4')}>
        <h1 className='text-3xl font-bold'>Good Work {name}!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto sapiente fugiat reiciendis modi,
          autem delectus ratione error labore facilis quo eos, nisi vitae quam temporibus quasi nulla iure voluptatibus?
          Animi, minima minus voluptatibus enim, nam odit quas voluptates harum, voluptatem in exercitationem?
        </p>
      </div>

      {/* EXIT BUTTON */}
      <div onClick={handlePlay} className='absolute flex items-center -mt-5 right-12 cursor-pointer'>
        <span className='backdrop-blur-sm bg-black/70 px-6 py-2 pr-14 rounded-full'>Exit (HIGH SCORE)</span>
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
