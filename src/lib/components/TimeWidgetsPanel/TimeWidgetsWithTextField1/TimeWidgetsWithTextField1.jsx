// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TimeWidgetsWithTextField1LG } from './TimeWidgetsWithTextField1LG/TimeWidgetsWithTextField1LG';
import { TimeWidgetsWithTextField1MD } from './TimeWidgetsWithTextField1MD/TimeWidgetsWithTextField1MD';
import { TimeWidgetsWithTextField1SM } from './TimeWidgetsWithTextField1SM/TimeWidgetsWithTextField1SM';
import { TimeWidgetsWeeksAndYearsPanel } from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TextFieldWidget } from '../TextFieldWidget/TextFieldWidget';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgetsWithTextField1Props {
	fullDate: any;
}

export const TimeWidgetsWithTextField1 = ({
	fullDate,
}: ITimeWidgetsWithTextField1Props): React$MixedElement => (
	<>
		<MediaQuery minWidth={1351}>
			<Flex
				gap={10}
				align="center"
				style={{ border: '1px solid black', padding: '10px' }}
			>
				<div style={{ width: '100%', alignSelf: 'stretch' }}>
					<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
				</div>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={10} align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</MediaQuery>
		<TimeWidgetsWithTextField1LG fullDate={fullDate} />
		<TimeWidgetsWithTextField1MD fullDate={fullDate} />
		<TimeWidgetsWithTextField1SM fullDate={fullDate} />
	</>
);
