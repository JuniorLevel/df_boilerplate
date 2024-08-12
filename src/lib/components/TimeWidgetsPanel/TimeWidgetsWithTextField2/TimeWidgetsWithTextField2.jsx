// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import TimeWidgetsWithTextField2LG from './TimeWidgetsWithTextField2LG/TimeWidgetsWithTextField2LG';
import TimeWidgetsWithTextField2MD from './TimeWidgetsWithTextField2MD/TimeWidgetsWithTextField2MD';
import TimeWidgetsWithTextField2SM from './TimeWidgetsWithTextField2SM/TimeWidgetsWithTextField2SM';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsCustomClock from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TextFieldWidget from '../TextFieldWidget/TextFieldWidget';
import TimeWidgetsDateWithTimeBlock from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgetsWithTextField2Props {
	fullDate: any;
}

const TimeWidgetsWithTextField2 = ({
	fullDate,
}: ITimeWidgetsWithTextField2Props): React$MixedElement => (
	<>
		<MediaQuery minWidth={1351}>
			<Flex
				gap={10}
				align="center"
				style={{ border: '1px solid black', padding: '10px' }}
			>
				<div style={{ width: '100%', alignSelf: 'stretch', order: 3 }}>
					<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
				</div>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<TimeWidgetsWeeksAndYearsPanel />
				<TimeWidgetsCustomClock />
			</Flex>
		</MediaQuery>
		<TimeWidgetsWithTextField2LG
			fullDate={{ date: '13.08.99', time: '20:55:55' }}
		/>
		<TimeWidgetsWithTextField2MD
			fullDate={{ date: '13.08.99', time: '20:55:55' }}
		/>
		<TimeWidgetsWithTextField2SM
			fullDate={{ date: '13.08.99', time: '20:55:55' }}
		/>
	</>
);

export default TimeWidgetsWithTextField2;
