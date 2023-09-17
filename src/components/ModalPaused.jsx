import cn from '../lib/tailwindMerge';
import { PiPlayFill } from 'react-icons/Pi';

export default function ModalPaused() {
  const handlePlay = () => {
    console.log('PAUSED!');
  };
  return (
    <>
      <div className={cn('rounded-lg backdrop-blur-sm bg-black/40 px-6 py-10 flex flex-col gap-4')}>
        <h1 className='text-3xl font-bold'>Game Paused</h1>
        <p>oluptatem in exercitationem</p>
      </div>
      <div onClick={handlePlay} className='absolute flex items-center -mt-5 right-12 cursor-pointer'>
        <span className='backdrop-blur-sm bg-black/70 px-6 py-2 pr-14 rounded-full'>Continue</span>
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
