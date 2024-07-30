// @flow

import React from 'react';
import { Tabs, Flex, Badge } from 'antd';
import { StyledTabs } from './OrderList.styles';

interface IOrderTabsProps {
	tabs: any;
}

const OrderTabs = ({ tabs }: IOrderTabsProps): React$MixedElement => (
	<StyledTabs defaultActiveKey={String(tabs.length)}>
		{tabs.map((tab) => (
			<Tabs.TabPane
				tab={
					<Flex gap={10} align="center">
						<div>{tab.title}</div>
						<Badge count={tab.count} />
					</Flex>
				}
				key={tab.key}
			>
				{tab.children}
			</Tabs.TabPane>
		))}
	</StyledTabs>
);

export default OrderTabs;
