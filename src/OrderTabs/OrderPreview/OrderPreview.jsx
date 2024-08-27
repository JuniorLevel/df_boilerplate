// @flow
import React from 'react';
import { Flex } from 'antd';

export const OrderPreview = (): React$MixedElement => (
	<Flex
		justify="center"
		align="center"
		style={{
			width: '100%',
			height: '100%',
			border: '1px solid black',
			fontSize: '2rem',
		}}
	>
		<div>Preview Order Page</div>
	</Flex>
);
