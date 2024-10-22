// @flow

import React from 'react';
import { Flex } from 'antd';
import styles from './TimeWidgetsWeeksAndYearsPanel.module.scss';

export const TimeWidgetsWeeksAndYearsPanel = (): React.Node => (
	<div className={styles.panel}>
		<Flex gap={10}>
			<div className={styles.weeks} />
			<div className={styles.weeks} />
			<div className={styles.years} />
			<div className={styles.years} />
		</Flex>
	</div>
);
