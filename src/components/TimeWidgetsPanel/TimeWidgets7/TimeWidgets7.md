Компонент TimeWidgets7
<br>
<br>

```jsx static
// @flow

import { Flex, Progress, Typography } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import TimeWidgetsCustomClock from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';

const TimeWidget7LG = (): React$MixedElement => {
	const { Text } = Typography;
	return (
		<MediaQuery minWidth={710} maxWidth={1164}>
			<Flex
				vertical
				gap={10}
				align="center"
				style={{
					border: '1px solid black',
					marginBottom: '20px',
					padding: '5px',
				}}
			>
				<Flex gap={50}>
					<Flex
						vertical
						justify="center"
						align="center"
						gap={10}
						style={{ padding: '5px' }}
					>
						<Flex gap={10}>
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
						<Flex wrap align="center" gap={10}>
							<Flex wrap gap={10}>
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
						</Flex>
					</Flex>
					<Flex vertical gap={10}>
						<TimeWidgetsCustomClock />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
				<Flex style={{ padding: '5px' }}>
					<Progress
						style={{ border: '1px solid black', padding: '5px' }}
						size={{ width: 17, height: 50 }}
						percent={100}
						steps={31}
						showInfo={false}
					/>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidget7LG;
```

<br>
<br>

```jsx
import { Flex, Progress, Typography } from 'antd';
import React from 'react';
import TimeWidgetsCustomClock from '../TimeWidgetsCustomClock/TimeWidgetsCustomClock';

const { Text } = Typography;
<Flex
	vertical
	gap={10}
	align="center"
	style={{
		border: '1px solid black',
		marginBottom: '20px',
		padding: '5px',
	}}
>
	<Flex gap={50}>
		<Flex
			vertical
			justify="center"
			align="center"
			gap={10}
			style={{ padding: '5px' }}
		>
			<Flex gap={10}>
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
			<Flex wrap align="center" gap={10}>
				<Flex wrap gap={10}>
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
			</Flex>
		</Flex>
		<Flex vertical gap={10}>
			<TimeWidgetsCustomClock />
			<TimeWidgetsCustomClock />
		</Flex>
	</Flex>
	<Flex style={{ padding: '5px' }}>
		<Progress
			style={{ border: '1px solid black', padding: '5px' }}
			size={{ width: 17, height: 50 }}
			percent={100}
			steps={31}
			showInfo={false}
		/>
	</Flex>
</Flex>;
```
