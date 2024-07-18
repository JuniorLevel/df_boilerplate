// @flow

import { Flex, Progress, Typography } from 'antd';
import MediaQuery from 'react-responsive';

import React from 'react';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';

const TimeWidgets72XL = (): React$MixedElement => {
	const { Text } = Typography;

	return (
		<MediaQuery minWidth={1400}>
			<Flex
				justify="space-between"
				align="center"
				style={{ border: '1px solid black', marginBottom: '20px' }}
			>
				<Flex align="center" gap={50} style={{ padding: '5px' }}>
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
					<Flex>
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
						size={{ width: 10, height: 50 }}
						percent={100}
						steps={31}
						showInfo={false}
					/>
				</Flex>
				<Flex
					align="center"
					gap={50}
					style={{ padding: '5px', fontSize: '2em' }}
				>
					<Flex gap={10} style={{ order: 2 }}>
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
					<Flex>
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets72XL;
