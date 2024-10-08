// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITextTimeRange1SMProps {
	text: string;
	fullDate: any;
}

export const TextTimeRange1SM = ({
	text,
	fullDate,
}: ITextTimeRange1SMProps): React.Node => (
	<MediaQuery maxWidth={657}>
		<Flex
			gap={10}
			align="center"
			vertical
			style={{ border: '1px solid black', padding: '10px' }}
		>
			<Flex style={{ alignSelf: 'stretch' }}>
				<div style={{ width: '100%', alignSelf: 'stretch' }}>
					<TextWidget text={text} />
				</div>
			</Flex>
			<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
			<Flex gap={10} vertical align="center">
				<TimeWidgetsWeeksAndYearsPanel />
				<TimeWidgetsCustomClock />
			</Flex>
		</Flex>
	</MediaQuery>
);
