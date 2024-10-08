// @flow

import React, { useState } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDaysPanel } from '../../TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets2MDProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets2MD = ({
	fullDate,
}: ITimeWidgets2MDProps): React.Node => {
	const [isShowWeeksPanel] = useState(false);

	return (
		<MediaQuery minWidth={782} maxWidth={864}>
			<Flex
				style={{ border: '1px solid black' }}
				gap={5}
				justify="space-evenly"
			>
				<div style={{ padding: '5px' }}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</div>
				<Flex justify="center" align="center" style={{ padding: '5px' }}>
					<Flex vertical align="center" gap={10}>
						<div style={{ border: '1px solid black', padding: '5px' }}>
							{isShowWeeksPanel ? (
								<TimeWidgetsWeeksAndYearsPanel />
							) : (
								<TimeWidgetsDaysPanel />
							)}
						</div>
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
