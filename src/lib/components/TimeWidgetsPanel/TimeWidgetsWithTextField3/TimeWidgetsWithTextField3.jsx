// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import TimeWidgetsWithTextField3LG from './TimeWidgetsWithTextField3LG/TimeWidgetsWithTextField3LG';
import TimeWidgetsWithTextField3MD from './TimeWidgetsWithTextField3MD/TimeWidgetsWithTextField3MD';
import TextFieldWidget from '../TextFieldWidget/TextFieldWidget';
import TimeWidgets8 from '../TimeWidgets8/TimeWidgets8';

interface ITimeWidgetsWithTextField3Props {
	fullDate: any;
}

const TimeWidgetsWithTextField3 = ({
	fullDate,
}: ITimeWidgetsWithTextField3Props): React$MixedElement => (
	<>
		<MediaQuery minWidth={1425}>
			<Flex
				vertical
				gap={20}
				style={{ border: '1px solid black', padding: '10px' }}
			>
				<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
				<TimeWidgets8 fullDate={fullDate} />
			</Flex>
		</MediaQuery>
		<TimeWidgetsWithTextField3LG fullDate={fullDate} />
		<TimeWidgetsWithTextField3MD fullDate={fullDate} />
	</>
);

export default TimeWidgetsWithTextField3;
