// @flow

import { Flex } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets5SmToLGProps {
	fullDate: any;
}

export const TimeWidgets5SmToLG = ({
	fullDate,
}: ITimeWidgets5SmToLGProps): React$MixedElement => (
	<MediaQuery maxWidth={1389}>
		<Flex
			wrap
			gap={10}
			justify="space-evenly"
			style={{ border: '1px solid black' }}
		>
			<Flex vertical gap={10} align="center" style={{ padding: '5px' }}>
				<Flex vertical gap={10} wrap justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
			</Flex>
			<Flex vertical gap={10} align="center" style={{ padding: '5px' }}>
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
				<Flex vertical gap={10} style={{ order: -1 }} wrap justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);
