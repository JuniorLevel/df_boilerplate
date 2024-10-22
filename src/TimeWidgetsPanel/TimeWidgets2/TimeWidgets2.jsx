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
import styles from './TimeWidgets2.module.scss';

interface ITimeWidgets2Props {
	fullDate: { date: string, time: string };
}

export const TimeWidgets2 = ({ fullDate }: ITimeWidgets2Props): React.Node => {
	const [isShowWeeksPanel] = useState(false);
	return (
		<>
			<MediaQuery minWidth={865}>
				<Flex wrap className={styles.container} gap={5}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex align="center">
						<Flex wrap align="center" gap={10}>
							<div className={styles.panel}>
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
