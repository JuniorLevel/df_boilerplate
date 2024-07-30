// @flow

import React from 'react';
import { Row, Col } from 'antd';
import OrderVersion from '../OrderVersion/OrdersVersion';
import Order from '../Order/Order';
import OrderContainer from '../OrderContainer/OrderContainer';

interface IOrderDiffHistoryProps {
	filters: any;
}

const OrderDiffHistory = ({
	filters,
}: IOrderDiffHistoryProps): React$MixedElement => (
	<OrderContainer>
		<Row gutter={[16, 16]}>
			<Col xs={12}>
				<Row gutter={[16, 16]}>
					<Col xs={12}>
						<OrderVersion filters={filters} />
					</Col>
					<Col xs={12}>
						<Order />
					</Col>
				</Row>
			</Col>

			<Col xs={12}>
				<Row gutter={[16, 16]}>
					<Col xs={12}>
						<Order />
					</Col>
					<Col xs={12}>
						<OrderVersion filters={filters} />
					</Col>
				</Row>
			</Col>
		</Row>
	</OrderContainer>
);

export default OrderDiffHistory;
