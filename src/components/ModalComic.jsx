import { useEffect, useState } from 'react';
import { PiPlayFill } from 'react-icons/Pi';
import { useNavigationUpdate } from '../context/NavigationProvider';
import { useGame } from '../context/GameProvider';
import { motion, AnimatePresence } from 'framer-motion';
import cn from '../lib/tailwindMerge';
import comicsData from '../data/comics';
import CharHeadDan from '../assets/CharHeadDan';
import CharHeadXia from '../assets/CharHeadXia';
import Badge from '../assets/badge';
import getColor from '../lib/getColor';
import getTrophy from '../lib/getTrophy';

export default function ModalComic() {
  const setPage = useNavigationUpdate();
  const { level, name } = useGame();
  const [animate, setAnimate] = useState(false);

  const comicData = comicsData.find((comicData) => comicData.level === level);
  if (!comicData) return <h1>Not Found</h1>;

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleContinue = () => {
    setAnimate(false);
    setTimeout(() => {
      setPage('levelup');
    }, 320);
  };

  return (
    <div className='max-h-screen -my-10 py-10 overflow-scroll'>
      <AnimatePresence>
        {animate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='flex flex-col gap-6'
          >
            {/* BADGE */}
            <div className='flex z-10 flex-col items-center -mb-16 md:-mb-12 scale-75 md:scale-100'>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Badge
                  color={getColor(level)}
                  stars={level % 5 === 0 ? 4 : (level % 5) - 1}
                  icon={level}
                  text={comicData.type !== 'dialog' ? comicData.heading : ''}
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.5 }}
                style={{ color: getColor(level) }}
                className={cn(
                  comicData.type !== 'dialog'
                    ? 'hidden'
                    : 'bg-black/70 uppercase text-sm text-center font-semibold tracking-[8px] px-6 py-2 pl-10 -mt-[46px] rounded-full drop-shadow-md'
                )}
              >
                {comicData.heading}
              </motion.span>
            </div>

            {/* BANNER */}
            <div
              style={{ backgroundColor: getColor(level) }}
              className={cn(
                'relative w-4/5 mx-auto rounded-xl backdrop-blur-sm shadow-md',
                comicData.type === 'dialog' ? 'mb-14' : 'mb-6 '
              )}
            >
              <div
                className={cn(
                  comicData.type === 'dialog'
                    ? 'hidden'
                    : comicData.type === 'banner'
                    ? 'py-24 px-4 rounded-xl text-black/60 bg-black/30 uppercase tracking-widest text-center flex flex-col outline-dashed outline-[3px] outline-offset-[-12px] outline-black/30 '
                    : 'py-12 px-4 rounded-xl text-black/60 bg-black/30 uppercase tracking-widest text-center flex flex-col outline-dashed outline-[3px] outline-offset-[-12px] outline-black/30 ',
                  ''
                )}
              >
                <span className='text-2xl md:text-3xl font-bold'>Congrats {name}!</span>
                <span className='text-sm font-extrabold md:text-md'>{getTrophy(level)}</span>
              </div>
            </div>

            <div className='flex flex-col gap-8'>
              {/* DIALOG */}
              <div className='flex flex-col gap-1 w-full items-center'>
                {comicData.comic.map((comic, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 ? 50 : -50, y: 100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.3 }}
                    key={index}
                    className={cn(
                      'flex flex-col w-4/5',
                      index % 2 ? 'items-end origin-top-right' : 'items-start origin-top-left'
                    )}
                  >
                    {/* CHARACTER HEADS */}
                    {/* <div
                  className={cn(
                    index < 2 ? 'flex' : 'hidden',
                    index % 2 ? 'translate-x-[105px] scale-x-[-1]' : '-translate-x-[105px]',
                    comic.character === 'Daniel' ? 'bg-blue-800/20' : 'bg-red-800/20',
                    'absolute rounded-full w-24 h-24 items-center justify-center -translate-y-10 text-4xl shadow-md'
                  )}
                >
                  {comic.character === 'Daniel' ? <CharHeadDan /> : <CharHeadXia />}
                </div> */}
                    <div
                      className={cn(
                        'z-10 bg-black/80 pl-6 pr-6 py-2 -mb-4 rounded-full text-[10px] uppercase tracking-widest shadow-md',
                        index % 2 ? 'rounded-br-none' : 'rounded-bl-none'
                      )}
                    >
                      {comic.character}
                    </div>
                    <div
                      className={cn(
                        'max-w-[90%] rounded-xl backdrop-blur-sm bg-black/40 px-6 py-5 text-sm shadow-md',
                        index % 2 ? 'text-right justify-end rounded-br-none' : 'text-left justify-start rounded-bl-none'
                      )}
                    >
                      {comic.dialog}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CONTINUE BUTTON */}
              <motion.div
                initial={{ opacity: 0, bottom: 0 }}
                animate={{ opacity: 1, bottom: 44 }}
                transition={{ duration: 0.3, delay: 1, ease: 'easeOut' }}
                onClick={handleContinue}
                className={cn(
                  comicData.type === 'banner' && 'absolute right-1/2 translate-x-1/2',
                  'flex mx-auto rounded-full scale-75 md:scale-100 items-center justify-center cursor-pointer'
                )}
              >
                <span className='backdrop-blur-sm bg-black/70 px-8 py-4 pr-16 tracking-[0.3em] rounded-full shadow-md'>
                  CONTINUE
                </span>
                <div className='z-10 w-10 aspect-square flex items-center justify-center rounded-full -ml-12 bg-white/60 hover:bg-white/80'>
                  <PiPlayFill className='text-black/70 scale-110' />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
