import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconlyLightArrowRight2 } from '../IconlyLightArrowRight2/IconlyLightArrowRight2';
import { ArrowRightIcon } from './ArrowRightIcon';
import classes from './IconlyLightArrowRight4.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:418 */
export const IconlyLightArrowRight4: FC<Props> = memo(function IconlyLightArrowRight4(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <IconlyLightArrowRight2
        swap={{
          arrowRight: <ArrowRightIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
