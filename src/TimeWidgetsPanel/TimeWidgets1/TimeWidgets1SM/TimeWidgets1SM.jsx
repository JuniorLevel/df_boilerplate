// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex, Progress, Typography } from 'antd';
import styles from './TimeWidgets1SM.module.scss';

interface ITimeWidgets1SMProps {
	date: string;
}

export const TimeWidgets1SM = ({ date }: ITimeWidgets1SMProps): React.Node => {
	const { Text } = Typography;

	return (
		<MediaQuery maxWidth={639}>
			<Flex vertical gap={5}>
				<Flex gap={10} justify="center" className={styles.date}>
					{date.split(' ').map((item, idx) => (
						// eslint-disable-next-line react/no-array-index-key
						<Text key={idx}>{item}</Text>
					))}
				</Flex>
				<Flex justify="center" className={styles.block}>
					<Flex className={styles.block}>
						<Progress
							size={{ width: 6, height: 50 }}
							percent={100}
							steps={31}
							showInfo={false}
						/>
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
