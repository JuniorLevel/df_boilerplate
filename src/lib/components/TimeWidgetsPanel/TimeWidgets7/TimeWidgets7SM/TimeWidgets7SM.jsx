// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets7SMProps {
	fullDate: any;
}

export const TimeWidgets7SM = ({
	fullDate,
}: ITimeWidgets7SMProps): React$MixedElement => (
	<MediaQuery maxWidth={568}>
		<Flex
			vertical
			gap={10}
			style={{
				border: '1px solid black',
				marginBottom: '20px',
				padding: '5px',
			}}
		>
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
