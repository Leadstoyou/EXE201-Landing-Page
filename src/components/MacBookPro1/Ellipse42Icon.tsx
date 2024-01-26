import { memo, SVGProps } from 'react';

const Ellipse42Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 577 419' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M576.099 102.5C576.099 185.343 491.627 347.326 357.099 389.5C217.439 433.283 -32.9317 452.474 3.59851 265C30.0987 129 355.256 0 438.099 0C520.941 0 576.099 19.6573 576.099 102.5Z'
      fill='#FB9300'
    />
  </svg>
);

const Memo = memo(Ellipse42Icon);
export { Memo as Ellipse42Icon };
