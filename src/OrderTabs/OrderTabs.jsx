// @flow

import React from 'react';
import { Tabs } from 'antd';
import { useStyles } from './order.tabs.styles';

interface IOrderTabsProps {
	items: any;
}

export const OrderTabs = ({ items }: IOrderTabsProps): React.Node => {
	const { styles } = useStyles();

	return (
		<Tabs
			className={styles.tabs}
			defaultActiveKey={items.length}
			items={items}
		/>
	);
};
