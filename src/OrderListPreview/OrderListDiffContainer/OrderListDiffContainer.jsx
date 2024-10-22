// @flow

import React, { useContext } from 'react';
import { useStyles } from '../orders.list.preview.styles';
import { ThemeContext } from '../../context/theme/ThemeContext';

interface IOrderListDiffContainerProps {
	children: React.Node;
}

export const OrderListDiffContainer = ({
	children,
}: IOrderListDiffContainerProps): React.Node => {
	const { styles } = useStyles();
	const { isFooter } = useContext(ThemeContext);

	return (
		<div
			className={
				isFooter
					? styles.orderListDiffContainerWithFooter
					: styles.orderListDiffContainer
			}
		>
			{children}
		</div>
	);
};
