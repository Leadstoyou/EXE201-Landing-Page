import { memo, SVGProps } from 'react';

const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.786408 14.3305C-1.00192 8.74721 1.08807 2.36554 6.94974 0.477209C10.0331 -0.517791 13.4364 0.068876 15.9997 1.99721C18.4247 0.122209 21.9531 -0.511124 25.0331 0.477209C30.8947 2.36554 32.9981 8.74721 31.2114 14.3305C28.4281 23.1805 15.9997 29.9972 15.9997 29.9972C15.9997 29.9972 3.66307 23.2839 0.786408 14.3305Z'
      stroke='white'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(HeartIcon);
export { Memo as HeartIcon };
