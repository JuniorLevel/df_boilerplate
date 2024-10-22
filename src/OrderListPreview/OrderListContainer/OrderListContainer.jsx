// @flow

import React, { useContext } from 'react';
import { useStyles } from '../orders.list.preview.styles';
import { ThemeContext } from '../../context/theme/ThemeContext';

interface IOrderListContainerProps {
	children: React.Node;
}
export const OrderListContainer = ({
	children,
}: IOrderListContainerProps): React.Node => {
	const { styles } = useStyles();
	const { isFooter } = useContext(ThemeContext);

	return (
		<div
			className={
				isFooter
					? styles.orderListContainerWithFooter
					: styles.orderListContainer
			}
		>
			{children}
		</div>
	);
};
