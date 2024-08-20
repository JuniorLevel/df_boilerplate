// @flow

import React, { useState } from 'react';
import { Layout } from '../../../lib/components/Layout/Layout';
import { OrderListProvider } from '../../../lib/context/OrderListContext/OrderListContext';
import { OrdersFilterOpened } from '../../../lib/components/OrdersFilter/OrdersFilterOpened/OrdersFilterOpened';
import { buttons } from '../../../lib/components/Layout/buttons';

export const OrdersFilterOpenedPage = (): React.Node => {
	const [filters] = useState([
		{
			id: 1,
			cardItem: [{ id: 1, status: 'changed', text: 'lorem-1' }],
		},

		{
			id: 2,
			cardItem: [
				{ id: 1, status: 'updated', text: 'project-1' },
				{ id: 2, status: 'changed', text: 'project-2' },
				{ id: 3, status: 'updated', text: 'project-3' },
			],
		},
	]);

	return (
		<OrderListProvider>
			<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
				<OrdersFilterOpened open filters={filters} />
			</Layout>
		</OrderListProvider>
	);
};
