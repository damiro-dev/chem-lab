import { useNavigationUpdate } from '../context/NavigationProvider';
import cn from '../lib/tailwindMerge';

export default function ModalAbout() {
  const setContent = useNavigationUpdate();

  return (
    <>
      <div>
        <div onClick={() => setContent('home')} className='absolute z-10 flex gap-4 -mt-3 right-12 justify-end'>
          <div className='uppercase text-[12px] tracking-[4px] bg-red-600 px-3 py-1 rounded-full cursor-pointer'>
            Play
          </div>
          <div
            onClick={() => setContent('highscore')}
            className='uppercase text-[12px] tracking-[4px] bg-red-600 px-3 py-1 rounded-full cursor-pointer'
          >
            Highscore
          </div>
        </div>
      </div>
      <div className={cn('rounded-lg backdrop-blur-sm bg-black/40 px-6 pt-10 pb-6 flex flex-col gap-4')}>
        <h1 className='text-3xl font-bold'>About Chem Lab</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto sapiente fugiat reiciendis modi,
          autem delectus ratione error labore facilis quo eos, nisi vitae quam temporibus quasi nulla iure voluptatibus?
          Animi, minima minus voluptatibus enim, nam odit quas voluptates harum, voluptatem in exercitationem?
        </p>
        <p>
          Odio veritatis, numquam quidem repellat sequi perspiciatis eveniet debitis, maxime, dolore neque quod
          accusamus quasi magni totam. Sit, unde. Laboriosam veritatis hic neque nulla maiores odio saepe soluta illum?
          Cumque sunt quo quas eos quos nesciunt nulla doloremque, hic, tempore asperiores sed consequuntur provident,
          itaque labore vero.
        </p>
        <div className='flex flex-row gap-4'>
          <span className='w-8 aspect-square bg-black/80 rounded-full'></span>
          <span className='w-8 aspect-square bg-black/80 rounded-full'></span>
          <span className='w-8 aspect-square bg-black/80 rounded-full'></span>
        </div>
      </div>
    </>
  );
}
