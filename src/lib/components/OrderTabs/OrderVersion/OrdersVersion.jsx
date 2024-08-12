// @flow

import React from 'react';
import { Col, Steps } from 'antd';

interface IOrderVersionProps {
	filters: any;
}

const OrderVersion = ({ filters }: IOrderVersionProps): React$MixedElement => (
	<Col xs={12}>
		<Steps
			style={{ height: '100%' }}
			progressDot
			current={filters.length}
			direction="vertical"
			items={filters}
		/>
	</Col>
);

export default OrderVersion;
