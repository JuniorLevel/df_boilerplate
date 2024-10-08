// @flow

import React from 'react';
import { Flex, Typography } from 'antd';

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
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
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
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						{item}
					</Text>
				))}
			</Flex>
		</Flex>
	);
};
