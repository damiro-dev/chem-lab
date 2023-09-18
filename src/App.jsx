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
import itemsData from './data/items';
import getRandomItems from './lib/getRandomItems';

export default function App() {
  const scene = 'yard';
  const items = getRandomItems(itemsData, 4);

  return (
    <NavigationProvider>
      <GameProvider>
        <PlayerProvider>
          <CursorProvider>
            <TimerProvider initialTime={30}>
              <Container>
                <GamePanel items={items} />
                <Modal />
                <Tooltip items={items} />
                <Follower />
                <GameImage img={scene} items={items} />
              </Container>
            </TimerProvider>
          </CursorProvider>
        </PlayerProvider>
      </GameProvider>
    </NavigationProvider>
  );
}
