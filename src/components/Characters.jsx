import { useNavigation } from '../context/NavigationProvider';
import { useGame } from '../context/GameProvider';
import cn from '../lib/tailwindMerge';
import randomBetween from '../lib/randomBetween';
import comicsData from '../data/comics';
import AnimateJump from './AnimateJump';
import AnimateSlide from './AnimateSlide';
import CharHomeDan from '../assets/CharHomeDan';
import CharHomeXia from '../assets/CharHomeXia';
import CharComicDan from '../assets/CharComicDan';
import CharComicXia from '../assets/CharComicXia';
import CharPauseDan from '../assets/CharPauseDan';
import CharPauseXia from '../assets/CharPauseXia';
import CharTumblingDan from '../assets/CharTumblingDan';
import CharTumblingXia from '../assets/CharTumblingXia';
import CharOverDan from '../assets/CharOverDan';
import CharOverXia from '../assets/CharOverXia';
import AnimatePopUp from './AnimatePopUp';

export default function Characters() {
  const content = useNavigation();
  const { level } = useGame();

  const comicData = comicsData.find((comicData) => comicData.level === level);

  return (
    <>
      <div className={cn(content === 'game' && 'hidden', 'min-w-screen min-h-screen overflow-hidden')}>
        {/* HOME */}
        {(content === 'home' || content === 'highscore' || content === 'about') && (
          <section className='relative z-20'>
            <AnimateJump>
              <CharHomeDan className={'drop-shadow-md scale-50 lg:scale-75'} />
            </AnimateJump>
            <AnimateJump>
              <CharHomeXia className={'drop-shadow-md scale-50 lg:scale-75'} />
            </AnimateJump>
          </section>
        )}

        {/* COMIC */}
        {content === 'comic' && (
          <section className='relative z-20 min-h-screen overflow-hidden'>
            {comicData.type === 'banner' ? (
              <AnimateSlide side={'left'} index={1} rotate>
                {randomBetween(0, 2) === 1 ? (
                  <CharTumblingDan className={'drop-shadow-md scale-50 lg:scale-75'} />
                ) : (
                  <CharTumblingXia className={'drop-shadow-md scale-50 lg:scale-75'} />
                )}
              </AnimateSlide>
            ) : (
              <>
                <AnimateSlide side={'left'} index={1}>
                  <CharComicXia className={'drop-shadow-md scale-50 lg:scale-75'} />
                </AnimateSlide>
                <AnimateSlide side={'right'} index={2}>
                  <CharComicDan className={'drop-shadow-md scale-50 lg:scale-75'} />
                </AnimateSlide>
              </>
            )}
          </section>
        )}

        {/* PAUSED */}
        {content === 'paused' && (
          <section className='fixed z-20 min-h-screen min-w-screen'>
            <AnimatePopUp>
              {randomBetween(0, 2) === 1 ? (
                <CharPauseDan className={'drop-shadow-md scale-100 lg:scale-150'} />
              ) : (
                <CharPauseXia className={'drop-shadow-md scale-100 lg:scale-150'} />
              )}
            </AnimatePopUp>
          </section>
        )}

        {/* GAME OVER */}
        {content === 'over' && (
          <section className='fixed z-20 min-h-screen min-w-screen'>
            <AnimateSlide side={'left'} index={1}>
              <CharOverXia className={'drop-shadow-md scale-50 lg:scale-75'} />
            </AnimateSlide>
            <AnimateSlide side={'right'} index={2}>
              <CharOverDan className={'drop-shadow-md scale-50 lg:scale-75'} />
            </AnimateSlide>
          </section>
        )}
      </div>
    </>
  );
}
