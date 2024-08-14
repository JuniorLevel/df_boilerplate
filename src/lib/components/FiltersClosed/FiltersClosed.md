```jsx
import React, { useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { FiltersClosed } from '../../components/FiltersClosed/FiltersClosed';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';
import { buttons } from '../../components/Layout/buttons';

const [filters, setFilters] = useState([
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

<FiltersClosedListProvider>
	<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
		<FiltersClosed isOpen={false} filtersList={filters} />
	</Layout>
</FiltersClosedListProvider>;
```

```jsx noeditor
import Image1 from '../../../styleguide/assets//FiltersOpened/image.png';
<div>
	<img src={Image1} />
</div>;
```
