// @flow

import { Flex, Progress, Typography } from 'antd';
import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

export const TimeWidgets2SM = (): React$MixedElement => {
	const { Text } = Typography;
	const [isShowWeeksPanel] = useState(false);

	return (
		<MediaQuery maxWidth={781}>
			<Flex
				wrap
				align="start"
				justify="center"
				style={{ border: '1px solid black' }}
				gap={5}
			>
				<Flex vertical gap={10} justify="center" style={{ padding: '5px' }}>
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
				<Flex style={{ padding: '5px' }}>
					<Flex vertical align="center" gap={10}>
						<div style={{ border: '1px solid black', padding: '5px' }}>
							{isShowWeeksPanel ? (
								<TimeWidgetsWeeksAndYearsPanel />
							) : (
								<Progress
									size={{ width: 6, height: 50 }}
									percent={100}
									steps={31}
									showInfo={false}
								/>
							)}
						</div>
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
