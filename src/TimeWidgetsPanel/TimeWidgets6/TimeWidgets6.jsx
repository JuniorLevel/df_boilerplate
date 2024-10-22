// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgets6SmToLg } from './TimeWidgets6SmToLg/TimeWidgets6SmToLg';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets6.module.scss';

interface ITimeWidgets6Props {
	fullDate: { date: string, time: string };
}

export const TimeWidgets6 = ({ fullDate }: ITimeWidgets6Props): React.Node => (
	<>
		<MediaQuery minWidth={854}>
			<Flex
				wrap
				justify="space-between"
				align="center"
				className={styles.container}
			>
				<Flex wrap align="center">
					<Flex wrap gap={10}>
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
					<Flex wrap gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
		<TimeWidgets6SmToLg fullDate={fullDate} />
	</>
);
