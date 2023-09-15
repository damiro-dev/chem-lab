import Header from './components/Header';
import GamePanel from './components/GamePanel';
import Modal from './components/Modal';
import GameImage from './components/GameImage';
import Follower from './components/Follower';
import CursorProvider from './context/CursorProvider';
import Tooltip from './components/Tooltip';
import itemsData from './data/items';
import TimerProvider from './context/TimerProvider';
import getRandomItems from './lib/getRandomItems';

export default function App() {
  const scene = 'yard';
  const items = getRandomItems(itemsData, 4);

  return (
    <CursorProvider>
      <TimerProvider>
        <div className='min-h-screen text-gray-300 bg-gray-800'>
          <Header />
          <GamePanel items={items} />
          <Modal show={false} />
          <Tooltip items={items} />
          <Follower />
          <GameImage img={scene} items={items} />
        </div>
      </TimerProvider>
    </CursorProvider>
  );
}
