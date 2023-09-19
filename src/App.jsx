import Container from './components/Container';
import GamePanel from './components/GamePanel';
import Modal from './components/Modal';
import GameImage from './components/GameImage';
import Follower from './components/Follower';
import Tooltip from './components/Tooltip';
import CursorProvider from './context/CursorProvider';
import TimerProvider from './context/TimerProvider';
import PlayerProvider from './context/PlayerProvider';
import NavigationProvider from './context/NavigationProvider';
import GameProvider from './context/GameProvider';

export default function App() {
  const scene = 'yard';

  return (
    <GameProvider>
      <NavigationProvider>
        <PlayerProvider>
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
        </PlayerProvider>
      </NavigationProvider>
    </GameProvider>
  );
}
