import LocalStorageProvider from './context/LocalStorageProvider';
import GameProvider from './context/GameProvider';
import NavigationProvider from './context/NavigationProvider';
import CursorProvider from './context/CursorProvider';
import TimerProvider from './context/TimerProvider';
import Container from './components/Container';
import GamePanel from './components/GamePanel';
import Modal from './components/Modal';
import Tooltip from './components/Tooltip';
import Follower from './components/Follower';
import GameImage from './components/GameImage';

export default function App() {
  return (
    <LocalStorageProvider>
      <GameProvider>
        <NavigationProvider>
          <CursorProvider>
            <TimerProvider>
              <Container>
                <GamePanel />
                <Tooltip />
                <Modal />
                <Follower />
                <GameImage />
              </Container>
            </TimerProvider>
          </CursorProvider>
        </NavigationProvider>
      </GameProvider>
    </LocalStorageProvider>
  );
}
