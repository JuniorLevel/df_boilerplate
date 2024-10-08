// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgets8 } from '../../TimeWidgets8/TimeWidgets8';

interface ITimeRangeWidgetLGProps {
	fullDate: { date: string, time: string };
	children: React.Node;
}

export const TimeRangeWidgetLG = ({
	fullDate,
	children,
}: ITimeRangeWidgetLGProps): React.Node => (
	<MediaQuery minWidth={1224} maxWidth={1489}>
		<Flex
			align="center"
			gap={20}
			style={{ border: '1px solid black', padding: '10px' }}
			justify="center"
		>
			<div style={{ flex: '1 1 40%', alignSelf: 'stretch' }}>{children}</div>
			<TimeWidgets8 fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
