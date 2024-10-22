// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { useStyles } from '../../OrdersFilterOpened/orders.filter.opened.styles';

interface IOrdersFilterCardsContainerMobileProps {
	children: React.Node;
}

export const OrdersFilterCardsContainerMobile = ({
	children,
}: IOrdersFilterCardsContainerMobileProps): React.Node => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={360}>
			<Flex justify="center" className={styles.cardContainerMobile}>
				{children}
			</Flex>
		</MediaQuery>
	);
};
