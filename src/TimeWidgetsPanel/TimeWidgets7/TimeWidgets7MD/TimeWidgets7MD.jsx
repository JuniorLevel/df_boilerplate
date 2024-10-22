// @flow

import { Flex } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets7MD.module.scss';

interface ITimeWidgets7MDProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets7MD = ({
	fullDate,
}: ITimeWidgets7MDProps): React.Node => (
	<MediaQuery minWidth={569} maxWidth={709}>
		<Flex vertical align="center" gap={10} className={styles.container}>
			<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
			<Flex gap={50} align="center">
				<TimeWidgetsCustomClock />
				<TimeWidgetsWeeksAndYearsPanel />
				<TimeWidgetsCustomClock />
			</Flex>
			<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
