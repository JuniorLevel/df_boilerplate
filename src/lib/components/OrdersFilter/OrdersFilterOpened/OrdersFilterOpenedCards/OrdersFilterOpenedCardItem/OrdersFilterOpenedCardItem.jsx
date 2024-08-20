// @flow

import React, { useContext, useEffect } from 'react';
import { StyledItemDiv } from './OrdersFilterOpenedCardItem.styles';
import { StatusContext } from '../../../../../context/StatusContainerContext/StatusContainerContext';

interface IOrdersFilterOpenedCardItemProps {
	item: any;
}

export const OrdersFilterOpenedCardItem = ({
	item,
}: IOrdersFilterOpenedCardItemProps): React.Node => {
	const { setStatus } = useContext(StatusContext);

	useEffect(() => {
		setStatus(item.status);
	}, [item.status, setStatus]);

	return <StyledItemDiv>{item.text}</StyledItemDiv>;
};
