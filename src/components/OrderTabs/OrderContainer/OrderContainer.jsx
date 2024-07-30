// @flow

import React from 'react';
import styled from 'styled-components';

const StyledOrderContainer = styled.div`
	height: calc(100vh - 130px);
	overflow-x: hidden;
	padding: 10px;
	.ant-row {
		height: 100%;
	}
	.ant-steps-item-description {
		border: 1px solid black;

		padding: 10px;
		text-align: center;
	}
`;

interface IOrderContainerProps {
	children: React.Node;
}

const OrderContainer = ({
	children,
}: IOrderContainerProps): React$MixedElement => (
	<StyledOrderContainer>{children}</StyledOrderContainer>
);

export default OrderContainer;
