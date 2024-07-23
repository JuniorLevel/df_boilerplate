// @flow

import React from 'react';
import { Flex, Steps } from 'antd';
import { stepsItems } from '../../../../data/orders.list.data';

const OrdersDiffHistoryRight = (): React$MixedElement => (
	<div style={{ width: '50%' }}>
		<Flex gap={10} style={{ height: '100%' }} justify="space-between">
			<Flex
				style={{
					overflow: 'auto',
				}}
			>
				<Steps
					progressDot
					current={4}
					direction="vertical"
					style={{ padding: '20px' }}
					items={stepsItems}
				/>
			</Flex>
			<Flex
				justify="center"
				align="center"
				style={{
					maxWidth: '60%',
					width: '100%',
					border: '1px solid black',
					fontSize: '2rem',
					margin: '10px 10px 0 0',
				}}
			>
				<div>Preview Page</div>
			</Flex>
		</Flex>
	</div>
);

export default OrdersDiffHistoryRight;
