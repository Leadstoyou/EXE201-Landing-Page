import { memo, SVGProps } from 'react';

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.75 6.7257L0.75 6.7257'
      stroke='#130F26'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.7002 0.7013L15.7502 6.7253L9.7002 12.7503'
      stroke='#130F26'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowRightIcon);
export { Memo as ArrowRightIcon };
