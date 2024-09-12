// @flow

import React, { useContext, useEffect, useRef } from 'react';
import { useRouter } from '@tanstack/react-router';
import { StatusContainer } from '../../StatusContainer/StatusContainer';
import { StyledCardItemDiv } from '../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterOpenedCards.styles';
import { OrdersFilterOpenedCardItem } from '../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterOpenedCardItem/OrdersFilterOpenedCardItem';
import { OrdersFilterContext } from '../../context/OrdersFilterContext/OrdersFilterContext';
import {
	StyledDivDesktopDialog,
	StyledFlexDesktopDialog,
} from './OrdersFilterDialogs.styles';

export const OrdersFilterDesktopDialog = (): React.Node => {
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
		<StyledFlexDesktopDialog ref={modalRef} className="dialog">
			<StyledDivDesktopDialog>
				{ordersFilterItems.map((item) => (
					<StyledCardItemDiv key={item.id}>
						<StatusContainer>
							<OrdersFilterOpenedCardItem key={item.id} item={item} />
						</StatusContainer>
					</StyledCardItemDiv>
				))}
			</StyledDivDesktopDialog>
		</StyledFlexDesktopDialog>
	);
};
