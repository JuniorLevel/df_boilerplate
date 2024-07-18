// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex, Typography } from 'antd';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets8LG = (): React$MixedElement => {
	const { Text } = Typography;

	return (
		<MediaQuery minWidth={1585} maxWidth={1423}>
			<Flex
				justify="space-between"
				align="center"
				style={{
					border: '1px solid black',
					padding: '5px',
				}}
			>
				<Flex gap={50}>
					<Flex vertical justify="center" gap={10} style={{ padding: '5px' }}>
						<Flex gap={10}>
							<Flex gap={10}>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									13
								</Text>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									08
								</Text>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									99
								</Text>
							</Flex>
							<Flex gap={10}>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									20
								</Text>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									55
								</Text>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									55
								</Text>
							</Flex>
						</Flex>
						<Flex wrap align="center" gap={10}>
							<Flex wrap gap={10}>
								<Flex gap={10}>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										23
									</Text>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										08
									</Text>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										99
									</Text>
								</Flex>
								<Flex gap={10}>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										20
									</Text>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										55
									</Text>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										55
									</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
					<Flex vertical gap={10}>
						<TimeWidgetsCustomClock />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
				<Flex
					style={{
						border: '1px solid black',
						padding: '5px',
						margin: '0 50px',
					}}
				>
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets8LG;
