// @flow

import React from 'react';

interface IOrderListContainerProps {
	children: React.Node;
}
export const OrderListContainer = ({
	children,
}: IOrderListContainerProps): React$MixedElement => (
	<div
		style={{
			height: '97%',
			overflow: 'auto',
			overflowX: 'hidden',
			marginBottom: '5px',
		}}
	>
		{children}
	</div>
);
