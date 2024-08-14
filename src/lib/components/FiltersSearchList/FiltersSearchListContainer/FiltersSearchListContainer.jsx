// @flow

import React from 'react';
import styled from 'styled-components';
import { FiltersSearchList } from '../FiltersSearchList';

const StyledFiltersSearchContainer = styled.div`
	height: calc(100vh - 160px);
`;

interface IFiltersSearchListContainerProps {
	children: React.Node;
}

export const FiltersSearchListContainer = ({
	children,
}: IFiltersSearchListContainerProps): React$MixedElement => (
	<StyledFiltersSearchContainer>
		<FiltersSearchList>{children}</FiltersSearchList>
	</StyledFiltersSearchContainer>
);
