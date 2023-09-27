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

  const handleContinue = () => navUpdate('levelup');

  return (
    <>
      <h1 className='text-3xl font-bold mb-12 text-black/80 text-center'>
        {comicData.heading} {name}!
      </h1>

      {/* DIALOG */}
      <div className='flex flex-col gap-2 w-full items-center'>
        {comicData.comic.map((comic, index) => (
          <div key={index} className={cn('flex flex-col w-4/5', index % 2 ? 'items-end' : 'items-start')}>
            <div
              className={cn(
                index < 2 ? 'flex' : 'hidden',
                index % 2 ? 'translate-x-28' : '-translate-x-28',
                comic.character === 'Daniel' ? 'bg-blue-800/80' : 'bg-red-800/80',
                'absolute rounded-full w-24 aspect-square items-center justify-center -translate-y-8 text-4xl'
              )}
            >
              {comic.character === 'Daniel' ? 'D' : 'X'}
            </div>
            <div
              className={cn(
                'z-10 bg-black/80 pl-4 pr-3 py-2 -mb-4 rounded-full text-[10px] uppercase tracking-widest',
                index % 2 ? 'rounded-br-none' : 'rounded-bl-none'
              )}
            >
              {comic.character}
            </div>
            <div
              className={cn(
                'rounded-xl backdrop-blur-sm bg-black/40 px-8 py-6 flex flex-col w-4/5',
                index % 2 ? 'text-right rounded-tr-none' : 'text-left rounded-tl-none'
              )}
            >
              {comic.dialog}
            </div>
          </div>
        ))}
      </div>

      {/* CONTINUE BUTTON */}
      <div onClick={handleContinue} className='flex items-center justify-center pt-12 cursor-pointer'>
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
    </>
  );
}
