// @flow
import React, { useState } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDaysPanel from '../../TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';

const TimeWidgets2XL = (): React$MixedElement => {
	const [isShowWeeksPanel] = useState(false);

	return (
		<MediaQuery minWidth={1054}>
			<Flex
				wrap
				style={{ border: '1px solid black', marginBottom: '20px' }}
				gap={5}
			>
				<Flex
					wrap
					gap={10}
					align="center"
					style={{ padding: '5px', fontSize: '2em' }}
				>
					<Flex gap={10}>
						<span
							style={{
								border: '1px solid black',
								padding: '10px',
								fontSize: '1.5em',
							}}
						>
							13
						</span>
						<span
							style={{
								border: '1px solid black',
								padding: '10px',
								fontSize: '1.5em',
							}}
						>
							08
						</span>
						<span
							style={{
								border: '1px solid black',
								padding: '10px',
								fontSize: '1.5em',
							}}
						>
							99
						</span>
					</Flex>
					<Flex gap={10}>
						<span
							style={{
								border: '1px solid black',
								padding: '10px',
								fontSize: '1.5em',
							}}
						>
							20
						</span>
						<span
							style={{
								border: '1px solid black',
								padding: '10px',
								fontSize: '1.5em',
							}}
						>
							55
						</span>
						<span
							style={{
								border: '1px solid black',
								padding: '10px',
								fontSize: '1.5em',
							}}
						>
							55
						</span>
					</Flex>
				</Flex>
				<Flex align="center" style={{ padding: '5px' }}>
					<Flex wrap align="center" gap={10}>
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

export default TimeWidgets2XL;
