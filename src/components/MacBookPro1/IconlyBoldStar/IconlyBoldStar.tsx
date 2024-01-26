import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconlyBoldStar.module.css';
import { StarIcon } from './StarIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:363 */
export const IconlyBoldStar: FC<Props> = memo(function IconlyBoldStar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.star}>
        <StarIcon className={classes.icon} />
      </div>
    </div>
  );
});
