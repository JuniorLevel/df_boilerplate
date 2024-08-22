// @flow

import React from 'react';
import { Layout } from '../lib/components/Layout/Layout';
import { OrderListProvider } from '../lib/components/context/OrderListContext/OrderListContext';
import { OrdersFilterOpened } from '../lib/components/OrdersFilter/OrdersFilterOpened/OrdersFilterOpened';
import { filters, sidebarButtons } from './data';

export const OrdersFilterOpenedPage = (): React.Node => (
	<OrderListProvider>
		<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
			<OrdersFilterOpened open filters={filters} />
		</Layout>
	</OrderListProvider>
);
