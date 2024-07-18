// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex, Typography } from 'antd';
import TextFieldWidget from '../../TextFieldWidget/TextFieldWidget';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgetsWithTextField2LG = (): React$MixedElement => {
	const { Text } = Typography;
	return (
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
				<Flex gap={10}>
					<Flex gap={10} vertical style={{ order: 1 }}>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								13
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								08
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								99
							</Text>
						</Flex>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								20
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
						</Flex>
					</Flex>
					<Flex gap={10} vertical align="center" style={{ order: 2 }}>
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgetsWithTextField2LG;
