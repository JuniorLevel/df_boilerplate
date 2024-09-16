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
import { OrdersFilterCardAddItemButton } from '../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterCardAddItemButton/OrdersFilterCardAddItemButton';

export const OrdersFilterDesktopDialog = (): React.Node => {
	const { history } = useRouter();
	const modalRef = useRef(null);
	const { ordersFilterItems, setOrdersFilterItems } =
		useContext(OrdersFilterContext);

	useEffect(() => {
		const handleClick = (e: any) => {
			if (e.target.classList.contains('dialog')) history.go(-1);
		};
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [history]);

	const addFilterItem = () => {
		const newItem = {
			id: Date.now(),
			status: 'updated',
			text: `project-${Date.now().toString().slice(-2)}`,
		};
		setOrdersFilterItems([...ordersFilterItems, newItem]);
	};

	return (
		<StyledFlexDesktopDialog ref={modalRef} className="dialog">
			<StyledDivDesktopDialog>
				<div>
					{ordersFilterItems.map((item) => (
						<StyledCardItemDiv key={item.id}>
							<StatusContainer>
								<OrdersFilterOpenedCardItem key={item.id} item={item} />
							</StatusContainer>
						</StyledCardItemDiv>
					))}
				</div>
				<OrdersFilterCardAddItemButton onClick={addFilterItem} />
			</StyledDivDesktopDialog>
		</StyledFlexDesktopDialog>
	);
};
