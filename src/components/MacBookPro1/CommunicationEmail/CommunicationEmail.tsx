import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CommunicationEmail.module.css';
import { OutlinedCommunicationEmailIcon } from './OutlinedCommunicationEmailIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    outlinedCommunicationEmail?: ReactNode;
  };
}
/* @figmaId 1:27 */
export const CommunicationEmail: FC<Props> = memo(function CommunicationEmail(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.outlinedCommunicationEmail}>
        {props.swap?.outlinedCommunicationEmail || <OutlinedCommunicationEmailIcon className={classes.icon} />}
      </div>
    </div>
  );
});
