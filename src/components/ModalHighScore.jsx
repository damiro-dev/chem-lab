import cn from '../lib/tailwindMerge';

export default function ModalHighScore() {
  return (
    <>
      <div>
        <div className='absolute z-10 flex gap-4 -mt-3 right-12 justify-end'>
          <div className='uppercase text-[12px] tracking-[4px] bg-red-600 px-3 py-1 rounded-full'>Play</div>
          <div className='uppercase text-[12px] tracking-[4px] bg-red-600 px-3 py-1 rounded-full'>About</div>
        </div>
      </div>
      <div className={cn('rounded-lg backdrop-blur-sm bg-black/40 flex flex-col py-10 gap-4')}>
        <h1 className='text-4xl font-bold px-6 pb-6'>High Score</h1>
        <div className='flex flex-row items-center justify-between px-6 py-1 hover:bg-white/10 transition-colors duration-300'>
          <div className='flex flex-row gap-4 items-center'>
            <span className='w-8 aspect-square bg-black/80 rounded-full text-[12px] flex items-center justify-center'>
              76
            </span>
            <p>Sapiente Fugiat</p>
          </div>
          <span>2023-09-18</span>
        </div>
        <div className='flex flex-row items-center justify-between px-6 py-1 hover:bg-white/10 transition-colors duration-300'>
          <div className='flex flex-row gap-4 items-center'>
            <span className='w-8 aspect-square bg-black/80 rounded-full text-[12px] flex items-center justify-center'>
              76
            </span>
            <p>Sapiente Fugiat</p>
          </div>
          <span>2023-09-18</span>
        </div>
        <div className='flex flex-row items-center justify-between px-6 py-1 hover:bg-white/10 transition-colors duration-300'>
          <div className='flex flex-row gap-4 items-center'>
            <span className='w-8 aspect-square bg-black/80 rounded-full text-[12px] flex items-center justify-center'>
              76
            </span>
            <p>Sapiente Fugiat</p>
          </div>
          <span>2023-09-18</span>
        </div>
        <div className='flex flex-row items-center justify-between px-6 py-1 hover:bg-white/10 transition-colors duration-300'>
          <div className='flex flex-row gap-4 items-center'>
            <span className='w-8 aspect-square bg-black/80 rounded-full text-[12px] flex items-center justify-center'>
              76
            </span>
            <p>Sapiente Fugiat</p>
          </div>
          <span>2023-09-18 12:43</span>
        </div>
      </div>
    </>
  );
}
