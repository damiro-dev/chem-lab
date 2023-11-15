import { useNavigationUpdate } from '../context/NavigationProvider';
import { useLocalStorage } from '../context/LocalStorageProvider';
import getBadge from '../lib/getBadge';
import Logo from '../assets/Logo';
import getColor from '../lib/getColor';

export default function ModalHighScore() {
  const setContent = useNavigationUpdate();
  const { labsGameData } = useLocalStorage();

  return (
    <div className='max-h-screen -my-10 py-10 overflow-scroll'>
      <div className='flex flex-col gap-2 items-center justify-center mx-auto mb-10 scale-75 md:scale-100'>
        <Logo orientation='horizontal' className={'drop-shadow-md'} />
        <h2 className='text-xl text-white font-semibold tracking-[8px] -mr-4 drop-shadow-md'>LEADERBOARD</h2>
      </div>
      <div className='rounded-2xl backdrop-blur-sm bg-black/40 flex flex-col py-10'>
        <div className='absolute z-10 flex gap-3 -top-4 left-1/2 -translate-x-1/2'>
          <div
            onClick={() => setContent('home')}
            className='font-semibold uppercase text-[12px] tracking-[4px] bg-black/70 hover:bg-black/60 pl-6 pr-4 py-2 rounded-full cursor-pointer shadow-md'
          >
            Play
          </div>
          <div
            onClick={() => setContent('about')}
            className='min-w-[34px] font-semibold uppercase text-[12px] bg-black/70 hover:bg-black/60 px-0 py-2 rounded-full cursor-pointer text-center shadow-md'
          >
            ?
          </div>
        </div>
        {labsGameData.length === 0 ? (
          <p className='uppercase text-center tracking-widest'>No entries to display</p>
        ) : (
          labsGameData.slice(0, 10).map((entry, index) => (
            <div
              key={index}
              style={{ color: getColor(entry.level) }}
              className='flex flex-row items-center justify-between px-4 md:px-16 py-1 hover:bg-white/10 transition-colors duration-300 cursor-default'
            >
              <div className='flex flex-row gap-4 items-center'>
                <span className='px-3 py-1 bg-black/60 rounded-full text-[12px] flex items-center justify-center'>
                  {entry.score}0
                </span>
                <span className='font-semibold uppercase tracking-widest'>{entry.name}</span>
              </div>
              <div className='flex flex-row items-end gap-4 opacity-60'>
                <p className='uppercase text-sm'>{getBadge(entry.level)}</p>
                <span className='hidden md:block text-[12px] uppercase font-mono'>{entry.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
