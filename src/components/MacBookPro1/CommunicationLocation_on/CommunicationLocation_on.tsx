import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CommunicationLocation_on.module.css';
import { TwoToneCommunicationLocation_o } from './TwoToneCommunicationLocation_o';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    twoToneCommunicationLocation_o?: ReactNode;
  };
}
/* @figmaId 1:34 */
export const CommunicationLocation_on: FC<Props> = memo(function CommunicationLocation_on(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.twoToneCommunicationLocation_o}>
        {props.swap?.twoToneCommunicationLocation_o || <TwoToneCommunicationLocation_o className={classes.icon} />}
      </div>
    </div>
  );
});
