// @flow

import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import React from 'react';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TextTimeRange1LG.module.scss';

interface ITextTimeRange1LGProps {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange1LG = ({
	text,
	fullDate,
}: ITextTimeRange1LGProps): React.Node => (
	<MediaQuery minWidth={835} maxWidth={1223}>
		<Flex gap={10} align="center" className={styles.container}>
			<div className={styles.content}>
				<TextWidget text={text} />
			</div>
			<Flex gap={10} vertical wrap justify="center">
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={10} vertical align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);
