export default function GamePanel() {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <section className='absolute z-20 bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black/40 px-6 py-2 mb-2 rounded-full'>
      timer | object list
      <button onClick={handleClick} className='z-[60] ml-4 px-4 bg-red-400 rounded-full'>
        reset
      </button>
    </section>
  );
}
