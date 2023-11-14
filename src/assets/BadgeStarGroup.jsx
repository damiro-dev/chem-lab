import BadgeStar from './BadgeStar';

export default function BadgeStarGroup({ stars = 5, color = 'white' }) {
  switch (stars) {
    case 1:
      return (
        <div className='flex flex-row mb-[24px] scale-[1.4]'>
          <BadgeStar color={color} className='drop-shadow-md' />
        </div>
      );
    case 2:
      return (
        <div className='flex flex-row gap-[75px] mt-[86px] scale-[1.4]'>
          <BadgeStar color={color} className='drop-shadow-md mt-[8px]' />
          <BadgeStar color={color} className='drop-shadow-md mt-[8px]' />
        </div>
      );
    case 3:
      return (
        <div className='flex flex-row mb-[18px]'>
          <BadgeStar color={color} className='drop-shadow-md mt-[8px] mr-[20px]' />
          <BadgeStar color={color} className='drop-shadow-md mb-[8px] scale-[1.3] ' />
          <BadgeStar color={color} className='drop-shadow-md mt-[8px] ml-[20px]' />
        </div>
      );
    case 4:
      return (
        <div className='flex flex-row'>
          <BadgeStar color={color} className='drop-shadow-md mt-[22px] mr-[20px]' />
          <BadgeStar color={color} className='drop-shadow-md mr-[12px]' />
          <BadgeStar color={color} className='drop-shadow-md ml-[12px]' />
          <BadgeStar color={color} className='drop-shadow-md mt-[22px] ml-[20px]' />
        </div>
      );
    default:
      return (
        <div className='flex flex-row'>
          <BadgeStar color={color} className='drop-shadow-md mt-7 mr-[12px]' />
          <BadgeStar color={color} className='drop-shadow-md mt-2 mr-[18px]' />
          <BadgeStar color={color} className='drop-shadow-md' />
          <BadgeStar color={color} className='drop-shadow-md mt-2 ml-[18px]' />
          <BadgeStar color={color} className='drop-shadow-md mt-7 ml-[12px]' />
        </div>
      );
  }
}
