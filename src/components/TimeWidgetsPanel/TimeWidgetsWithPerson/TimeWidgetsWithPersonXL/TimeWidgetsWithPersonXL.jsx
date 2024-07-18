// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex, Typography } from 'antd';
import PersonWidget from '../../PersonWidget/PersonWidget';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgetsWithPersonXL = (): React$MixedElement => {
	const { Text } = Typography;
	return (
		<MediaQuery minWidth={1285}>
			<Flex
				gap={10}
				align="center"
				style={{ border: '1px solid black', padding: '10px' }}
			>
				<div style={{ width: '100%', alignSelf: 'stretch' }}>
					<PersonWidget />
				</div>
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
				<Flex gap={10} align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgetsWithPersonXL;
