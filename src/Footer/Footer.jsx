// @flow

import React from 'react';
import { Flex } from 'antd';

export const Footer = (): React$MixedElement => (
	<div
		style={{
			height: '100px',
			border: '1px solid black',
			margin: '10px',
		}}
	>
		<Flex justify="center" align="center" style={{ height: '100%' }}>
			DIFF
		</Flex>
	</div>
);
