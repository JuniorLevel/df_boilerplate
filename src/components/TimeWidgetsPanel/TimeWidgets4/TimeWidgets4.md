Компонент TimeWidgets4
<br>
<br>

```jsx static
// @flow
import React from 'react';
import { Flex, Typography } from 'antd';
import MediaQuery from 'react-responsive';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets4SmToLg = (): React$MixedElement => {
	const { Text } = Typography;
	return (
		<MediaQuery maxWidth={1002}>
			<Flex justify="center" wrap style={{ border: '1px solid black' }}>
				<Flex
					wrap
					gap={10}
					justify="center"
					align="center"
					style={{ padding: '5px', flex: '0 1 50%' }}
				>
					<Flex wrap gap={10} justify="center">
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
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
				<Flex
					wrap
					gap={10}
					justify="center"
					style={{ padding: '5px', flex: '0 1 50%' }}
				>
					<TimeWidgetsWeeksAndYearsPanel />
					<Flex wrap gap={10} style={{ order: -1 }} justify="center">
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

export default TimeWidgets4SmToLg;
```

<br>
<br>

```jsx
import React from 'react';
import { Flex, Typography } from 'antd';
import MediaQuery from 'react-responsive';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const { Text } = Typography;
<Flex justify="center" style={{ border: '1px solid black' }}>
	<Flex
		wrap
		gap={10}
		justify="center"
		align="center"
		style={{ padding: '5px', flex: '0 1 50%' }}
	>
		<Flex wrap gap={10} justify="center">
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
		<TimeWidgetsWeeksAndYearsPanel />
	</Flex>
	<Flex
		wrap
		gap={10}
		justify="center"
		style={{ padding: '5px', flex: '0 1 50%' }}
	>
		<TimeWidgetsWeeksAndYearsPanel />
		<Flex wrap gap={10} style={{ order: -1 }} justify="center">
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

export default TimeWidgets4SmToLg;
```
