// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex } from 'antd';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITextTimeRange2MDProps {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange2MD = ({
	text,
	fullDate,
}: ITextTimeRange2MDProps): React.Node => (
	<MediaQuery minWidth={658} maxWidth={834}>
		<Flex
			gap={10}
			align="center"
			style={{ border: '1px solid black', padding: '10px' }}
		>
			<Flex style={{ width: '100%', alignSelf: 'stretch', order: 3 }}>
				<div style={{ width: '100%' }}>
					<TextWidget text={text} />
				</div>
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
