// @flow

import React, { useContext, useEffect, useRef } from 'react';
import { useRouter } from '@tanstack/react-router';
import { OrdersFilterContext } from '../../context/OrdersFilterContext/OrdersFilterContext';
import { StyledCardItemDiv } from '../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterOpenedCards.styles';
import { StatusContainer } from '../../StatusContainer/StatusContainer';
import { OrdersFilterOpenedCardItem } from '../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterOpenedCardItem/OrdersFilterOpenedCardItem';
import { StyledDivMobileDialog } from './OrdersFilterDialogs.styles';

export const OrdersFilterMobileDialog = (): React.Node => {
	const { ordersFilterItems } = useContext(OrdersFilterContext);
	const { history } = useRouter();
	const modalRef = useRef(null);

	useEffect(() => {
		const handleClick = (e: any) => {
			if (e.target.classList.contains('dialog')) history.go(-1);
		};
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [history]);

	return (
		<StyledDivMobileDialog ref={modalRef} className="dialog">
			{ordersFilterItems.map((item) => (
				<StyledCardItemDiv key={item.id}>
					<StatusContainer>
						<OrdersFilterOpenedCardItem key={item.id} item={item} />
					</StatusContainer>
				</StyledCardItemDiv>
			))}
		</StyledDivMobileDialog>
	);
};
