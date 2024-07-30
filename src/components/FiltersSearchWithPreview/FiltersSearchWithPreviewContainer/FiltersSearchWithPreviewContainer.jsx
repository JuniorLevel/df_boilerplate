// @flow

import React from 'react';
import { styled } from 'styled-components';

interface IFiltersSearchWithPreviewContainerProps {
	children: React.Node;
	height: number;
}

const StyledFiltersSearchWithPreviewContainer = styled.div`
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

const FiltersSearchWithPreviewContainer = ({
	children,
	height,
}: IFiltersSearchWithPreviewContainerProps): React$MixedElement => (
	<StyledFiltersSearchWithPreviewContainer height={height}>
		{children}
	</StyledFiltersSearchWithPreviewContainer>
);

export default FiltersSearchWithPreviewContainer;
