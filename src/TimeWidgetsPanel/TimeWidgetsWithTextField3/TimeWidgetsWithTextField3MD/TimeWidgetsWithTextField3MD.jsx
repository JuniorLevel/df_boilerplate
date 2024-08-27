// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TextFieldWidget } from '../../TextFieldWidget/TextFieldWidget';
import { TimeWidgets8 } from '../../TimeWidgets8/TimeWidgets8';

interface ITimeWidgetsWithTextField3MDProps {
	fullDate: any;
}

export const TimeWidgetsWithTextField3MD = ({
	fullDate,
}: ITimeWidgetsWithTextField3MDProps): React$MixedElement => (
	<MediaQuery maxWidth={967}>
		<Flex
			vertical
			gap={20}
			style={{ border: '1px solid black', padding: '10px' }}
		>
			<div style={{ width: '100%' }}>
				<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
			</div>
			<TimeWidgets8 fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
