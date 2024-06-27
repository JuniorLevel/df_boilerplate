// @flow

import React from 'react';
import { StyledTabs } from './OrdersList.styles';
import { ordersTabsItems } from './OrdersListTabsItems/OrdersListTabsItems';

const OrdersList = (): React$MixedElement => (
	<StyledTabs items={ordersTabsItems} />
);

export default OrdersList;
