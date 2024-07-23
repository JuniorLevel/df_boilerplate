Компонент TimeWidgets3
<br>
<br>

```jsx static
// @flow

import React from 'react';
import { Flex, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';

const TimeWidgets3 = (): React$MixedElement => {
	const { Text } = Typography;
	const isMobile = useMediaQuery({
		query: '(max-width: 375px)',
	});
	return (
		<Flex
			wrap
			gap={10}
			align="center"
			justify={isMobile ? 'center' : 'start'}
			style={{
				padding: '5px',
				border: '1px solid black',
			}}
		>
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
	);
};

export default TimeWidgets3;
```

<br>
<br>

```jsx
import React from 'react';
import { Flex, Typography } from 'antd';

const { Text } = Typography;
<Flex
	wrap
	gap={10}
	align="center"
	style={{
		padding: '5px',
		border: '1px solid black',
	}}
>
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
</Flex>;
```
