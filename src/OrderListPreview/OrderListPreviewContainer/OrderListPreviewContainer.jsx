// @flow

import React from 'react';
import { styled } from 'styled-components';
import { Row } from 'antd';

interface IOrderListPreviewContainerProps {
	children: React.Node;
	height: number;
}

const StyledOrderListPreviewContainer = styled.div`
	height: ${({ height }: any) => `calc(100vh - ${height}px)`};
	@media (min-width: 361px) {
		overflow: hidden;
	}

	> .ant-row {
		height: 100%;
		padding: 23px;
		.ant-col {
			height: 100%;
		}
	}
`;

export const OrderListPreviewContainer = ({
	children,
	height,
}: IOrderListPreviewContainerProps): React$MixedElement => (
	<StyledOrderListPreviewContainer height={height}>
		<Row gutter={[16, 16]}>{children}</Row>
	</StyledOrderListPreviewContainer>
);
