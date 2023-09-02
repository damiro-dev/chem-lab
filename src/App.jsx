import { cn } from './lib/utils.js';

function App() {
  return (
    <div className='relative min-h-screen text-gray-300 bg-gray-800'>
      {/* GAME NAVIGATION */}
      <header className='relative z-10 flex justify-between px-6 py-2 backdrop-blur-sm bg-black/40 '>
        <div className=''>Chem Lab</div>
        <nav className=''>Abouts | High score</nav>
      </header>

      {/* GAME PANEL */}
      <section className='absolute z-10 bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black/40 px-6 py-2 mb-2 rounded-full'>
        timer | object list
      </section>

      {/* MODAL */}
      <section
        className={cn(
          'absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg',
          'text-3xl backdrop-blur-sm bg-black/40 '
        )}
      >
        game paused
      </section>

      {/* IMAGE */}
      <section className='absolute top-0 left-0 inset-0'>
        <img className='h-full mx-auto object-cover' src='game_images/scene_office.webp' />
      </section>
    </div>
  );
}

export default App;
