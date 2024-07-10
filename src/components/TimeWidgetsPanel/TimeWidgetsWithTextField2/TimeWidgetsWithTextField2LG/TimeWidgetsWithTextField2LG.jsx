// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex } from 'antd';
import TextFieldWidget from '../../TextFieldWidget/TextFieldWidget';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgetsWithTextField2LG = (): React$MixedElement => (
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
			<Flex gap={10} vertical style={{ fontSize: '1.8em', order: 1 }}>
				<Flex gap={10}>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						13
					</span>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						08
					</span>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						99
					</span>
				</Flex>
				<Flex gap={10}>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						20
					</span>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						55
					</span>
					<span
						style={{
							border: '1px solid black',
							padding: '10px',
							fontSize: '1.5em',
						}}
					>
						55
					</span>
				</Flex>
			</Flex>
			<Flex gap={10} vertical align="center" style={{ order: 2 }}>
				<TimeWidgetsWeeksAndYearsPanel />
				<TimeWidgetsCustomClock />
			</Flex>
		</Flex>
	</MediaQuery>
);

export default TimeWidgetsWithTextField2LG;
