import cn from '../lib/tailwindMerge';
import { FaCheckCircle } from 'react-icons/fa';

export default function ItemCard({ reference, item, length }) {
  return (
    <>
      <img
        src={'game-items/' + item.reference + '.png'}
        alt={reference.name}
        className={cn('w-full rounded-md object-contain max-w-[260px] h-[130px]', !item.tagged && 'blur-md')}
      />
      {item.tagged && <FaCheckCircle size={32} className='absolute top-4 left-4 scale-75 md:scale-100 text-white' />}
      <div className={cn('flex flex-col gap-1.5')}>
        <span className='uppercase tracking-wide text-sm font-semibold'>{reference.name}</span>
        <p className='text-sm opacity-70'>{reference.description}</p>
      </div>
    </>
  );
}
