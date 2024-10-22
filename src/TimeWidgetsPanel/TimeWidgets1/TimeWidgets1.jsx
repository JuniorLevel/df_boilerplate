// @flow

import React from 'react';
import { Flex, Progress, Typography } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgets1SM } from './TimeWidgets1SM/TimeWidgets1SM';
import styles from './TimeWidgets1.module.scss';

interface ITimeWidgets1Props {
	date: string;
}
export const TimeWidgets1 = ({ date }: ITimeWidgets1Props): React.Node => {
	const { Text } = Typography;
	return (
		<>
			<MediaQuery minWidth={640}>
				<Flex wrap className={styles.container} gap={5}>
					<Flex gap={10} align="center" className={styles.date}>
						{date.split(' ').map((item, idx) => (
							// eslint-disable-next-line react/no-array-index-key
							<Text key={idx}>{item}</Text>
						))}
					</Flex>
					<Flex className={styles.block}>
						<Flex className={styles.block}>
							<Progress
								size={{ width: 10, height: 50 }}
								percent={100}
								steps={31}
								showInfo={false}
							/>
						</Flex>
					</Flex>
				</Flex>
			</MediaQuery>
			<TimeWidgets1SM date="13 августа 1999" />
		</>
	);
};
