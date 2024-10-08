// @flow

import { Flex } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets7MDProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets7MD = ({
	fullDate,
}: ITimeWidgets7MDProps): React.Node => (
	<MediaQuery minWidth={569} maxWidth={709}>
		<Flex
			vertical
			align="center"
			gap={10}
			style={{
				border: '1px solid black',
				marginBottom: '20px',
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
