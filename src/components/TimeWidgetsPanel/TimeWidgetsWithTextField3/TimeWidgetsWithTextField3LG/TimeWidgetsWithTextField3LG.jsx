// @flow

import { Flex } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import TextFieldWidget from '../../TextFieldWidget/TextFieldWidget';
import TimeWidgets8 from '../../TimeWidgets8/TimeWidgets8';

const TimeWidgetsWithTextField3LG = (): React$MixedElement => (
	<MediaQuery minWidth={968} maxWidth={1769}>
		<Flex
			align="center"
			gap={20}
			style={{ border: '1px solid black', padding: '10px' }}
			justify="center"
		>
			<div style={{ width: '50%', alignSelf: 'stretch' }}>
				<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
			</div>
			<TimeWidgets8 />
		</Flex>
	</MediaQuery>
);

export default TimeWidgetsWithTextField3LG;
