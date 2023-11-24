export default function BadgeRibbon({ color = 'white', text = '', className }) {
  return (
    <div className='flex justify-center'>
      <span className='absolute z-10 text-black/60 pt-0.5 tracking-widest font-bold uppercase'>{text}</span>
      <svg
        className={className}
        width='247'
        height='36'
        viewBox='0 0 247 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 7H41.1279L47.0033 35.7242H0L14.6885 21.3621L0 7Z' fill={color} />
        <path opacity='0.3' d='M0 7H41.1279L47.0033 35.7242H0L14.6885 21.3621L0 7Z' fill='#666666' />
        <path d='M247 7L205.875 7L200 36L247 36L232.312 21.5L247 7Z' fill={color} />
        <path opacity='0.3' d='M247 7L205.875 7L200 36L247 36L232.312 21.5L247 7Z' fill='#666666' />
        <path d='M32.3354 0.572266H213.82L208.672 28.8753H38.1275L32.3354 0.572266Z' fill={color} />
      </svg>
    </div>
  );
}
