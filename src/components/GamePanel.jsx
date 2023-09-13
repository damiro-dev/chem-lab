import { useTimerContext } from '../context/TimerProvider';

export default function GamePanel() {
  const { isRunning, time, startTimer, stopTimer, pauseTimer, resetTimer } = useTimerContext();

  const handleClick = () => {
    console.log('click');
  };

  return (
    <section className='absolute z-20 bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-black/40 px-6 py-2 mb-2 rounded-full'>
      {time} | object list
      <button onClick={startTimer} className='z-[60] ml-4 px-4 bg-red-400 rounded-full'>
        start
      </button>
      <button onClick={stopTimer} className='z-[60] ml-4 px-4 bg-red-400 rounded-full'>
        stop
      </button>
      <button onClick={resetTimer} className='z-[60] ml-4 px-4 bg-red-400 rounded-full'>
        reset
      </button>
    </section>
  );
}
