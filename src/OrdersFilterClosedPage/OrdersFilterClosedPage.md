```jsx
import React from 'react';
import { Layout } from '../lib/components/Layout/Layout';
import { OrdersFilterClosed } from '../lib/components/OrdersFilter/OrdersFilterClosed/OrdersFilterClosed';
import { OrderListProvider } from '../lib/components/context/OrderListContext/OrderListContext';
import { FiltersSearchListContainer } from '../lib/components/FiltersSearchList/FiltersSearchListContainer/FiltersSearchListContainer';
import { FiltersSearchListItem } from '../lib/components/FiltersSearchList/FiltersSearchListItem/FiltersSearchListItem';
import { data, filters, sidebarButtons } from './data';

<OrderListProvider>
	<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<OrdersFilterClosed open={false} filters={filters} />
		<FiltersSearchListContainer>
			<FiltersSearchListItem key={data[0].id} listData={data[0]} />
			<FiltersSearchListItem key={data[1].id} listData={data[1]} />
			<FiltersSearchListItem key={data[2].id} listData={data[2]} />
			<FiltersSearchListItem key={data[3].id} listData={data[3]} />
			<FiltersSearchListItem key={data[4].id} listData={data[4]} />
			<FiltersSearchListItem key={6} listData={null} />
		</FiltersSearchListContainer>
	</Layout>
</OrderListProvider>;
```

```jsx noeditor
import Image1 from './ordersFilter-closed.png';
<img src={Image1} />;
```
