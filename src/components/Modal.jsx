import cn from '../lib/tailwindMerge';
import ModalHome from './ModalHome';
import ModalOver from './ModalOver';
import ModalPaused from './ModalPaused';
import ModalAbout from './ModalAbout';
import ModalHighScore from './ModalHighScore';

export default function Modal({ content = '' }) {
  return (
    <section
      className={cn(
        'absolute w-40 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg backdrop-blur-sm bg-black/40 text-center',
        content === 'game' && 'hidden'
      )}
    >
      {content === 'home' && <ModalHome />}
      {content === 'paused' && <ModalPaused />}
      {content === 'over' && <ModalOver />}
      {content === 'about' && <ModalAbout />}
      {content === 'highscore' && <ModalHighScore />}
    </section>
  );
}
