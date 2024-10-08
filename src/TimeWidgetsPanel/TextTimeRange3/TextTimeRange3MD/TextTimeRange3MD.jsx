// @flow

import { Flex } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgets8 } from '../../TimeWidgets8/TimeWidgets8';

interface ITextTimeRange3MDProps {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange3MD = ({
	text,
	fullDate,
}: ITextTimeRange3MDProps): React.Node => (
	<MediaQuery minWidth={968} maxWidth={1223}>
		<Flex
			align="center"
			gap={20}
			style={{ border: '1px solid black', padding: '10px' }}
			justify="center"
		>
			<div style={{ flex: '1 1 50%', alignSelf: 'stretch' }}>
				<TextWidget text={text} />
			</div>
			<TimeWidgets8 fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
