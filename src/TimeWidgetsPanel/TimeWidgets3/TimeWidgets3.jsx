// @flow

import React from 'react';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets3.module.scss';

interface ITimeWidgets3Props {
	fullDate: { date: string, time: string };
}

export const TimeWidgets3 = ({ fullDate }: ITimeWidgets3Props): React.Node => (
	<div className={styles.block}>
		<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
	</div>
);
