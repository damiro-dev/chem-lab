import { useCursor } from '../context/CursorProvider';

export default function Modal() {
  const position = useCursor();

  return (
    <section className='absolute w-40 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg backdrop-blur-sm bg-black/40 text-center'>
      {position.x} | {position.y}
    </section>
  );
}
