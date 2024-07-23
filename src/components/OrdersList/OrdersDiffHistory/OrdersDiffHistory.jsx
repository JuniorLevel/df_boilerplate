// @flow

import React from 'react';
import { Flex } from 'antd';
import { OrdersContainer } from '../OrdersList.styles';
import OrdersDiffHistoryLeft from './OrdersDiffHistoryLeft/OrdersDiffHistoryLeft';
import OrdersDiffHistoryRight from './OrdersDiffHistoryRight/OrdersDiffHistoryRight';

const OrdersDiffHistory = (): React$MixedElement => (
	<>
		<OrdersContainer>
			<Flex style={{ height: '100%' }}>
				<OrdersDiffHistoryLeft />
				<OrdersDiffHistoryRight />
			</Flex>
		</OrdersContainer>
		<Flex wrap>
			<div
				style={{
					height: '100px',
					width: '100%',
					border: '1px solid black',
					margin: '10px',
				}}
			>
				<Flex justify="center" align="center" style={{ height: '100%' }}>
					DIFF
				</Flex>
			</div>
		</Flex>
	</>
);

export default OrdersDiffHistory;
