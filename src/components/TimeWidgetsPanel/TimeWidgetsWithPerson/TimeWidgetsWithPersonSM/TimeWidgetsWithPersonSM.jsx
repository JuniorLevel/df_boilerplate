// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex, Typography } from 'antd';
import PersonWidget from '../../PersonWidget/PersonWidget';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgetsWithPersonSM = (): React$MixedElement => {
	const { Text } = Typography;

	return (
		<MediaQuery maxWidth={569}>
			<Flex
				wrap
				align="center"
				gap={20}
				style={{ border: '1px solid black', padding: '10px' }}
				justify="center"
			>
				<div style={{ width: '100%' }}>
					<PersonWidget />
				</div>
				<Flex
					vertical
					gap={10}
					style={{
						padding: '5px',
					}}
				>
					<Flex vertical align="center" gap={10}>
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
						<TimeWidgetsCustomClock />
					</Flex>
					<Flex vertical align="center" gap={10}>
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
						<TimeWidgetsCustomClock />
					</Flex>
					<Flex justify="center">
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgetsWithPersonSM;
