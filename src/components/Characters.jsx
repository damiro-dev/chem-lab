import { useNavigation } from '../context/NavigationProvider';
import cn from '../lib/tailwindMerge';
import AnimateJump from './AnimateJump';
import AnimateSlide from './AnimateSlide';
import CharHomeDan from '../assets/CharHomeDan';
import CharHomeXia from '../assets/CharHomeXia';
import CharComicDan from '../assets/CharComicDan';
import CharComicXia from '../assets/CharComicXia';

export default function Characters() {
  const content = useNavigation();

  return (
    <>
      <div className={cn(content === 'game' && 'hidden', 'min-w-screen min-h-screen overflow-hidden')}>
        {/* HOME */}
        {(content === 'home' || content === 'highscore' || content === 'about') && (
          <section className='relative z-30'>
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
          <section className='relative z-20 min-h-screen'>
            <AnimateSlide side={'left'} index={1}>
              <CharComicXia className={'drop-shadow-md scale-50 lg:scale-75'} />
            </AnimateSlide>
            <AnimateSlide side={'right'} index={2}>
              <CharComicDan className={'drop-shadow-md scale-50 lg:scale-75'} />
            </AnimateSlide>
          </section>
        )}

        {/* PAUSED */}
        {content === 'paused' && (
          <section className='absolute z-20w-full min-h-screen flex items-center'>PAUSED</section>
        )}

        {/* GAME OVER */}
        {content === 'over' && (
          <section className='absolute z-20 w-full min-h-screen flex items-center'>GAME OVER</section>
        )}
      </div>
    </>
  );
}
