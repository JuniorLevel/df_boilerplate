// @flow

import { Flex, Typography } from 'antd';
import MediaQuery from 'react-responsive';

import React from 'react';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets4XL = (): React$MixedElement => {
	const { Text } = Typography;
	return (
		<MediaQuery minWidth={1003}>
			<Flex wrap justify="space-between" style={{ border: '1px solid black' }}>
				<Flex
					wrap
					gap={10}
					align="center"
					justify="space-between"
					style={{ padding: '5px', flex: '0 1 50%' }}
				>
					<Flex wrap gap={10}>
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
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
				<Flex
					wrap
					gap={10}
					align="center"
					justify="space-between"
					style={{ padding: '5px', flex: '0 1 50%' }}
				>
					<TimeWidgetsWeeksAndYearsPanel />
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
								09
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
		</MediaQuery>
	);
};

export default TimeWidgets4XL;
