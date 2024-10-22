// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import styles from './TimeWidgetMD.module.scss';

interface ITimeWidgetMDProps {
	fullDate: { date: string, time: string };
	children: React.Node;
}

export const TimeWidgetMD = ({
	fullDate,
	children,
}: ITimeWidgetMDProps): React.Node => (
	<MediaQuery minWidth={640} maxWidth={829}>
		<Flex
			wrap
			align="center"
			gap={20}
			className={styles.container}
			justify="center"
		>
			<div className={styles.content}>{children}</div>
			<Flex vertical align="center" gap={10}>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={50} align="center">
					<TimeWidgetsCustomClock />
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
			</Flex>
		</Flex>
	</MediaQuery>
);
