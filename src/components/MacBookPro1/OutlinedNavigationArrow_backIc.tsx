import { memo, SVGProps } from 'react';

const OutlinedNavigationArrow_backIc = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(OutlinedNavigationArrow_backIc);
export { Memo as OutlinedNavigationArrow_backIc };
