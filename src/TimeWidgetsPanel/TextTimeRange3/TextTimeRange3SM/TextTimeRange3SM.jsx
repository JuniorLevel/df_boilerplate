// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgets8 } from '../../TimeWidgets8/TimeWidgets8';

interface ITextTimeRange3SMProps {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange3SM = ({
	text,
	fullDate,
}: ITextTimeRange3SMProps): React.Node => (
	<MediaQuery maxWidth={967}>
		<Flex
			vertical
			gap={20}
			style={{ border: '1px solid black', padding: '10px' }}
		>
			<TextWidget text={text} />
			<TimeWidgets8 fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
