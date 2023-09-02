import Header from './components/Header';
import GamePanel from './components/GamePanel';
import Modal from './components/Modal';
import GameImage from './components/GameImage';
import Follower from './components/Follower';
import CursorProvider from './context/CursorProvider';

export default function App() {
  return (
    <CursorProvider>
      <div className='min-h-screen text-gray-300 bg-gray-800'>
        <Header />
        <GamePanel />
        <Modal />
        <Follower />
        <GameImage img={'yard'} paused={false} />
      </div>
    </CursorProvider>
  );
}
