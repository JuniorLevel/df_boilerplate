// @flow

import { Flex, Typography } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets5XL = (): React$MixedElement => {
	const { Text } = Typography;
	return (
		<MediaQuery minWidth={1390}>
			<Flex wrap style={{ border: '1px solid black' }}>
				<Flex
					wrap
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
					<Flex gap={10}>
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
				</Flex>
				<Flex
					wrap
					gap={10}
					align="center"
					justify="space-between"
					style={{ padding: '5px', flex: '0 1 50%' }}
				>
					<Flex gap={10}>
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
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
								12
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

export default TimeWidgets5XL;
