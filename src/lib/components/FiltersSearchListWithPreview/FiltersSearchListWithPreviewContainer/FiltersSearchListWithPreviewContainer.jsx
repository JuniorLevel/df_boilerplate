// @flow

import React from 'react';
import { styled } from 'styled-components';

interface IFiltersSearchListWithPreviewContainerProps {
	children: React.Node;
	height: number;
}

const StyledFiltersSearchListWithPreviewContainer = styled.div`
	/* height: calc(100vh - 280px); */
	height: ${({ height }: any) => `calc(100vh - ${height}px)`};
	@media (min-width: 361px) {
		overflow: hidden;
	}

	> .ant-row {
		height: 100%;
		padding: 18px;
		.ant-col {
			height: 100%;
		}
	}
`;

export const FiltersSearchListWithPreviewContainer = ({
	children,
	height,
}: IFiltersSearchListWithPreviewContainerProps): React$MixedElement => (
	<StyledFiltersSearchListWithPreviewContainer height={height}>
		{children}
	</StyledFiltersSearchListWithPreviewContainer>
);
