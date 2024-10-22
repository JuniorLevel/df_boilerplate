/* eslint-disable no-inline-styles/no-inline-styles */
// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { OrdersFilterCardsContainerMobile } from './OrdersFilterCardsContainerMobile/OrdersFilterCardsContainerMobile';
import { useStyles } from '../OrdersFilterOpened/orders.filter.opened.styles';

interface IOrdersFilterCardsContainerProps {
	children: React.Node;
}

export const OrdersFilterCardsContainer = ({
	children,
}: IOrdersFilterCardsContainerProps): React.Node => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={361}>
				<Flex className={styles.ordersFilterCardsContainer}>{children}</Flex>
			</MediaQuery>
			<OrdersFilterCardsContainerMobile>
				{children}
			</OrdersFilterCardsContainerMobile>
		</>
	);
};
