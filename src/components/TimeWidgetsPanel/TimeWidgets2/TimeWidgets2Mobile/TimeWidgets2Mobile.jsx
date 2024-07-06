// @flow

import React, { useState } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsDaysPanel from '../../TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets2Mobile = (): React$MixedElement => {
	const [isShowWeeksPanel] = useState(true);

	return (
		<MediaQuery maxWidth={360}>
			<Flex
				wrap
				style={{ border: '1px solid black', marginBottom: '20px' }}
				gap={5}
			>
				<Flex
					wrap
					gap={10}
					justify="center"
					style={{ padding: '5px', fontSize: '2em' }}
				>
					<Flex gap={10}>
						<span
							style={{
								border: '1px solid black',
								padding: '15px',
								fontSize: '2em',
							}}
						>
							13
						</span>
						<span
							style={{
								border: '1px solid black',
								padding: '15px',
								fontSize: '2em',
							}}
						>
							08
						</span>
						<span
							style={{
								border: '1px solid black',
								padding: '15px',
								fontSize: '2em',
							}}
						>
							99
						</span>
					</Flex>
					<Flex gap={10}>
						<span
							style={{
								border: '1px solid black',
								padding: '15px',
								fontSize: '2em',
							}}
						>
							20
						</span>
						<span
							style={{
								border: '1px solid black',
								padding: '15px',
								fontSize: '2em',
							}}
						>
							55
						</span>
						<span
							style={{
								border: '1px solid black',
								padding: '15px',
								fontSize: '2em',
							}}
						>
							55
						</span>
					</Flex>
				</Flex>
				<Flex style={{ padding: '5px' }}>
					<Flex justify="center" wrap align="center" gap={20}>
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

export default TimeWidgets2Mobile;
