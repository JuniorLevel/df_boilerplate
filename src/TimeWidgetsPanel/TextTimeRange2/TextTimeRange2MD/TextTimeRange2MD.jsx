// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex } from 'antd';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TextTimeRange2MD.module.scss';

interface ITextTimeRange2MDProps {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange2MD = ({
	text,
	fullDate,
}: ITextTimeRange2MDProps): React.Node => (
	<MediaQuery minWidth={658} maxWidth={834}>
		<Flex gap={10} align="center" className={styles.container}>
			<Flex className={styles.content}>
				<TextWidget text={text} />
			</Flex>
			<Flex gap={10} vertical>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={10} vertical align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);
