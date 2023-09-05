import { useCursor } from '../context/CursorProvider';
import cn from '../lib/tailwindMerge';

export default function Modal({ show = false }) {
  const position = useCursor();

  return (
    <section
      className={cn(
        'absolute w-40 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg backdrop-blur-sm bg-black/40 text-center',
        !show && 'hidden'
      )}
    >
      {position.x} | {position.y}
    </section>
  );
}
