import { useState, useEffect } from 'react';
import cn from '../lib/tailwindMerge';

export default function Tooltip({ show = true }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [orientation, setOrientation] = useState({ v: false, h: false });
  const [origin, setOrigin] = useState('origin-top-left');
  const [isHidden, setHidden] = useState(true);
  const [isMoving, setIsMoving] = useState(false);

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

  const handleMouseMove = (e) => {
    if (isMoving) setPosition({ x: e.clientX, y: e.clientY });
  };

  const setToHide = (status) => {
    setIsMoving(!status);
    setHidden(status);
  };

  useEffect(() => {
    const img = document.querySelector('#imgRef');
    img.addEventListener('click', handleSceneClick);
    img.addEventListener('mousemove', handleMouseMove);
    return () => {
      img.removeEventListener('click', handleSceneClick);
      img.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      onMouseOver={() => setToHide(false)}
      onMouseOut={() => setToHide(true)}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className={cn(
        'absolute z-10 py-4 rounded-xl bg-black/50 backdrop-blur-md whitespace-nowrap origin-top-left',
        // 'transition-scale duration-150 ',
        orientation.v && '-translate-y-full',
        orientation.h && '-translate-x-full',
        origin,
        isHidden ? 'scale-[0]' : 'scale-100'
      )}
    >
      <span className='px-8 font-bold text-gray-400'>What is it?</span>
      <ol className='flex flex-col items-start pt-4 gap-0'>
        <button
          onClick={() => setToHide(true)}
          className='w-full px-8 py-1 text-left hover:bg-orange-400 hover:text-gray-800'
        >
          handcuff
        </button>
        <button
          onClick={() => setToHide(true)}
          className='w-full px-8 py-1 text-left hover:bg-orange-400 hover:text-gray-800'
        >
          pelican
        </button>
        <button
          onClick={() => setToHide(true)}
          className='w-full px-8 py-1 text-left hover:bg-orange-400 hover:text-gray-800'
        >
          dolphin
        </button>
      </ol>
    </div>
  );
}
