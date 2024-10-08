// @flow

import { Flex } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import { TextWidget } from '../../TextWidget/TextWidget';
import { TimeWidgets8 } from '../../TimeWidgets8/TimeWidgets8';

interface ITextTimeRange3LGProps {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange3LG = ({
	text,
	fullDate,
}: ITextTimeRange3LGProps): React.Node => (
	<MediaQuery minWidth={1224} maxWidth={1489}>
		<Flex
			align="center"
			gap={20}
			style={{ border: '1px solid black', padding: '10px' }}
			justify="center"
		>
			<div style={{ flex: '1 1 40%', alignSelf: 'stretch' }}>
				<TextWidget text={text} />
			</div>
			<TimeWidgets8 fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
