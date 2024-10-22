// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets6SmToLg.module.scss';

interface ITimeWidgets6SmToLgProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets6SmToLg = ({
	fullDate,
}: ITimeWidgets6SmToLgProps): React.Node => (
	<MediaQuery maxWidth={853}>
		<Flex vertical gap={10} align="center" className={styles.container}>
			<Flex wrap align="center">
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
			</Flex>
			<Flex className={styles.panel}>
				<Flex gap={10}>
					<div className={styles.years} />
					<div className={styles.years} />
					<div className={styles.years} />
				</Flex>
			</Flex>
			<Flex wrap align="center">
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);
