// @flow

import React, { useContext, useEffect } from 'react';
import { StyledItemDiv } from './FiltersOpenedCardItem.styles';
import { StatusContext } from '../../../../context/StatusContainerContext/StatusContainerContext';

interface IFiltersOpenedCardItemProps {
	item: any;
}

export const FiltersOpenedCardItem = ({
	item,
}: IFiltersOpenedCardItemProps): React.Node => {
	const { setStatus } = useContext(StatusContext);

	useEffect(() => {
		setStatus(item.status);
	}, [item.status, setStatus]);

	return <StyledItemDiv>{item.text}</StyledItemDiv>;
};
