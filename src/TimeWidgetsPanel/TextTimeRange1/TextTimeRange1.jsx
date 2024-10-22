// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TextTimeRange1LG } from './TextTimeRange1LG/TextTimeRange1LG';
import { TextTimeRange1MD } from './TextTimeRange1MD/TextTimeRange1MD';
import { TextTimeRange1SM } from './TextTimeRange1SM/TextTimeRange1SM';
import { TimeWidgetsWeeksAndYearsPanel } from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TextWidget } from '../TextWidget/TextWidget';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TextTimeRange1.module.scss';

interface ITextTimeRange1Props {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange1 = ({
	text,
	fullDate,
}: ITextTimeRange1Props): React.Node => (
	<>
		<MediaQuery minWidth={1224}>
			<Flex gap={10} align="center" className={styles.container}>
				<div className={styles.content}>
					<TextWidget text={text} />
				</div>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex wrap gap={10} justify="center" align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</MediaQuery>
		<TextTimeRange1LG text={text} fullDate={fullDate} />
		<TextTimeRange1MD text={text} fullDate={fullDate} />
		<TextTimeRange1SM text={text} fullDate={fullDate} />
	</>
);
