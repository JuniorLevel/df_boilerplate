// @flow

import React, { useContext, useEffect, useRef } from 'react';
import { useRouter } from '@tanstack/react-router';
import { Flex } from 'antd';
import { StatusContainer } from '../../../StatusContainer/StatusContainer';
import { OrdersFilterOpenedCardItem } from '../../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterOpenedCardItem/OrdersFilterOpenedCardItem';
import { OrdersFilterContext } from '../../../context/OrdersFilterContext/OrdersFilterContext';
import { OrdersFilterCardAddItemButton } from '../../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterCardAddItemButton/OrdersFilterCardAddItemButton';
import { useStyles } from './ordersFilterDesktopDialog.styles';

export const OrdersFilterDesktopDialog = (): React.Node => {
	const { history } = useRouter();
	const modalRef = useRef<HTMLDivElement | null>(null);
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

	const { styles } = useStyles();

	return (
		<Flex className={styles.dialog} ref={modalRef}>
			<Flex vertical justify="space-between" className={styles.container}>
				{ordersFilterItems.map((item) => (
					<div className={styles.cardItem} key={item.id}>
						<StatusContainer>
							<OrdersFilterOpenedCardItem key={item.id} item={item} />
						</StatusContainer>
					</div>
				))}
				<OrdersFilterCardAddItemButton onClick={addFilterItem} />
			</Flex>
		</Flex>
	);
};
