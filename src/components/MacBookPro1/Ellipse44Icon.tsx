import { memo, SVGProps } from 'react';

const Ellipse44Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 785 67' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M785 16.3988C785 29.6527 669.898 55.5682 486.588 62.3155C296.285 69.3202 -44.8732 72.3907 4.90339 42.397C41.013 20.6385 484.077 0 596.959 0C709.842 0 785 3.14494 785 16.3988Z'
      fill='#FB9300'
    />
  </svg>
);

const Memo = memo(Ellipse44Icon);
export { Memo as Ellipse44Icon };
