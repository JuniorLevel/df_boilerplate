// @flow

import React from 'react';
import { Flex } from 'antd';

export const Order = (): React$MixedElement => (
	<Flex
		vertical
		justify="center"
		align="center"
		style={{
			height: '100%',
			border: '1px solid black',
			fontSize: '2rem',
		}}
	>
		<div>Preview Page</div>
	</Flex>
);
