// @flow

import { Flex } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets8SMProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets8SM = ({
	fullDate,
}: ITimeWidgets8SMProps): React.Node => (
	<MediaQuery maxWidth={967}>
		<Flex vertical gap={10}>
			<Flex vertical align="center" gap={10}>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<TimeWidgetsCustomClock />
			</Flex>
			<Flex vertical align="center" gap={10}>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<TimeWidgetsCustomClock />
			</Flex>
			<Flex justify="center">
				<TimeWidgetsWeeksAndYearsPanel />
			</Flex>
		</Flex>
	</MediaQuery>
);
