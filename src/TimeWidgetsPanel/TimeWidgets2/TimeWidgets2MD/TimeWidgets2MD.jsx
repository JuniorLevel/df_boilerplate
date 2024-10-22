// @flow

import React, { useState } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDaysPanel } from '../../TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TimeWidgets2MD.module.scss';

interface ITimeWidgets2MDProps {
	fullDate: { date: string, time: string };
}

export const TimeWidgets2MD = ({
	fullDate,
}: ITimeWidgets2MDProps): React.Node => {
	const [isShowWeeksPanel] = useState(false);

	return (
		<MediaQuery minWidth={782} maxWidth={864}>
			<Flex className={styles.container} gap={5} justify="space-evenly">
				<div>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</div>
				<Flex justify="center" align="center">
					<Flex vertical align="center" gap={10}>
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
	);
};
