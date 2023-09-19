import { useState, useEffect } from 'react';
import { useCursor } from '../context/CursorProvider';
import { useGame } from '../context/GameProvider';
import cn from '../lib/tailwindMerge';

export default function Tooltip() {
  const cursor = useCursor();
  const { items, inGame } = useGame();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [orientation, setOrientation] = useState({ v: false, h: false });
  const [origin, setOrigin] = useState('origin-top-left');
  const [isHidden, setHidden] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [found, setFound] = useState(1);

  const checkCorrectness = (item) => {
    const clickedItem = items.filter((index) => index.name === item.name)[0];

    // check if click is in between (x & width && y & height) && if (item === name)
    if (clickedItem.name !== item.name) return;
    if (
      clickedItem.x < cursor.x &&
      clickedItem.x + clickedItem.width > cursor.x &&
      clickedItem.y < cursor.y &&
      clickedItem.y + clickedItem.height > cursor.y
    ) {
      setFound((found) => found + 1);
      item.tagged = !item.tagged;
      console.log('CORRECT:', clickedItem.name, found, items.length);
      if (found === items.length) {
        console.log('LEVEL CLEARED');
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

  return (
    <div
      onMouseOver={() => setToHide(false)}
      onMouseOut={() => setToHide(true)}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className={cn(
        'absolute z-10 py-4 rounded-xl bg-black/50 backdrop-blur-md whitespace-nowrap origin-top-left',
        orientation.v && '-translate-y-full',
        orientation.h && '-translate-x-full',
        origin,
        isHidden ? 'scale-[0]' : 'scale-100'
      )}
    >
      <span className='px-8 font-bold text-gray-400 cursor-default'>What is it?</span>
      <ol className='flex flex-col items-start pt-4 gap-0'>
        {/* List of game objects */}
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(true, item)}
            className={cn(
              'w-full px-8 py-1 text-left hover:bg-orange-400 hover:text-gray-800',
              item.tagged && 'hidden'
            )}
          >
            {item.name}
          </button>
        ))}
      </ol>
    </div>
  );
}
