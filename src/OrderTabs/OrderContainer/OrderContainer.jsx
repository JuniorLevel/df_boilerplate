// @flow

import React from 'react';
import { useStyles } from '../order.tabs.styles';

interface IOrderContainerProps {
	children: React.Node;
}

export const OrderContainer = ({
	children,
}: IOrderContainerProps): React.Node => {
	const { styles } = useStyles();
	return <div className={styles.orderContainer}>{children}</div>;
};
