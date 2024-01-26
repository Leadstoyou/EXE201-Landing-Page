import { memo, SVGProps } from 'react';

const YaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60Z'
      fill='#FFDA6A'
    />
    <g filter='url(#filter0_f_434_284)'>
      <path
        d='M47.3333 36C44.3878 36 42 33.6122 42 30.6666C42 27.7211 44.3878 25.3333 47.3333 25.3333C50.2788 25.3333 52.6666 27.7211 52.6666 30.6666C52.6666 33.6122 50.2788 36 47.3333 36Z'
        fill='#F55065'
      />
    </g>
    <g filter='url(#filter1_f_434_284)'>
      <path
        d='M16.0006 27.3333C13.0551 27.3333 10.6673 24.9455 10.6673 22C10.6673 19.0544 13.0551 16.6666 16.0006 16.6666C18.9461 16.6666 21.3339 19.0544 21.3339 22C21.3339 24.9455 18.9461 27.3333 16.0006 27.3333Z'
        fill='#F55065'
      />
    </g>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M37.498 19.1281C38.8633 14.9261 43.3765 12.6265 47.5786 13.9918C51.7806 15.3572 54.0802 19.8704 52.7149 24.0724C52.4873 24.7728 51.7351 25.156 51.0348 24.9285C50.3344 24.7009 49.9512 23.9487 50.1787 23.2484C51.0889 20.447 49.5559 17.4382 46.7545 16.528C43.9532 15.6178 40.9443 17.1508 40.0341 19.9522C39.8066 20.6525 39.0544 21.0358 38.354 20.8082C37.6537 20.5807 37.2704 19.8285 37.498 19.1281ZM16.1646 12.4615C17.53 8.25945 22.0432 5.95984 26.2452 7.32517C30.4473 8.69049 32.7469 13.2037 31.3815 17.4058C31.154 18.1061 30.4018 18.4894 29.7014 18.2618C29.0011 18.0343 28.6178 17.282 28.8454 16.5817C29.7556 13.7804 28.2225 10.7715 25.4212 9.86132C22.6198 8.9511 19.611 10.4842 18.7008 13.2855C18.4732 13.9859 17.721 14.3691 17.0207 14.1416C16.3203 13.914 15.9371 13.1618 16.1646 12.4615ZM43.8596 31.9296C43.0838 33.4812 38.588 35.3438 34.5516 35.499C28.7643 35.7216 23.6502 32.9786 20.1654 26.6426C19.8105 25.9973 20.0459 25.1866 20.6911 24.8317C21.3363 24.4768 22.1471 24.7122 22.502 25.3574C25.4888 30.788 29.6482 33.019 34.4491 32.8343C36.2423 32.7653 38.0272 32.3462 39.5733 31.7057C40.1935 31.4488 40.7367 31.17 41.14 30.9114C41.3057 30.8052 41.4362 30.7095 41.5211 30.6353C41.5375 30.6211 41.5257 30.6344 41.4744 30.737C41.8037 30.0784 42.6046 29.8114 43.2633 30.1408C43.9219 30.4701 44.1889 31.271 43.8596 31.9296Z'
      fill='black'
    />
    <defs>
      <filter
        id='filter0_f_434_284'
        x={30.2353}
        y={13.5686}
        width={34.1961}
        height={34.1961}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={5.88235} result='effect1_foregroundBlur_434_284' />
      </filter>
      <filter
        id='filter1_f_434_284'
        x={-1.09745}
        y={4.90192}
        width={34.1961}
        height={34.1961}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={5.88235} result='effect1_foregroundBlur_434_284' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(YaIcon);
export { Memo as YaIcon };
