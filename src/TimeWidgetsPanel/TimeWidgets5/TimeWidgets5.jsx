// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgets5SmToLG } from './TimeWidgets5SmToLG/TimeWidgets5SmToLG';
import { TimeWidgetsWeeksAndYearsPanel } from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets5.module.scss';

interface ITimeWidgets5Props {
	fullDate: { date: string, time: string };
}

export const TimeWidgets5 = ({ fullDate }: ITimeWidgets5Props): React.Node => (
	<>
		<MediaQuery minWidth={1390}>
			<Flex className={styles.container}>
				<Flex
					wrap
					align="center"
					justify="space-between"
					className={styles.item}
				>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex gap={10}>
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
				</Flex>
				<Flex
					wrap
					gap={10}
					align="center"
					justify="space-between"
					className={styles.item}
				>
					<Flex gap={10}>
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
					<Flex wrap gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
		<TimeWidgets5SmToLG fullDate={fullDate} />
	</>
);
