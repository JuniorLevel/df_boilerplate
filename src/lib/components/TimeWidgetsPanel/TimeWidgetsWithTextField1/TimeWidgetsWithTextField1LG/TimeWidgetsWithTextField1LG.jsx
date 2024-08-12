// @flow

import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import React from 'react';
import TextFieldWidget from '../../TextFieldWidget/TextFieldWidget';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDateWithTimeBlock from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgetsWithTextField1LGProps {
	fullDate: any;
}

const TimeWidgetsWithTextField1LG = ({
	fullDate,
}: ITimeWidgetsWithTextField1LGProps): React$MixedElement => (
	<MediaQuery minWidth={835} maxWidth={1350}>
		<Flex
			gap={10}
			align="center"
			style={{ border: '1px solid black', padding: '10px' }}
		>
			<div style={{ width: '100%', alignSelf: 'stretch' }}>
				<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
			</div>
			<Flex gap={10} wrap justify="center" align="start">
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={10} vertical align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);

export default TimeWidgetsWithTextField1LG;
