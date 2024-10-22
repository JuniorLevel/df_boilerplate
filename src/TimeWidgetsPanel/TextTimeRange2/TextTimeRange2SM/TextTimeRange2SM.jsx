// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TextTimeRange2SM.module.scss';

interface ITextTimeRange2SMProps {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange2SM = ({
	text,
	fullDate,
}: ITextTimeRange2SMProps): React.Node => (
	<MediaQuery maxWidth={657}>
		<Flex gap={10} align="center" vertical className={styles.container}>
			<Flex className={styles.content}>
				<TextWidget text={text} />
			</Flex>
			<Flex gap={10} vertical align="center">
				<Flex gap={10} vertical className={styles.timeBlock}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
				<Flex
					gap={10}
					vertical
					align="center"
					className={styles.weeksAndYearsBlock}
				>
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);
