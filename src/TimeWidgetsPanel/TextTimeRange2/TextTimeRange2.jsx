// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TextTimeRange2LG } from './TextTimeRange2LG/TextTimeRange2LG';
import { TextTimeRange2MD } from './TextTimeRange2MD/TextTimeRange2MD';
import { TextTimeRange2SM } from './TextTimeRange2SM/TextTimeRange2SM';
import { TimeWidgetsWeeksAndYearsPanel } from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TextWidget } from '../TextWidget/TextWidget';
import { TimeWidgetsDateWithTimeBlock } from '../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITextTimeRange2Props {
	text: string;
	fullDate: { date: string, time: string };
}

export const TextTimeRange2 = ({
	text,
	fullDate,
}: ITextTimeRange2Props): React.Node => (
	<>
		<MediaQuery minWidth={1300}>
			<Flex
				gap={10}
				align="center"
				style={{ border: '1px solid black', padding: '10px' }}
			>
				<div style={{ flex: '1 0 750px', alignSelf: 'stretch', order: 3 }}>
					<TextWidget text={text} />
				</div>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex wrap gap={10} justify="center" align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</MediaQuery>
		<TextTimeRange2LG text={text} fullDate={fullDate} />
		<TextTimeRange2MD text={text} fullDate={fullDate} />
		<TextTimeRange2SM text={text} fullDate={fullDate} />
	</>
);
