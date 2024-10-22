// @flow

import { Flex } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets5SmToLG.module.scss';

interface ITimeWidgets5SmToLGProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets5SmToLG = ({
	fullDate,
}: ITimeWidgets5SmToLGProps): React.Node => (
	<MediaQuery maxWidth={1389}>
		<Flex wrap gap={10} justify="space-evenly" className={styles.container}>
			<Flex vertical gap={10} align="center">
				<Flex vertical gap={10} wrap justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
			</Flex>
			<Flex vertical gap={10} align="center">
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
				<Flex vertical gap={10} className={styles.block} wrap justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);
