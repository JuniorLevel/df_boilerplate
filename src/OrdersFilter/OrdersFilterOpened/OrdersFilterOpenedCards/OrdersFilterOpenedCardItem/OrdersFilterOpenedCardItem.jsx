// @flow

import React, { useContext, useEffect } from 'react';
import { StatusContext } from '../../../../context/StatusContainerContext/StatusContainerContext';

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

	return <div>{item.text}</div>;
};
