// @flow
import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets4SmToLg.module.scss';

interface ITimeWidgets4SmToLgProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets4SmToLg = ({
	fullDate,
}: ITimeWidgets4SmToLgProps): React.Node => (
	<MediaQuery maxWidth={1099}>
		<Flex justify="center" wrap className={styles.container}>
			<Flex
				vertical
				wrap
				gap={10}
				justify="center"
				align="center"
				className={styles.item}
			>
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
				<TimeWidgetsWeeksAndYearsPanel />
			</Flex>
			<Flex
				vertical
				wrap
				gap={10}
				justify="center"
				align="center"
				className={styles.item}
			>
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
				<TimeWidgetsWeeksAndYearsPanel />
			</Flex>
		</Flex>
	</MediaQuery>
);
