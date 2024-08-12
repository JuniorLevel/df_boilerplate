// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex } from 'antd';
import TextFieldWidget from '../../TextFieldWidget/TextFieldWidget';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDateWithTimeBlock from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITimeWidgetsWithTextField2LGProps {
	fullDate: any;
}

const TimeWidgetsWithTextField2LG = ({
	fullDate,
}: ITimeWidgetsWithTextField2LGProps): React$MixedElement => (
	<MediaQuery minWidth={835} maxWidth={1350}>
		<Flex
			gap={10}
			align="center"
			style={{ border: '1px solid black', padding: '10px' }}
		>
			<Flex style={{ width: '100%', alignSelf: 'stretch', order: 3 }}>
				<div style={{ width: '100%' }}>
					<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
				</div>
			</Flex>
			<Flex wrap justify="center" gap={10}>
				<Flex gap={10} vertical style={{ order: 1 }}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
				<Flex gap={10} vertical align="center" style={{ order: 2 }}>
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</Flex>
	</MediaQuery>
);

export default TimeWidgetsWithTextField2LG;
