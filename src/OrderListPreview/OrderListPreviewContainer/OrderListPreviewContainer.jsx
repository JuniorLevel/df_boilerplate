// @flow

import React from 'react';
import { Row } from 'antd';

interface IOrderListPreviewContainerProps {
	children: React.Node;
}

export const OrderListPreviewContainer = ({
	children,
}: IOrderListPreviewContainerProps): React.Node => (
	<Row gutter={[16, 16]}>{children}</Row>
);
