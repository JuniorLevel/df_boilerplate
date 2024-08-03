// @flow

import React from 'react';
import styled from 'styled-components';
import FiltersSearch from '../FiltersSearch';

const StyledFiltersSearchContainer = styled.div`
	height: calc(100vh - 160px);
`;

interface IFiltersSearchContainerProps {
	children: React.Node;
}

const FiltersSearchContainer = ({
	children,
}: IFiltersSearchContainerProps): React$MixedElement => (
	<StyledFiltersSearchContainer>
		<FiltersSearch>{children}</FiltersSearch>
	</StyledFiltersSearchContainer>
);

export default FiltersSearchContainer;
