import { useCallback, useRef, useEffect, useState } from 'react';
import cn from '../lib/tailwindMerge';
import roundOff from '../lib/roundOff';
import { useCursorUpdate } from '../context/CursorProvider';
import { usePlayer } from '../context/PlayerProvider';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useTimer } from '../context/TimerProvider';

export default function GameImage({ img, items }) {
  const inGame = usePlayer();
  const imageUrl = `game-images/scene-${img}.webp`;
  const imageRef = useRef(null);
  const paused = !useTimer().isRunning;

  const calculateCursorPercentage = useCallback((e) => {
    if (!imageRef.current) return { x: 0, y: 0 };

    // Calculate cursor position relative to the image
    const bounds = imageRef.current.getBoundingClientRect();
    const xRelativeToImage = e.clientX - bounds.left;
    const yRelativeToImage = e.clientY - bounds.top;

    // Calculate percentage position relative to the image
    const percentX = roundOff((xRelativeToImage * 100) / bounds.width, 2);
    const percentY = roundOff((yRelativeToImage * 100) / bounds.height, 2);
    return { x: percentX, y: percentY };
  }, []);

  const setCursor = useCursorUpdate();
  const handleClick = (e) => {
    const cursorPosition = calculateCursorPercentage(e);
    setCursor({ x: cursorPosition.x, y: cursorPosition.y });
    // console.log('GAMEIMAGE:', cursorPosition.x, cursorPosition.y);
  };

  useEffect(() => {
    const handleWindowClick = (e) => handleClick(e);
    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  const scrollRef = useRef(null);
  const distance = (window.innerWidth * 2) / 3;
  const scroll = (offset) => {
    if (scrollRef.current) scrollRef.current.scrollLeft += offset;
  };

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setCanScrollLeft(scrollRef.current.scrollLeft > 0);
        setCanScrollRight(
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth - 1
        );
      }
    };

    if (scrollRef.current) {
      handleScroll(); // Initial calculation
      scrollRef.current.addEventListener('scroll', handleScroll);
      return () => {
        if (scrollRef.current) scrollRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [scrollRef]);

  return (
    <section className='overflow-hidden'>
      <div
        ref={scrollRef}
        className={cn(
          'absolute inset-0 overflow-x-scroll scroll-smooth transition-all duration-700',
          paused && 'filter blur-3xl grayscale-[60%]'
        )}
      >
        <div
          ref={imageRef}
          id='imgRef'
          className='relative flex items-center justify-center min-w-game min-h-game overflow-hidden'
        >
          <div className='absolute z-[2] w-full h-full bg-transparent overflow-hidden' />

          {/* List of objects to find */}
          {items.map((item) => (
            <div
              key={item.id}
              style={{ left: `${item.x}%`, top: `${item.y}%`, width: `${item.width}%`, height: `${item.height}%` }}
              className={cn('absolute border-white border-2 border-dashed rounded-xl', !item.tagged && 'hidden')}
            />
          ))}

          {/* Important! Images should be scaled to 1512/680 */}
          <img className='w-full h-full object-cover overflow-hidden' src={imageUrl} alt={`Game scene - ${img}`} />
        </div>
      </div>

      <button
        onClick={() => scroll(distance * -1)}
        className={cn(
          inGame ? 'flex' : 'hidden',
          'absolute z-20 top-1/2 left-0 -translate-y-1/2 w-12 aspect-square ml-4 bg-black/30 backdrop-blur-sm rounded-full items-center justify-center',
          !canScrollLeft && 'hidden'
        )}
      >
        <MdChevronLeft size={'32px'} color='white' />
      </button>

      <button
        onClick={() => scroll(distance)}
        className={cn(
          inGame ? 'flex' : 'hidden',
          'absolute z-20 top-1/2 right-0 -translate-y-1/2 w-12 aspect-square mr-4 bg-black/30 backdrop-blur-sm rounded-full items-center justify-center',
          !canScrollRight && 'hidden'
        )}
      >
        <MdChevronRight size={'32px'} color='white' />
      </button>
    </section>
  );
}
