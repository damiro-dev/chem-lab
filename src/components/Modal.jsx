import cn from '../lib/tailwindMerge';
import ModalHome from './ModalHome';
import ModalOver from './ModalOver';
import ModalPaused from './ModalPaused';
import ModalAbout from './ModalAbout';
import ModalHighScore from './ModalHighScore';
import ModalLevelup from './ModalLevelup';
import ModalComic from './ModalComic';
import ModalSummary from './ModalSummary';
import { useNavigation } from '../context/NavigationProvider';

export default function Modal() {
  const content = useNavigation();
  return (
    <>
      <section
        className={cn(
          content === 'game' && 'hidden',
          'absolute w-full container max-w-4xl z-20 p-3 md:p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible'
        )}
      >
        {content === 'home' && <ModalHome />}
        {content === 'about' && <ModalAbout />}
        {content === 'highscore' && <ModalHighScore />}

        {/* inGame Modals */}
        {content === 'paused' && <ModalPaused />}
        {content === 'over' && <ModalOver />}
        {content === 'levelup' && <ModalLevelup />}
        {content === 'comic' && <ModalComic />}
        {content === 'summary' && <ModalSummary />}
      </section>
    </>
  );
}
