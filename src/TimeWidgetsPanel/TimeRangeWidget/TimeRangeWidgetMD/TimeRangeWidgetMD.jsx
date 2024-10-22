// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgets8 } from '../../TimeWidgets8/TimeWidgets8';
import styles from './TimeRangeWidgetMD.module.scss';

interface ITimeRangeWidgetMDProps {
	fullDate: { date: string, time: string };
	children: React.Node;
}

export const TimeRangeWidgetMD = ({
	fullDate,
	children,
}: ITimeRangeWidgetMDProps): React.Node => (
	<MediaQuery minWidth={968} maxWidth={1223}>
		<Flex align="center" gap={20} className={styles.container} justify="center">
			<div className={styles.content}>{children}</div>
			<TimeWidgets8 fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
