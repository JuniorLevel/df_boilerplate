```jsx
import React, { useState } from 'react';
import { Layout } from '../../Layout/Layout';
import { OrdersFilterClosed } from '../../../components/OrdersFilter/OrdersFilterClosed/OrdersFilterClosed';
import { OrderListProvider } from '../../../context/OrderListContext/OrderListContext';

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
		title: 'Flow_typed-1',
		item: [{ id: 1, status: 'updated', text: 'lorem-1' }],
	},

	{
		id: 2,
		title: 'Flow_typed-2',
		item: [
			{ id: 1, status: 'changed', text: 'project-1' },
			{ id: 2, status: 'changed', text: 'project-2' },
			{ id: 3, status: 'updated', text: 'project-3' },
		],
	},
	{
		id: 3,
		title: 'Flow_typed-3',
		item: [
			{ id: 1, status: 'updated', text: 'issue-1' },
			{ id: 2, status: 'updated', text: 'issue-2' },
		],
	},
]);

<OrderListProvider>
	<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
		<OrdersFilterClosed open={false} filters={filters} />
	</Layout>
</OrderListProvider>;
```

```jsx noeditor
import Image1 from '../../../components/OrdersFilter/OrdersFilterClosed/image.png';
<div>
	<img src={Image1} />
</div>;
```
