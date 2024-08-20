```jsx
import React, { useState } from 'react';
import { Layout } from '../../../lib/components/Layout/Layout';
import { OrderListProvider } from '../../../lib/context/OrderListContext/OrderListContext';
import { OrdersFilterOpened } from '../../../lib/components/OrdersFilter/OrdersFilterOpened/OrdersFilterOpened';

const buttons = [
	{
		id: 1,
		title: 'Orders',
		onClick: () => {},
	},
	{
		id: 2,
		title: 'Compare',
		onClick: () => {},
	},
	{
		id: 3,
		title: 'Admin',
		onClick: () => {},
	},
];

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

<OrderListProvider>
	<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
		<OrdersFilterOpened open filters={filters} />
	</Layout>
</OrderListProvider>;
```

```jsx noeditor
import Image1 from '../../assets/OrdersFilterOpened/ordersFilter-opened1.png';
import Image2 from '../../assets/OrdersFilterOpened/ordersFilter-opened2.png';
<div>
	<img src={Image1} />
	<img src={Image2} />
</div>;
```
