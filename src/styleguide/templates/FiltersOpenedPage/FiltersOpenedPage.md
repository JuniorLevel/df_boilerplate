```jsx
import React, { useState } from 'react';
import { Layout } from '../../../lib/components/Layout/Layout';
import { FiltersClosedListProvider } from '../../../lib/context/FiltersClosedListContext/FiltersClosedListContext';
import { FiltersOpened } from '../../../lib/components/FiltersOpened/FiltersOpened';
import { buttons } from '../../../lib/components/Layout/buttons';

const [filters, setFilters] = useState([
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

<FiltersClosedListProvider>
	<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
		<FiltersOpened isOpen={true} filtersCards={filters} />
	</Layout>
</FiltersClosedListProvider>;
```

```jsx noeditor
import Image1 from '../../assets/FiltersOpened/filters-opened1.png';
import Image2 from '../../assets/FiltersOpened/filters-opened2.png';
<div>
	<img src={Image1} />
	<img src={Image2} />
</div>;
```
