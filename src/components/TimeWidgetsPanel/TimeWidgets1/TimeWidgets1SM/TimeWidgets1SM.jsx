// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex, Progress, Typography } from 'antd';

interface ITimeWidgets1SMProps {
	date: string;
}

const TimeWidgets1SM = ({ date }: ITimeWidgets1SMProps): React$MixedElement => {
	const { Text } = Typography;

	return (
		<MediaQuery maxWidth={639}>
			<Flex vertical gap={5}>
				<Flex
					gap={10}
					justify="center"
					style={{
						border: '1px solid black',
						padding: '15px',
						fontSize: '2em',
					}}
				>
					{date.split(' ').map((item, idx) => (
						// eslint-disable-next-line react/no-array-index-key
						<Text key={idx}>{item}</Text>
					))}
				</Flex>
				<Flex
					justify="center"
					style={{
						border: '1px solid black',
						padding: '5px',
					}}
				>
					<Flex
						style={{
							border: '1px solid black',
							padding: '5px',
						}}
					>
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

export default TimeWidgets1SM;
