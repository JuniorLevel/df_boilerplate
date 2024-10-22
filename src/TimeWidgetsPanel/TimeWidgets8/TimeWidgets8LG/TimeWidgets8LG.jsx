// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets8LG.module.scss';

interface ITimeWidgets8LGProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets8LG = ({
	fullDate,
}: ITimeWidgets8LGProps): React.Node => (
	<MediaQuery minWidth={1224} maxWidth={1489}>
		<Flex gap={20} justify="space-between" align="center">
			<Flex gap={10} vertical>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
			</Flex>
			<Flex vertical gap={10}>
				<TimeWidgetsCustomClock />
				<TimeWidgetsCustomClock />
			</Flex>
			<Flex className={styles.weeksAndYearsPanel}>
				<TimeWidgetsWeeksAndYearsPanel />
			</Flex>
		</Flex>
	</MediaQuery>
);
