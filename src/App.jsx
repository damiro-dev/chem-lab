import CursorProvider from './context/CursorProvider';
import TimerProvider from './context/TimerProvider';
import NavigationProvider from './context/NavigationProvider';
import GameProvider from './context/GameProvider';
import Container from './components/Container';
import GamePanel from './components/GamePanel';
import Modal from './components/Modal';
import GameImage from './components/GameImage';
import Follower from './components/Follower';
import Tooltip from './components/Tooltip';

export default function App() {
  return (
    <GameProvider>
      <NavigationProvider>
        <CursorProvider>
          <TimerProvider>
            <Container>
              <GamePanel />
              <Modal />
              <Tooltip />
              <Follower />
              <GameImage />
            </Container>
          </TimerProvider>
        </CursorProvider>
      </NavigationProvider>
    </GameProvider>
  );
}
