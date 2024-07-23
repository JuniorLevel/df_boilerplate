Компонент TimeWidgets5
<br>
<br>

```jsx static
// @flow

import { Flex, Typography } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets5SmToLG = (): React$MixedElement => {
	const { Text } = Typography;

	return (
		<MediaQuery maxWidth={1389}>
			<Flex
				wrap
				gap={10}
				justify="space-evenly"
				style={{ border: '1px solid black' }}
			>
				<Flex vertical gap={10} align="center" style={{ padding: '5px' }}>
					<Flex vertical gap={10} wrap justify="center">
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
					<Flex wrap gap={10} justify="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
				</Flex>
				<Flex vertical gap={10} align="center" style={{ padding: '5px' }}>
					<Flex wrap gap={10} justify="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
					<Flex vertical gap={10} style={{ order: -1 }} wrap justify="center">
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								23
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								09
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
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets5SmToLG;
```

<br>
<br>

```jsx
// @flow
import { Flex, Typography } from 'antd';
import React from 'react';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const { Text } = Typography;
<Flex
	wrap
	gap={10}
	justify="space-evenly"
	style={{ border: '1px solid black' }}
>
	<Flex vertical gap={10} align="center" style={{ padding: '5px' }}>
		<Flex vertical gap={10} wrap justify="center">
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
		<Flex wrap gap={10} justify="center">
			<TimeWidgetsWeeksAndYearsPanel />
			<TimeWidgetsWeeksAndYearsPanel />
		</Flex>
	</Flex>
	<Flex vertical gap={10} align="center" style={{ padding: '5px' }}>
		<Flex wrap gap={10} justify="center">
			<TimeWidgetsWeeksAndYearsPanel />
			<TimeWidgetsWeeksAndYearsPanel />
		</Flex>
		<Flex vertical gap={10} style={{ order: -1 }} wrap justify="center">
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					23
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					09
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
	</Flex>
</Flex>;
```
