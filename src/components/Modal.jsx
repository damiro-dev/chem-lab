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
        content === 'game' && 'hidden',
        'absolute w-full container max-w-3xl z-20 p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
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
