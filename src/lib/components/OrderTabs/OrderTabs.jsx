// @flow

import React from 'react';
import { StyledTabs } from './OrderList.styles';

interface IOrderTabsProps {
	items: any;
}

export const OrderTabs = ({ items }: IOrderTabsProps): React$MixedElement => (
	<StyledTabs defaultActiveKey={items.length} items={items} />
);
