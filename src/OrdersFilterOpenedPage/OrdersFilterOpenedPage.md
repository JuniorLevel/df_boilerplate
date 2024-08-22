```jsx
import React from 'react';
import { Layout } from '../lib/components/Layout/Layout';
import { OrderListProvider } from '../lib/components/context/OrderListContext/OrderListContext';
import { OrdersFilterOpened } from '../lib/components/OrdersFilter/OrdersFilterOpened/OrdersFilterOpened';
import { filters, sidebarButtons } from './data';

<OrderListProvider>
	<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<OrdersFilterOpened open filters={filters} />
	</Layout>
</OrderListProvider>;
```

```jsx noeditor
import Image1 from './ordersFilter-opened1.png';
import Image2 from './ordersFilter-opened2.png';
<div>
	<img src={Image1} />
	<img src={Image2} />
</div>;
```
