// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets8MDProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets8MD = ({
	fullDate,
}: ITimeWidgets8MDProps): React.Node => (
	<MediaQuery minWidth={968} maxWidth={1223}>
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
	</MediaQuery>
);
