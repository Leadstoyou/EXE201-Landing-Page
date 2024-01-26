import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 152 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M76.0001 18.5681C117.974 18.5681 152 14.5387 152 9.56812C152 4.59755 117.974 0.568115 76.0001 0.568115C34.0264 0.568115 6.10352e-05 4.59755 6.10352e-05 9.56812C6.10352e-05 14.5387 34.0264 18.5681 76.0001 18.5681Z'
      fill='#0F0823'
      fillOpacity={0.04}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
