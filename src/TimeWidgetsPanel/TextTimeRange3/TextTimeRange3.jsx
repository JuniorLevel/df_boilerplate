// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TextTimeRange3LG } from './TextTimeRange3LG/TextTimeRange3LG';
import { TextTimeRange3MD } from './TextTimeRange3MD/TextTimeRange3MD';
import { TextWidget } from '../TextWidget/TextWidget';
import { TimeWidgets8 } from '../TimeWidgets8/TimeWidgets8';
import { TextTimeRange3SM } from './TextTimeRange3SM/TextTimeRange3SM';

interface ITextTimeRange3Props {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange3 = ({
	text,
	fullDate,
}: ITextTimeRange3Props): React.Node => (
	<>
		<MediaQuery minWidth={1490}>
			<Flex
				vertical
				gap={20}
				style={{ border: '1px solid black', padding: '10px' }}
			>
				<TextWidget text={text} />
				<TimeWidgets8 fullDate={fullDate} />
			</Flex>
		</MediaQuery>
		<TextTimeRange3LG text={text} fullDate={fullDate} />
		<TextTimeRange3MD text={text} fullDate={fullDate} />
		<TextTimeRange3SM text={text} fullDate={fullDate} />
	</>
);
