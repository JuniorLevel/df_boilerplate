// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex } from 'antd';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TextTimeRange2LG.module.scss';

interface ITextTimeRange2LGProps {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange2LG = ({
	text,
	fullDate,
}: ITextTimeRange2LGProps): React.Node => (
	<MediaQuery minWidth={835} maxWidth={1299}>
		<Flex gap={10} align="center" className={styles.container}>
			<Flex className={styles.content}>
				<TextWidget text={text} />
			</Flex>
			<Flex wrap vertical justify="center" gap={10}>
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
