// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgets8 } from '../../TimeWidgets8/TimeWidgets8';

interface ITimeRangeWidgetSMProps {
	fullDate: { date: string, time: string };
	children: React.Node;
}

export const TimeRangeWidgetSM = ({
	fullDate,
	children,
}: ITimeRangeWidgetSMProps): React.Node => (
	<MediaQuery maxWidth={967}>
		<Flex
			vertical
			gap={20}
			style={{ border: '1px solid black', padding: '10px' }}
		>
			{children}
			<TimeWidgets8 fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
