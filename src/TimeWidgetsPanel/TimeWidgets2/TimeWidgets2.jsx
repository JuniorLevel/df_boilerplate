// @flow

import React, { useState } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgetsWeeksAndYearsPanel } from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDaysPanel } from '../TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';
import { TimeWidgetsCustomClock } from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgets2SM } from './TimeWidgets2SM/TimeWidgets2SM';
import { TimeWidgets2MD } from './TimeWidgets2MD/TimeWidgets2MD';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgets2Props {
	fullDate: { date: string, time: string };
}

export const TimeWidgets2 = ({ fullDate }: ITimeWidgets2Props): React.Node => {
	const [isShowWeeksPanel] = useState(false);
	return (
		<>
			<MediaQuery minWidth={865}>
				<Flex
					wrap
					style={{ border: '1px solid black', padding: '10px' }}
					gap={5}
				>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex align="center" style={{ padding: '5px' }}>
						<Flex wrap align="center" gap={10}>
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
			<TimeWidgets2MD fullDate={fullDate} />
			<TimeWidgets2SM fullDate={fullDate} />
		</>
	);
};
