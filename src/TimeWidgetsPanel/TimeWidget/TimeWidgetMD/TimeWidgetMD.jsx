// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

interface ITimeWidgetMDProps {
	fullDate: { date: string, time: string };
	children: React.Node;
}

export const TimeWidgetMD = ({
	fullDate,
	children,
}: ITimeWidgetMDProps): React.Node => (
	<MediaQuery minWidth={640} maxWidth={829}>
		<Flex
			wrap
			align="center"
			gap={20}
			style={{ border: '1px solid black', padding: '10px' }}
			justify="center"
		>
			<div style={{ flex: '1 0 50%' }}>{children}</div>
			<Flex
				vertical
				align="center"
				gap={10}
				style={{
					padding: '5px',
				}}
			>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={50} align="center">
					<TimeWidgetsCustomClock />
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
			</Flex>
		</Flex>
	</MediaQuery>
);
