import { useCallback, useRef, useState, useEffect } from 'react';
import cn from '../lib/tailwindMerge';
import roundOff from '../lib/roundOff';
import { useCursorUpdate } from '../context/CursorProvider';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function GameImage({ img, paused = true }) {
  const setCursor = useCursorUpdate();
  const imgUrl = `game-images/scene-${img}.webp`;
  const ref = useRef(null);
  const distance = (window.innerWidth * 2) / 3;

  const calculateCursorPercentage = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect();

    // Calculate cursor position relative to the image
    const xRelativeToImage = e.clientX - rect.left;
    const yRelativeToImage = e.clientY - rect.top;

    // Calculate percentage position relative to the image
    const percentX = roundOff((xRelativeToImage * 100) / rect.width, 2);
    const percentY = roundOff((yRelativeToImage * 100) / rect.height, 2);
    return { x: percentX, y: percentY };
  }, []);

  const handleMouseMove = (e) => {
    const cursorPosition = calculateCursorPercentage(e);
    setCursor({ ...cursorPosition, vx: e.clientX, vy: e.clientY });
  };

  const handleClick = (e) => {
    const cursorPosition = calculateCursorPercentage(e);
    setCursor({ ...cursorPosition, x: cursorPosition.x, y: cursorPosition.y });
    console.log(cursorPosition.x, cursorPosition.y);
  };

  const scroll = (offset) => {
    if (ref.current) {
      ref.current.scrollLeft += offset;
    }
  };

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setCanScrollLeft(ref.current.scrollLeft > 0);
        setCanScrollRight(ref.current.scrollLeft + ref.current.clientWidth < ref.current.scrollWidth);
      }
    };

    if (ref.current) {
      handleScroll(); // Initial calculation
      ref.current.addEventListener('scroll', handleScroll);

      return () => {
        if (ref.current) {
          ref.current.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, [ref]);

  return (
    <>
      <section
        ref={ref}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        className={cn(
          'absolute inset-0 overflow-x-auto snap-x snap-mandatory scroll-smooth transition-all duration-700',
          paused && 'filter blur-3xl grayscale-[60%]'
        )}
      >
        <div className='relative flex items-center justify-center min-w-game min-h-game overflow-hidden'>
          <div className='absolute z-[2] w-full h-full bg-transparent' />

          {/* Important! Images should be scaled to 1512/680 */}
          <img className='w-full h-full object-cover' src={imgUrl} alt={`Game scene - ${img}`} />
        </div>
      </section>

      <button
        onClick={() => scroll(distance * -1)}
        className={cn(
          'absolute z-20 top-1/2 left-0 -translate-y-1/2 w-12 aspect-square ml-4 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center',
          !canScrollLeft && 'hidden'
        )}
      >
        <MdChevronLeft size={'32px'} color='white' />
      </button>

      <button
        onClick={() => scroll(distance)}
        className={cn(
          'absolute z-20 top-1/2 right-0 -translate-y-1/2 w-12 aspect-square mr-4 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center',
          !canScrollRight && 'hidden'
        )}
      >
        <MdChevronRight size={'32px'} color='white' />
      </button>
    </>
  );
}
