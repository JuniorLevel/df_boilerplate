// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgets8 } from '../../TimeWidgets8/TimeWidgets8';
import styles from './TimeRangeWidgetSM.module.scss';

interface ITimeRangeWidgetSMProps {
	fullDate: { date: string, time: string };
	children: React.Node;
}

export const TimeRangeWidgetSM = ({
	fullDate,
	children,
}: ITimeRangeWidgetSMProps): React.Node => (
	<MediaQuery maxWidth={967}>
		<Flex vertical gap={20} className={styles.container}>
			{children}
			<TimeWidgets8 fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
