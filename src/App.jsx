import LocalStorageProvider from './context/LocalStorageProvider';
import GameProvider from './context/GameProvider';
import NavigationProvider from './context/NavigationProvider';
import CursorProvider from './context/CursorProvider';
import TimerProvider from './context/TimerProvider';
import AnimateCharProvider from './context/AnimateCharProvider';
import Container from './components/Container';
import GamePanel from './components/GamePanel';
import Modal from './components/Modal';
import Tooltip from './components/Tooltip';
import Follower from './components/Follower';
import GameImage from './components/GameImage';
import Characters from './components/Characters';

export default function App() {
  return (
    <LocalStorageProvider>
      <GameProvider>
        <NavigationProvider>
          <CursorProvider>
            <TimerProvider>
              <AnimateCharProvider>
                <Container>
                  <Characters />
                  <GamePanel />
                  <Tooltip />
                  <Modal />
                  <Follower />
                  <GameImage />
                </Container>
              </AnimateCharProvider>
            </TimerProvider>
          </CursorProvider>
        </NavigationProvider>
      </GameProvider>
    </LocalStorageProvider>
  );
}
