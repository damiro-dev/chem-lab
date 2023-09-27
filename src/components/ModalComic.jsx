import { PiPlayFill } from 'react-icons/Pi';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useGame } from '../context/GameProvider';
import comicsData from '../data/comics';
import cn from '../lib/tailwindMerge';

export default function ModalComic() {
  const navUpdate = useNavigationUpdate();
  const { level, name } = useGame();

  const comicData = comicsData.find((comicData) => comicData.level === level);
  if (!comicData) return <h1>Not Found</h1>;

  const handleSkip = () => navUpdate('levelup');
  const handleNext = () => console.log('Next');

  return (
    <>
      <div className={cn('rounded-lg backdrop-blur-sm bg-black/40 px-6 py-10 flex flex-col gap-4')}>
        <h1 className='text-3xl font-bold'>{comicData.heading}</h1>
        <p>Hello {name}:</p>
        <div>
          {comicData.comic.map((comic, index) => (
            <p key={index}>
              {comic.character}: {comic.dialog}
            </p>
          ))}
        </div>
      </div>
      <div className='absolute -mt-5 right-12 flex flex-row gap-4'>
        {/* SKIP BUTTON */}
        <div onClick={handleSkip} className='flex items-center cursor-pointer'>
          <span className='backdrop-blur-sm bg-black/70 px-6 py-2 pr-14 rounded-full'>SKIP</span>
          <div
            className={cn(
              'z-10 w-8 aspect-square flex items-center justify-center rounded-full -ml-9',
              'bg-green-800 hover:bg-green-600'
            )}
          >
            <PiPlayFill />
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div onClick={handleNext} className='flex items-center cursor-pointer'>
          <span className='backdrop-blur-sm bg-black/70 px-6 py-2 pr-14 rounded-full'>CONTINUE</span>
          <div
            className={cn(
              'z-10 w-8 aspect-square flex items-center justify-center rounded-full -ml-9',
              'bg-green-800 hover:bg-green-600'
            )}
          >
            <PiPlayFill />
          </div>
        </div>
      </div>
    </>
  );
}
