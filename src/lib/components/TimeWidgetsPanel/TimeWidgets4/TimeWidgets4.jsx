// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import TimeWidgets4SmToLg from './TimeWidgets4SmToLg/TimeWidgets4SmToLg';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDateWithTimeBlock from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets4Props {
	fullDate: any;
}

const TimeWidgets4 = ({ fullDate }: ITimeWidgets4Props): React$MixedElement => (
	<>
		<MediaQuery minWidth={1100}>
			<Flex style={{ border: '1px solid black' }}>
				<Flex
					gap={10}
					align="center"
					justify="space-between"
					style={{ padding: '5px', flex: '0 1 50%' }}
				>
					<Flex gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
				<Flex
					gap={10}
					align="center"
					justify="space-between"
					style={{ padding: '5px', flex: '0 1 50%' }}
				>
					<TimeWidgetsWeeksAndYearsPanel />
					<Flex gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
		<TimeWidgets4SmToLg fullDate={fullDate} />
	</>
);

export default TimeWidgets4;
