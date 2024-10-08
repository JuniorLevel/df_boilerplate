// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgets5SmToLG } from './TimeWidgets5SmToLG/TimeWidgets5SmToLG';
import { TimeWidgetsWeeksAndYearsPanel } from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets5Props {
	fullDate: { date: string, time: string };
}

export const TimeWidgets5 = ({ fullDate }: ITimeWidgets5Props): React.Node => (
	<>
		<MediaQuery minWidth={1390}>
			<Flex style={{ border: '1px solid black' }}>
				<Flex
					wrap
					align="center"
					justify="space-between"
					style={{ padding: '5px', flex: '0 1 50%' }}
				>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex gap={10}>
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
				</Flex>
				<Flex
					wrap
					gap={10}
					align="center"
					justify="space-between"
					style={{ padding: '5px', flex: '0 1 50%' }}
				>
					<Flex gap={10}>
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
					<Flex wrap gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
		<TimeWidgets5SmToLG fullDate={fullDate} />
	</>
);
