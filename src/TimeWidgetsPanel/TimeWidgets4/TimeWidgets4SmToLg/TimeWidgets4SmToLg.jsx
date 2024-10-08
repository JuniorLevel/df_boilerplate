// @flow
import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets4SmToLgProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets4SmToLg = ({
	fullDate,
}: ITimeWidgets4SmToLgProps): React.Node => (
	<MediaQuery maxWidth={1099}>
		<Flex justify="center" wrap style={{ border: '1px solid black' }}>
			<Flex
				vertical
				wrap
				gap={10}
				justify="center"
				align="center"
				style={{ padding: '5px', flex: '0 1 50%' }}
			>
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
				<TimeWidgetsWeeksAndYearsPanel />
			</Flex>
			<Flex
				vertical
				wrap
				gap={10}
				justify="center"
				align="center"
				style={{ padding: '5px', flex: '0 1 50%' }}
			>
				<Flex wrap gap={10} justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
				<TimeWidgetsWeeksAndYearsPanel />
			</Flex>
		</Flex>
	</MediaQuery>
);
