// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets7SM.module.scss';

interface ITimeWidgets7SMProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets7SM = ({
	fullDate,
}: ITimeWidgets7SMProps): React.Node => (
	<MediaQuery maxWidth={568}>
		<Flex vertical gap={10} className={styles.container}>
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
	</MediaQuery>
);
