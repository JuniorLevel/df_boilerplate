// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import styles from '../TimeWidget.module.scss';

interface ITimeWidgetSMProps {
	fullDate: { date: string, time: string };
	children: React.Node;
}

export const TimeWidgetSM = ({
	fullDate,
	children,
}: ITimeWidgetSMProps): React.Node => (
	<MediaQuery maxWidth={639}>
		<Flex
			wrap
			align="center"
			gap={20}
			className={styles.container}
			justify="center"
		>
			<div className={styles.content}>{children}</div>
			<Flex vertical gap={10}>
				<Flex vertical align="center" gap={10}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<TimeWidgetsCustomClock />
				</Flex>
				<Flex vertical align="center" gap={10}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<TimeWidgetsCustomClock />
				</Flex>
				<Flex justify="center">
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);
