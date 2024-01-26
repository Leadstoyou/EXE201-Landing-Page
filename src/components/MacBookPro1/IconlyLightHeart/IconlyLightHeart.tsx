import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { HeartIcon } from './HeartIcon';
import classes from './IconlyLightHeart.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:374 */
export const IconlyLightHeart: FC<Props> = memo(function IconlyLightHeart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.heart}>
        <HeartIcon className={classes.icon} />
      </div>
    </div>
  );
});
