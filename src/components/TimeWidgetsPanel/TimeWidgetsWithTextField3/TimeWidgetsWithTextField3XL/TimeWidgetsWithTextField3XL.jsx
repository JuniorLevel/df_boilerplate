// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import TextFieldWidget from '../../TextFieldWidget/TextFieldWidget';
import TimeWidgets8 from '../../TimeWidgets8/TimeWidgets8';

const TimeWidgetsWithTextField3XL = (): React$MixedElement => (
	<MediaQuery minWidth={1425}>
		<Flex
			vertical
			gap={20}
			style={{ border: '1px solid black', padding: '10px' }}
		>
			<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
			<TimeWidgets8 />
		</Flex>
	</MediaQuery>
);

export default TimeWidgetsWithTextField3XL;
