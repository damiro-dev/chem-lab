import { useCallback } from 'react';
import cn from '../lib/tailwindMerge';
import roundOff from '../lib/roundOff';
import { useCursorUpdate } from '../context/CursorProvider';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function GameImage({ img, paused = true }) {
  const setCursor = useCursorUpdate();
  const imgUrl = `game-images/scene-${img}.webp`;

  const calculateCursorPercentage = useCallback((e) => {
    const image = document.getElementById('refImage');
    const rect = image.getBoundingClientRect();
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
    setCursor({ ...cursorPosition, ex: e.clientX, ey: e.clientY });
  };

  const handleClick = (e) => {
    const cursorPosition = calculateCursorPercentage(e);
    setCursor({ ...cursorPosition, cx: cursorPosition.x, cy: cursorPosition.y });
    console.log(cursorPosition.x, cursorPosition.y);
  };

  return (
    <>
      <section
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
          <img id='refImage' className='w-full h-full object-cover' src={imgUrl} alt={`Game scene - ${img}`} />
        </div>
      </section>

      <button
        // onClick={() => scroll(distance * -1)}
        className={cn(
          'absolute z-20 top-1/2 left-0 -translate-y-1/2 w-12 aspect-square ml-4 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center'
        )}
      >
        <MdChevronLeft size={'32px'} color='white' />
      </button>

      <button
        // onClick={() => scroll(distance)}
        className={cn(
          'absolute z-20 top-1/2 right-0 -translate-y-1/2 w-12 aspect-square mr-4 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center'
        )}
      >
        <MdChevronRight size={'32px'} color='white' />
      </button>
    </>
  );
}
