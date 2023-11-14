import React from 'react';
import BadgeFlaskAngled from './BadgeFlaskAngled';
import BadgeFlaskRound from './BadgeFlaskRound';
import BadgeTestTube from './BadgeTestTube';
import cn from '../lib/tailwindMerge';
import BadgeRibbon from './BadgeRibbon';
import BadgeStarGroup from './BadgeStarGroup';

export default function Badge({ color }) {
  return (
    <div className='flex items-center justify-center'>
      <div
        className={cn(
          'w-[160px] h-[160px] backdrop-blur-sm bg-black/40 rounded-full',
          'flex items-center justify-center shadow-md shadow-black/40'
        )}
      >
        <div
          style={{ borderColor: color }}
          className='w-[147px] h-[147px] border rounded-full flex items-center justify-center'
        >
          <div
            style={{ borderColor: color }}
            className='w-[95px] h-[95px] border border-dashed rounded-full flex items-center justify-center'
          >
            <BadgeTestTube color={color} className='drop-shadow-md rotate-12' />
          </div>
        </div>
      </div>
      <div className='absolute mb-[94px]'>
        <BadgeStarGroup color={color} stars={5} />
      </div>
      <div className='absolute mt-28'>
        <BadgeRibbon color={color} text='supervisor' className='drop-shadow-md' />
      </div>
    </div>
  );
}
