// @flow

import React from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { Flex, Progress, Typography } from 'antd';

const TimeWidgets1SM = (): React$MixedElement => {
	const { Text } = Typography;
	const isMobile = useMediaQuery({
		query: '(max-width: 480px)',
	});

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
					<Text>13</Text>
					<Text>августа</Text>
					<Text>1999</Text>
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
							size={{ width: !isMobile ? 10 : 6, height: 50 }}
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
