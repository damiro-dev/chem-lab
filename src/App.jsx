import Header from './components/Header';
import GamePanel from './components/GamePanel';
import Modal from './components/Modal';
import GameImage from './components/GameImage';
import Follower from './components/Follower';
import CursorProvider from './context/CursorProvider';
import Tooltip from './components/Tooltip';
import itemsData from './data/items';
import TimerProvider from './context/TimerProvider';

export default function App() {
  const items = itemsData;
  return (
    <CursorProvider>
      <TimerProvider>
        <div className='min-h-screen text-gray-300 bg-gray-800'>
          <Header />
          <GamePanel />
          <Modal show={false} />
          <Tooltip items={items} />
          <Follower />
          <GameImage img={'yard'} items={items} paused={false} />
        </div>
      </TimerProvider>
    </CursorProvider>
  );
}
