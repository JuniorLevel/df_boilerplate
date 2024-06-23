// @flow

import React from 'react';
import { StyledItemDiv } from './FiltersOpenedCardItem.styles';

interface IFiltersOpenedCardItemProps {
	item: any;
}

const FiltersOpenedCardItem = ({
	item,
}: IFiltersOpenedCardItemProps): React.Node => (
	<StyledItemDiv>{item.text}</StyledItemDiv>
);

export default FiltersOpenedCardItem;
