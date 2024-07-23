Компонент TimeWidgets1
<br>
<br>

```jsx static
// @flow

import React from 'react';
import { Flex, Progress, Typography } from 'antd';
import MediaQuery from 'react-responsive';

const TimeWidgets1XL = (): React$MixedElement => {
	const { Text } = Typography;
	return (
		<MediaQuery minWidth={640}>
			<Flex
				wrap
				style={{
					border: '1px solid black',
				}}
				gap={5}
			>
				<Flex
					gap={10}
					align="center"
					style={{
						border: '1px solid black',
						padding: '15px',
						fontSize: '2em',
					}}
				>
					<Text>13</Text>
					<Text>августа</Text>
					<Text>1999</Text>
				</Flex>
				<Flex
					style={{
						border: '1px solid black',
						padding: '5px',
					}}
				>
					<Flex
						style={{
							border: '1px solid black',
							padding: '5px',
						}}
					>
						<Progress
							size={{ width: 10, height: 50 }}
							percent={100}
							steps={31}
							showInfo={false}
						/>
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets1XL;
```

<br>
<br>

```jsx
// @flow

import React from 'react';
import { Flex, Progress, Typography } from 'antd';

const { Text } = Typography;
<Flex
	wrap
	style={{
		border: '1px solid black',
	}}
	gap={5}
>
	<Flex
		gap={10}
		align="center"
		style={{
			border: '1px solid black',
			padding: '15px',
			fontSize: '2em',
		}}
	>
		<Text>13</Text>
		<Text>августа</Text>
		<Text>1999</Text>
	</Flex>
	<Flex
		style={{
			border: '1px solid black',
			padding: '5px',
		}}
	>
		<Flex
			style={{
				border: '1px solid black',
				padding: '5px',
			}}
		>
			<Progress
				size={{ width: 10, height: 50 }}
				percent={100}
				steps={31}
				showInfo={false}
			/>
		</Flex>
	</Flex>
</Flex>;
```
