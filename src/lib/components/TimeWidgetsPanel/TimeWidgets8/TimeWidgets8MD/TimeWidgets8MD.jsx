// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDateWithTimeBlock from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets8MDProps {
	fullDate: any;
}

const TimeWidgets8MD = ({
	fullDate,
}: ITimeWidgets8MDProps): React$MixedElement => (
	<MediaQuery minWidth={968} maxWidth={1423}>
		<Flex
			vertical
			align="center"
			gap={10}
			style={{
				border: '1px solid black',
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

export default TimeWidgets8MD;
