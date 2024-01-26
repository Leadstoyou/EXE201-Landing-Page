import { memo, SVGProps } from 'react';

const Facebook_svgrepoComIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M30 5.09995C16.25 5.09995 5 16.3249 5 30.15C5 42.65 14.15 53.025 26.1 54.9V37.4H19.75V30.15H26.1V24.6249C26.1 18.3499 29.825 14.8999 35.55 14.8999C38.275 14.8999 41.125 15.3749 41.125 15.3749V21.5499H37.975C34.875 21.5499 33.9 23.4749 33.9 25.45V30.15H40.85L39.725 37.4H33.9V54.9C39.791 53.9695 45.1555 50.9637 49.0247 46.425C52.894 41.8865 55.0135 36.114 55 30.15C55 16.3249 43.75 5.09995 30 5.09995Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Facebook_svgrepoComIcon);
export { Memo as Facebook_svgrepoComIcon };
