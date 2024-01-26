import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CommunicationCall.module.css';
import { OutlinedCommunicationCallIcon } from './OutlinedCommunicationCallIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    outlinedCommunicationCall?: ReactNode;
  };
}
/* @figmaId 1:19 */
export const CommunicationCall: FC<Props> = memo(function CommunicationCall(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.outlinedCommunicationCall}>
        {props.swap?.outlinedCommunicationCall || <OutlinedCommunicationCallIcon className={classes.icon} />}
      </div>
    </div>
  );
});
