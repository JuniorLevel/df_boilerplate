// @flow

import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import React from 'react';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import styles from './TextTimeRange1MD.module.scss';

interface ITextTimeRange1MDProps {
	text: string;
	fullDate: any;
}

export const TextTimeRange1MD = ({
	text,
	fullDate,
}: ITextTimeRange1MDProps): React.Node => (
	<MediaQuery minWidth={658} maxWidth={834}>
		<Flex gap={10} align="center" className={styles.container}>
			<Flex className={styles.content}>
				<TextWidget text={text} />
			</Flex>
			<Flex gap={10} wrap vertical>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={10} vertical align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);
