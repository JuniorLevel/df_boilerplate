// @flow

import React, { useState } from 'react';
import { Flex, Typography } from 'antd';
import MediaQuery from 'react-responsive';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDaysPanel from '../../TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';

const TimeWidgets2MD = (): React$MixedElement => {
	const { Text } = Typography;
	const [isShowWeeksPanel] = useState(false);

	return (
		<MediaQuery minWidth={730} maxWidth={864}>
			<Flex
				style={{ border: '1px solid black' }}
				gap={5}
				justify="space-evenly"
			>
				<Flex vertical gap={10} style={{ padding: '5px' }}>
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
				<Flex justify="center" align="center" style={{ padding: '5px' }}>
					<Flex vertical align="center" gap={10}>
						<div style={{ border: '1px solid black', padding: '5px' }}>
							{isShowWeeksPanel ? (
								<TimeWidgetsWeeksAndYearsPanel />
							) : (
								<TimeWidgetsDaysPanel />
							)}
						</div>
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets2MD;
