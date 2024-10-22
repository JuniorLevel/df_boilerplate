// @flow

import React from 'react';
import { Flex, Typography } from 'antd';
import styles from './TimeWidgetsDateWithTimeBlock.module.scss';

interface ITimeWidgetsDateWithTimeBlockProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgetsDateWithTimeBlock = ({
	fullDate,
}: ITimeWidgetsDateWithTimeBlockProps): React.Node => {
	const { Text } = Typography;
	const { date, time } = fullDate;
	return (
		<Flex wrap gap={10} align="center" justify="center">
			<Flex gap={10}>
				{date.split('.').map((item, idx) => (
					<Text
						// eslint-disable-next-line react/no-array-index-key
						key={idx}
						className={styles.dateBlock}
					>
						{item}
					</Text>
				))}
			</Flex>
			<Flex gap={10}>
				{time.split(':').map((item, idx) => (
					<Text
						// eslint-disable-next-line react/no-array-index-key
						key={idx}
						className={styles.timeBlock}
					>
						{item}
					</Text>
				))}
			</Flex>
		</Flex>
	);
};
