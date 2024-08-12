// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import TextFieldWidget from '../../TextFieldWidget/TextFieldWidget';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDateWithTimeBlock from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgetsWithTextField1SMProps {
	fullDate: any;
}

const TimeWidgetsWithTextField1SM = ({
	fullDate,
}: ITimeWidgetsWithTextField1SMProps): React$MixedElement => (
	<MediaQuery maxWidth={657}>
		<Flex
			gap={10}
			align="center"
			vertical
			style={{ border: '1px solid black', padding: '10px' }}
		>
			<Flex style={{ alignSelf: 'stretch' }}>
				<div style={{ width: '100%', alignSelf: 'stretch' }}>
					<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
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

export default TimeWidgetsWithTextField1SM;
