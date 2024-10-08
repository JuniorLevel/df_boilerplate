// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgets8 } from '../TimeWidgets8/TimeWidgets8';
import { TimeRangeWidgetLG } from './TimeRangeWidgetLG/TimeRangeWidgetLG';
import { TimeRangeWidgetMD } from './TimeRangeWidgetMD/TimeRangeWidgetMD';
import { TimeRangeWidgetSM } from './TimeRangeWidgetSM/TimeRangeWidgetSM';

interface ITimeRangeWidgetProps {
	fullDate: { date: string, time: string };
	children: React.Node;
}

export const TimeRangeWidget = ({
	fullDate,
	children,
}: ITimeRangeWidgetProps): React.Node => (
	<>
		<MediaQuery minWidth={1490}>
			<Flex
				vertical
				gap={20}
				style={{ border: '1px solid black', padding: '10px' }}
			>
				{children}
				<TimeWidgets8 fullDate={fullDate} />
			</Flex>
		</MediaQuery>
		<TimeRangeWidgetLG fullDate={fullDate}>{children}</TimeRangeWidgetLG>
		<TimeRangeWidgetMD fullDate={fullDate}>{children}</TimeRangeWidgetMD>
		<TimeRangeWidgetSM fullDate={fullDate}>{children}</TimeRangeWidgetSM>
	</>
);
