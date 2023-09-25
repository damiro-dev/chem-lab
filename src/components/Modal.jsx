import cn from '../lib/tailwindMerge';
import ModalHome from './ModalHome';
import ModalOver from './ModalOver';
import ModalPaused from './ModalPaused';
import ModalAbout from './ModalAbout';
import ModalHighScore from './ModalHighScore';
import ModalLevelUp from './ModalLevelUp';
import ModalComic from './ModalComic';
import { useNavigation } from '../context/NavigationProvider';

export default function Modal() {
  const content = useNavigation();
  return (
    <section
      className={cn(
        content === 'game' && 'hidden',
        'absolute w-full container max-w-3xl z-20 p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      )}
    >
      {content === 'home' && <ModalHome />}
      {content === 'about' && <ModalAbout />}
      {content === 'highscore' && <ModalHighScore />}

      {/* inGame Modals */}
      {content === 'paused' && <ModalPaused />}
      {content === 'over' && <ModalOver />}
      {content === 'levelup' && <ModalLevelUp />}
      {content === 'comic' && <ModalComic />}
    </section>
  );
}
