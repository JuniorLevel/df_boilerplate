// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgets4SmToLg } from './TimeWidgets4SmToLg/TimeWidgets4SmToLg';
import { TimeWidgetsWeeksAndYearsPanel } from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets4.module.scss';

interface ITimeWidgets4Props {
	fullDate: { date: string, time: string };
}

export const TimeWidgets4 = ({ fullDate }: ITimeWidgets4Props): React.Node => (
	<>
		<MediaQuery minWidth={1100}>
			<Flex className={styles.container}>
				<Flex
					gap={10}
					align="center"
					justify="space-between"
					className={styles.item}
				>
					<Flex gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
				<Flex
					gap={10}
					align="center"
					justify="space-between"
					className={styles.item}
				>
					<TimeWidgetsWeeksAndYearsPanel />
					<Flex gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
		<TimeWidgets4SmToLg fullDate={fullDate} />
	</>
);
