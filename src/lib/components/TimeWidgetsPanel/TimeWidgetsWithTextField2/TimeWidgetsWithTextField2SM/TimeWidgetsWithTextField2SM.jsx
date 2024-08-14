// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TextFieldWidget } from '../../TextFieldWidget/TextFieldWidget';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgetsWithTextField2SMProps {
	fullDate: any;
}

export const TimeWidgetsWithTextField2SM = ({
	fullDate,
}: ITimeWidgetsWithTextField2SMProps): React$MixedElement => (
	<MediaQuery maxWidth={657}>
		<Flex
			gap={10}
			align="center"
			vertical
			style={{
				border: '1px solid black',
				padding: '10px',
			}}
		>
			<Flex style={{ width: '100%', order: 3 }}>
				<div style={{ width: '100%' }}>
					<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
				</div>
			</Flex>
			<Flex gap={10} vertical align="center">
				<Flex gap={10} vertical style={{ order: 2 }}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
				<Flex
					gap={10}
					vertical
					align="center"
					style={{ flexDirection: 'column-reverse', order: 1 }}
				>
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);
