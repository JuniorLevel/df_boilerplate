```jsx
import React, { useState } from 'react';
import { Layout } from '../../Layout/Layout';
import { OrdersFilterClosed } from '../../../components/OrdersFilter/OrdersFilterClosed/OrdersFilterClosed';
import { OrderListProvider } from '../../../components/context/OrderListContext/OrderListContext';
import { sidebarButtons, filters } from './data';

<OrderListProvider>
	<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
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
