// @flow

import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import React from 'react';
import TextFieldWidget from '../../TextFieldWidget/TextFieldWidget';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDateWithTimeBlock from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgetsWithTextField1MDProps {
	fullDate: any;
}

const TimeWidgetsWithTextField1MD = ({
	fullDate,
}: ITimeWidgetsWithTextField1MDProps): React$MixedElement => (
	<MediaQuery minWidth={658} maxWidth={834}>
		<Flex
			gap={10}
			align="center"
			style={{ border: '1px solid black', padding: '10px' }}
		>
			<Flex style={{ width: '100%', alignSelf: 'stretch' }}>
				<div style={{ width: '100%', alignSelf: 'stretch' }}>
					<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
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

export default TimeWidgetsWithTextField1MD;
