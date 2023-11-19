import { useState, useEffect } from 'react';
import { useCursor } from '../context/CursorProvider';
import { useTimer } from '../context/TimerProvider';
import { useGame, useGameUpdate } from '../context/GameProvider';
import { useNavigationUpdate } from '../context/NavigationProvider';
import cn from '../lib/tailwindMerge';
import referenceData from '../data/reference';

export default function Tooltip() {
  const cursor = useCursor();
  const navUpdate = useNavigationUpdate();
  const { items, inGame, itemFound, level } = useGame();
  const { setInGame, setItemFound, setScore } = useGameUpdate();
  const { isRunning, stopTimer } = useTimer();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [orientation, setOrientation] = useState({ v: false, h: false });
  const [origin, setOrigin] = useState('origin-top-left');
  const [isHidden, setHidden] = useState(true);
  const [isMoving, setIsMoving] = useState(false);

  // RESET FOUND COUNTER
  useEffect(() => {
    if (!inGame) setItemFound(1);
  }, [inGame]);

  const checkCorrectness = (item) => {
    const clickedItem = items.filter((index) => index.reference === item.reference)[0];

    // check if click is in between (x & width && y & height) && if (item === reference)
    if (clickedItem.reference !== item.reference) return;
    if (
      clickedItem.x < cursor.x &&
      clickedItem.x + clickedItem.width > cursor.x &&
      clickedItem.y < cursor.y &&
      clickedItem.y + clickedItem.height > cursor.y
    ) {
      setItemFound((found) => found + 1);
      setScore((prev) => prev + 1);
      item.tagged = !item.tagged;
      console.log('CORRECT:', 'item', clickedItem.reference, '|', itemFound, 'found in total', items.length);
      if (itemFound === items.length) {
        stopTimer();
        setInGame(false);
        navUpdate('summary');
        console.log('LEVEL', level, 'COMPLETE:', items);
      }
    }
  };

  const handleSceneClick = (e) => {
    const isRight = e.clientX > window.innerWidth / 2;
    const isBottom = e.clientY > window.innerHeight / 2;
    const orientation = { v: isBottom, h: isRight };

    const origin = isRight
      ? isBottom
        ? 'origin-bottom-right rounded-br-none'
        : 'origin-top-right rounded-tr-none'
      : isBottom
      ? 'origin-bottom-left rounded-bl-none'
      : 'origin-top-left rounded-tl-none';

    setOrigin(origin);
    setOrientation(orientation);
    setPosition({ x: e.clientX, y: e.clientY });
    setHidden(false);
  };

  const setToHide = (status) => {
    setIsMoving(!status);
    setHidden(status);
  };

  const handleMouseMove = (e) => {
    if (isMoving) setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleClick = (status, item) => {
    setToHide(status);
    checkCorrectness(item);
  };

  useEffect(() => {
    if (inGame) {
      const img = document.querySelector('#imgRef');
      img.addEventListener('click', handleSceneClick);
      img.addEventListener('mousemove', handleMouseMove);
      return () => {
        img.removeEventListener('click', handleSceneClick);
        img.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [inGame]);

  const renderItem = (item) => {
    const ref = referenceData.find((refData) => refData.reference === item.reference);
    if (!ref) return null;

    return (
      <button
        key={item.id}
        onClick={() => handleClick(true, item)}
        className={cn(
          'w-full px-8 py-2 text-left hover:bg-white/80 hover:text-black font-semibold uppercase tracking-widest text-sm',
          item.tagged && 'hidden'
        )}
      >
        {ref.name}
      </button>
    );
  };

  return (
    <div
      onMouseOver={() => setToHide(false)}
      onMouseOut={() => setToHide(true)}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className={cn(
        !isRunning && 'hidden',
        'absolute z-10 py-4 rounded-xl bg-black/50 backdrop-blur-md whitespace-nowrap origin-top-left shadow-md',
        orientation.v && '-translate-y-full',
        orientation.h && '-translate-x-full',
        origin,
        isHidden ? 'scale-[0]' : 'scale-100'
      )}
    >
      <span className='px-8 font-semibold text-sm text-white/50 cursor-default tracking-wider'>What is this?</span>
      <ol className='flex flex-col items-start pt-4 gap-0'>
        {/* List of game objects */}
        {items.map((item) => renderItem(item))}
      </ol>
    </div>
  );
}
