import { useEffect } from 'react';
import { useNavigation } from '../context/NavigationProvider';
import cn from '../lib/tailwindMerge';
import CharHomeDan from '../assets/CharHomeDan';
import CharHomeXia from '../assets/CharHomeXia';

export default function Characters() {
  const content = useNavigation();

  useEffect(() => {
    console.log('CHAR:', content);
  }, [content]);

  return (
    <div className={cn(content === 'game' && 'hidden')}>
      {/* HOME */}
      <section className={cn(content === 'home' ? 'relative z-20 w-full min-h-screen flex items-center' : 'hidden')}>
        <div className='absolute top-0 left-0'>
          <CharHomeDan className={'drop-shadow-md'} />
        </div>
        <div className='absolute bottom-0 right-0'>
          <CharHomeXia className={'drop-shadow-md'} />
        </div>
      </section>

      {/* ABOUT */}
      <section
        className={cn(
          content === 'about' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
        )}
      >
        ABOUT
      </section>

      {/* LEADERBOARD */}
      <section
        className={cn(
          content === 'highscore' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
        )}
      >
        LEADERBOARD
      </section>

      {/* PAUSED */}
      <section
        className={cn(
          content === 'paused' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
        )}
      >
        PAUSED
      </section>

      {/* GAME OVER */}
      <section
        className={cn(
          content === 'over' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
        )}
      >
        GAME OVER
      </section>

      {/* LEVEL UP */}
      <section
        className={cn(
          content === 'levelup' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
        )}
      >
        LEVEL UP
      </section>

      {/* COMIC */}
      <section
        className={cn(
          content === 'comic' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
        )}
      >
        COMIC
      </section>

      {/* SUMMARY */}
      <section
        className={cn(
          content === 'summary' ? 'absolute z-20 bg-red-800/60 w-full min-h-screen flex items-center' : 'hidden'
        )}
      >
        SUMMARY
      </section>
    </div>
  );
}
