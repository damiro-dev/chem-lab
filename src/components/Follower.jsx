import { useState, useEffect } from 'react';
import cn from '../lib/tailwindMerge';

export default function Follower({ inGame = false }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className={cn(
        inGame ? 'flex' : 'hidden',
        'absolute z-[2] w-16 aspect-square rounded-full border-white border-2 border-dashed -translate-x-1/2 -translate-y-1/2 overflow-hidden items-center justify-center'
      )}
    />
  );
}
