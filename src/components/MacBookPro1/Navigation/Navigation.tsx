import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Navigation.module.css';
import { OutlinedNavigationArrow_backIc } from './OutlinedNavigationArrow_backIc';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    outlinedNavigationArrow_back?: ReactNode;
  };
}
/* @figmaId 1:15 */
export const Navigation: FC<Props> = memo(function Navigation(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.outlinedNavigationArrow_back}>
        {props.swap?.outlinedNavigationArrow_back || <OutlinedNavigationArrow_backIc className={classes.icon} />}
      </div>
    </div>
  );
});
