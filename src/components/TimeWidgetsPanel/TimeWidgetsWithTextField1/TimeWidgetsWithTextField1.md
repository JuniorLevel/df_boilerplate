Компонент TimeWidgetsWithTextField1
<br>
<br>

```jsx static
// @flow

import { Flex, Typography } from 'antd';
import MediaQuery from 'react-responsive';
import React from 'react';
import TextFieldWidget from '../../TextFieldWidget/TextFieldWidget';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgetsWithTextField1MD = (): React$MixedElement => {
	const { Text } = Typography;

	return (
		<MediaQuery minWidth={658} maxWidth={834}>
			<Flex
				gap={10}
				align="center"
				style={{ border: '1px solid black', padding: '10px' }}
			>
				<Flex style={{ width: '100%', alignSelf: 'stretch' }}>
					<div style={{ width: '100%', alignSelf: 'stretch' }}>
						<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
					</div>
				</Flex>
				<Flex gap={10} vertical>
					<Flex gap={10} vertical align="center">
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
					<Flex gap={10} vertical align="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgetsWithTextField1MD;
```

<br>
<br>

```jsx
// @flow

import { Flex, Typography } from 'antd';
import React from 'react';
import TextFieldWidget from '../TextFieldWidget/TextFieldWidget';
import TimeWidgetsCustomClock from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const { Text } = Typography;

<Flex
	gap={10}
	align="center"
	style={{ border: '1px solid black', padding: '10px' }}
>
	<Flex style={{ width: '100%', alignSelf: 'stretch' }}>
		<div style={{ width: '100%', alignSelf: 'stretch' }}>
			<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
		</div>
	</Flex>
	<Flex gap={10} vertical>
		<Flex gap={10} vertical align="center">
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
		<Flex gap={10} vertical align="center">
			<TimeWidgetsWeeksAndYearsPanel />
			<TimeWidgetsCustomClock />
		</Flex>
	</Flex>
</Flex>;
```
