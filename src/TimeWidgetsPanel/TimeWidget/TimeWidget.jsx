// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetLG } from './TimeWidgetLG/TimeWidgetLG';
import { TimeWidgetMD } from './TimeWidgetMD/TimeWidgetMD';
import { TimeWidgetSM } from './TimeWidgetSM/TimeWidgetSM';
import styles from './TimeWidget.module.scss';

interface ITimeWidgetProps {
	fullDate: { date: string, time: string };
	children: React.Node;
}

export const TimeWidget = ({
	fullDate,
	children,
}: ITimeWidgetProps): React.Node => (
	<>
		<MediaQuery minWidth={1285}>
			<Flex gap={10} align="center" className={styles.container}>
				<div className={styles.content}>{children}</div>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={10} align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</MediaQuery>
		<TimeWidgetLG fullDate={fullDate}>{children}</TimeWidgetLG>
		<TimeWidgetMD fullDate={fullDate}>{children}</TimeWidgetMD>
		<TimeWidgetSM fullDate={fullDate}>{children}</TimeWidgetSM>
	</>
);
