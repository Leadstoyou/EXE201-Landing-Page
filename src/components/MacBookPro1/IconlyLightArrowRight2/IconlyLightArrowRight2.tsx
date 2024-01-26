import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ArrowRightIcon } from './ArrowRightIcon';
import classes from './IconlyLightArrowRight2.module.css';

interface Props {
  className?: string;
  swap?: {
    arrowRight?: ReactNode;
  };
}
/* @figmaId 1:4 */
export const IconlyLightArrowRight2: FC<Props> = memo(function IconlyLightArrowRight2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.arrowRight}>{props.swap?.arrowRight || <ArrowRightIcon className={classes.icon} />}</div>
    </div>
  );
});
