// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex } from 'antd';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITextTimeRange2LGProps {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange2LG = ({
	text,
	fullDate,
}: ITextTimeRange2LGProps): React.Node => (
	<MediaQuery minWidth={835} maxWidth={1299}>
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
			<Flex wrap vertical justify="center" gap={10}>
				<Flex gap={10} vertical style={{ order: 1 }}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
				<Flex gap={10} vertical align="center" style={{ order: 2 }}>
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);
