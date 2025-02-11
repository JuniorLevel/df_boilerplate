// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import styles from './TimeWidgetLG.module.scss';

interface ITimeWidgetLGProps {
	fullDate: { date: string, time: string };
	children: React.Node;
}

export const TimeWidgetLG = ({
	fullDate,
	children,
}: ITimeWidgetLGProps): React.Node => (
	<MediaQuery minWidth={830} maxWidth={1284}>
		<Flex
			wrap
			gap={10}
			align="center"
			justify="center"
			className={styles.container}
		>
			<div className={styles.content}>{children}</div>
			<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
			<Flex gap={10} align="center">
				<TimeWidgetsWeeksAndYearsPanel />
				<TimeWidgetsCustomClock />
			</Flex>
		</Flex>
	</MediaQuery>
);
