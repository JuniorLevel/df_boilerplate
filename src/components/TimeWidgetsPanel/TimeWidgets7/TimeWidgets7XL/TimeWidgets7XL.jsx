// @flow
import { Flex, Progress, Typography } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';

const TimeWidgets7XL = (): React$MixedElement => {
	const { Text } = Typography;

	return (
		<MediaQuery minWidth={1165} maxWidth={1399}>
			<Flex
				justify="space-between"
				align="center"
				style={{
					border: '1px solid black',
					marginBottom: '20px',
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
					<Progress
						size={{ width: 15.5, height: 50 }}
						percent={100}
						steps={31}
						showInfo={false}
					/>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets7XL;
