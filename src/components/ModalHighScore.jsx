import { useNavigationUpdate } from '../context/NavigationProvider';
import { useLocalStorage } from '../context/LocalStorageProvider';
import getBadge from '../lib/getBadge';
import cn from '../lib/tailwindMerge';

export default function ModalHighScore() {
  const setContent = useNavigationUpdate();
  const { labsGameData } = useLocalStorage();

  return (
    <>
      <div>
        <div className='absolute z-10 flex gap-4 -mt-3 right-12 justify-end'>
          <div
            onClick={() => setContent('home')}
            className='uppercase text-[12px] tracking-[4px] bg-red-600 px-3 py-1 rounded-full cursor-pointer'
          >
            Play
          </div>
          <div
            onClick={() => setContent('about')}
            className='uppercase text-[12px] tracking-[4px] bg-red-600 px-3 py-1 rounded-full cursor-pointer'
          >
            About
          </div>
        </div>
      </div>
      <div className={cn('rounded-lg backdrop-blur-sm bg-black/40 flex flex-col py-10')}>
        <h1 className='text-4xl font-bold px-6 pb-6'>Hall of Fame</h1>
        {labsGameData.length === 0 ? (
          <p>No entries to display.</p>
        ) : (
          labsGameData.slice(0, 5).map((entry, index) => (
            <div
              key={index}
              className='flex flex-row items-center justify-between px-6 py-1 hover:bg-white/10 transition-colors duration-300'
            >
              <div className='flex flex-row gap-4 items-center'>
                <span className='w-8 aspect-square bg-black/80 rounded-full text-[12px] flex items-center justify-center'>
                  {entry.score}
                </span>
                <p>{entry.name}</p>
              </div>
              <div className='flex flex-row gap-4'>
                <p>{getBadge(entry.score)}</p>
                <span className='text-white/40'>{entry.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
