import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconlyLightArrowRight2 } from '../IconlyLightArrowRight2/IconlyLightArrowRight2';
import { ArrowRightIcon } from './ArrowRightIcon';
import classes from './IconlyLightArrowRight3.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:408 */
export const IconlyLightArrowRight3: FC<Props> = memo(function IconlyLightArrowRight3(props = {}) {
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
