// @flow

import React from 'react';
import styled from 'styled-components';

interface IFiltersCardItemProps {
	item: any;
}

const StyledItemDiv = styled.div`
	font-size: 1.5rem;
	padding: 10px;
	border: 2px solid black;
`;

const FiltersCardItem = ({ item }: IFiltersCardItemProps): React.Node => (
	<StyledItemDiv>{item.text}</StyledItemDiv>
);

export default FiltersCardItem;
