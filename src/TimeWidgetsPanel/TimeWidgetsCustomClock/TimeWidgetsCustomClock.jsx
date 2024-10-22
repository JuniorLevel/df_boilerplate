// @flow

import React from 'react';
import { Progress } from 'antd';
import styles from './TimeWidgetsCustomClock.module.scss';

export const TimeWidgetsCustomClock = (): React.Node => (
	<Progress
		className={styles.progress}
		type="circle"
		strokeWidth={10}
		strokeColor="white"
		percent={60}
		size={75}
		showInfo={false}
	/>
);
