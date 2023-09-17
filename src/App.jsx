import Container from './components/Container';
import GamePanel from './components/GamePanel';
import Modal from './components/Modal';
import GameImage from './components/GameImage';
import Follower from './components/Follower';
import CursorProvider from './context/CursorProvider';
import Tooltip from './components/Tooltip';
import itemsData from './data/items';
import TimerProvider from './context/TimerProvider';
import getRandomItems from './lib/getRandomItems';
import PlayerProvider from './context/PlayerProvider';

export default function App() {
  const inGame = true;
  const page = 'game';
  const scene = 'yard';
  const items = getRandomItems(itemsData, 4); // triggered by play button

  return (
    <PlayerProvider>
      <CursorProvider>
        <TimerProvider initialTime={30}>
          <Container>
            <GamePanel items={items} />
            <Modal page={page} />
            <Tooltip items={items} inGame={inGame} />
            <Follower inGame={inGame} />
            <GameImage img={scene} items={items} inGame={inGame} />
          </Container>
        </TimerProvider>
      </CursorProvider>
    </PlayerProvider>
  );
}
