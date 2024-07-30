// @flow

import React from 'react';
import styled from 'styled-components';

const StyledFiltersSearchContainer = styled.div`
	height: calc(100vh - 160px);
`;

interface IFiltersSearchContainerProps {
	children: React.Node;
}

const FiltersSearchContainer = ({
	children,
}: IFiltersSearchContainerProps): React$MixedElement => (
	<StyledFiltersSearchContainer>{children}</StyledFiltersSearchContainer>
);

export default FiltersSearchContainer;
