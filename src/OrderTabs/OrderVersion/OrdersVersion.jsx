// @flow

import React from 'react';
import { Col, Steps } from 'antd';

interface IOrderVersionProps {
	filters: any;
}

export const OrderVersion = ({ filters }: IOrderVersionProps): React.Node => (
	<Col xs={12}>
		<Steps
			progressDot
			current={filters.length}
			direction="vertical"
			items={filters}
		/>
	</Col>
);
