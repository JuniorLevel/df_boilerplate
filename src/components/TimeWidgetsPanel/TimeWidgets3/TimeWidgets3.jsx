// @flow

import React from 'react';
import { Flex } from 'antd';

const TimeWidgets3 = (): React$MixedElement => (
	<Flex style={{ border: '1px solid black', marginBottom: '20px' }} gap={5}>
		<Flex
			wrap
			gap={10}
			align="center"
			style={{ padding: '5px', fontSize: '2em' }}
		>
			<span
				style={{ border: '1px solid black', padding: '15px', fontSize: '2em' }}
			>
				13
			</span>
			<span
				style={{ border: '1px solid black', padding: '15px', fontSize: '2em' }}
			>
				08
			</span>
			<span
				style={{ border: '1px solid black', padding: '15px', fontSize: '2em' }}
			>
				99
			</span>
			<span
				style={{ border: '1px solid black', padding: '15px', fontSize: '2em' }}
			>
				20
			</span>
			<span
				style={{ border: '1px solid black', padding: '15px', fontSize: '2em' }}
			>
				55
			</span>
			<span
				style={{ border: '1px solid black', padding: '15px', fontSize: '2em' }}
			>
				55
			</span>
		</Flex>
	</Flex>
);

export default TimeWidgets3;
