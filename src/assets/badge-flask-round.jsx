export default function BadgeFlaskRound({ color = 'white', className }) {
  return (
    <svg
      className={className}
      width='50'
      height='66'
      viewBox='0 0 50 66'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M33.8459 1.7832L16.0319 1.7832V19.5898C7.66307 23.0798 1.78076 31.3395 1.78076 40.9731C1.78076 53.7631 12.1491 64.1314 24.9391 64.1314C37.729 64.1314 48.0973 53.7631 48.0973 40.9731C48.0973 31.3394 42.2149 23.0796 33.8459 19.5896V1.7832Z'
        fill={color}
        fill-opacity='0.3'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M35.261 6.29504V18.2619C43.8843 22.1873 49.8794 30.8797 49.8794 40.9724C49.8794 54.7462 38.7135 65.9121 24.9397 65.9121C11.1659 65.9121 0 54.7462 0 40.9724C0 30.8465 6.03457 22.1301 14.7035 18.2234L14.7035 6.29504C12.959 6.29504 11.5448 4.88585 11.5448 3.14752C11.5448 1.40919 12.959 0 14.7035 0L35.261 0C37.0055 0 38.4197 1.40919 38.4197 3.14752C38.4197 4.88585 37.0055 6.29504 35.261 6.29504ZM31.7309 16.4372L31.7309 3.53011L18.2337 3.53011L18.2337 15.8091C18.2337 20.9746 18.2337 20.1391 15.7656 21.6586C8.55019 25.0921 3.56281 32.4498 3.56281 40.9724C3.56281 52.7785 13.1336 62.3492 24.9397 62.3492C36.7458 62.3492 46.3166 52.7785 46.3166 40.9724C46.3166 32.3147 41.1699 24.8592 33.7692 21.4984C32.3239 20.8421 31.7309 21.3769 31.7309 16.4372Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M24.9392 7.12516C24.9392 6.14131 24.1416 5.34375 23.1578 5.34375C22.1739 5.34375 21.3764 6.14131 21.3764 7.12516V23.287C17.5437 23.8373 13.3155 26.2548 9.48156 32.0552L9.4815 32.0552L9.47266 32.0688C4.07791 40.3946 6.45396 51.5172 14.7797 56.912C15.6054 57.447 16.7084 57.2113 17.2434 56.3857C17.7784 55.56 17.5428 54.457 16.7171 53.922C10.0449 49.5987 8.1392 40.6866 12.4583 34.013C16.367 28.103 20.3041 26.7219 23.1568 26.7228C24.0172 26.723 24.7353 26.1133 24.9022 25.3023C24.9264 25.1851 24.9392 25.0636 24.9392 24.9392V7.12516Z'
        fill={color}
        fill-opacity='0.5'
      />
    </svg>
  );
}
