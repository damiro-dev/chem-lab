import cn from '../lib/tailwindMerge';

export default function Modal({ page = '' }) {
  return (
    <section
      className={cn(
        'absolute w-40 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg backdrop-blur-sm bg-black/40 text-center',
        page === 'game' && 'hidden'
      )}
    >
      {page === 'home' && <div>FRONT</div>}
      {page === 'paused' && <div>PAUSED</div>}
      {page === 'over' && <div>GAME OVER</div>}
      {page === 'about' && <div>ABOUT</div>}
      {page === 'highscore' && <div>HIGH SCORE</div>}
    </section>
  );
}
