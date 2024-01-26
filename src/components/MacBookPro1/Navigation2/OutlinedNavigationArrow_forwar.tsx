import { memo, SVGProps } from 'react';

const OutlinedNavigationArrow_forwar = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z'
      fill='#1D1D1D'
    />
  </svg>
);

const Memo = memo(OutlinedNavigationArrow_forwar);
export { Memo as OutlinedNavigationArrow_forwar };
