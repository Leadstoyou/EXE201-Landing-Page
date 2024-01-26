import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Navigation2.module.css';
import { OutlinedNavigationArrow_forwar } from './OutlinedNavigationArrow_forwar';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    outlinedNavigationArrow_forwar?: ReactNode;
  };
}
/* @figmaId 1:10 */
export const Navigation2: FC<Props> = memo(function Navigation2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.outlinedNavigationArrow_forwar}>
        {props.swap?.outlinedNavigationArrow_forwar || <OutlinedNavigationArrow_forwar className={classes.icon} />}
      </div>
    </div>
  );
});
