// @flow

import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import React from 'react';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITextTimeRange1MDProps {
	text: string;
	fullDate: any;
}

export const TextTimeRange1MD = ({
	text,
	fullDate,
}: ITextTimeRange1MDProps): React.Node => (
	<MediaQuery minWidth={658} maxWidth={834}>
		<Flex
			gap={10}
			align="center"
			style={{ border: '1px solid black', padding: '10px' }}
		>
			<Flex style={{ width: '100%', alignSelf: 'stretch' }}>
				<div style={{ width: '100%', alignSelf: 'stretch' }}>
					<TextWidget text={text} />
				</div>
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
