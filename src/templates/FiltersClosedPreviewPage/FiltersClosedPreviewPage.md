```jsx
import { useState } from 'react';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';
import { Container as Layout } from '../../components/Container/Container';
import { buttons } from '../../components/Container/buttons';
import FiltersClosed from '../../components/FiltersClosed/FiltersClosed';
import FiltersSearchWithPreviewContainer from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreviewContainer/FiltersSearchWithPreviewContainer';
import FiltersSearchListWithPreviewLeft from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreviewLeft/FiltersSearchWithPreviewLeft';
import FiltersSearchListWithPreviewRight from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreviewRight/FiltersSearchWithPreviewRight';
import { Row, Col } from 'antd';

const data = [
	{
		id: 1,
		dataSearch: [
			{
				id: 1,
				counter: 7,
				status: 'updated',
				text: 'Lorem',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 2,
		dataSearch: [
			{
				id: 1,
				counter: 3,
				status: 'changed',
				text: 'Typescript',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 3,
		dataSearch: [
			{
				id: 1,
				counter: 3,
				status: 'changed',
				text: 'Typescript',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 4,
		dataSearch: [
			{
				id: 1,
				counter: 3,
				status: 'changed',
				text: 'Typescript',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 5,
		dataSearch: [
			{
				id: 1,
				counter: 7,
				status: 'updated',
				text: 'Lorem',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 6,
		dataSearch: [
			{
				id: 1,
				counter: 7,
				status: 'updated',
				text: 'Lorem',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 7,
		dataSearch: [
			{
				id: 1,
				counter: 7,
				status: 'updated',
				text: 'Lorem',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
	{
		id: 8,
		dataSearch: [
			{
				id: 1,
				counter: 7,
				status: 'updated',
				text: 'Lorem',
				role: 'Assigned',
			},
			{
				id: 2,
				counter: 3,
				status: 'unmodified',
				text: 'About us',
				role: 'Watcher',
			},
		],
		dataSearchUsers: [
			{
				id: 1,
				role: 'Creator',
				status: 'updated',
				username: 'Roman Smit',
			},
			{
				id: 2,
				role: 'Assigned',
				status: 'changed',
				username: 'John Doe',
			},
			{
				id: 3,
				role: 'Watcher',
				status: 'unmodified',
				username: 'Jerrard Doe',
			},
		],
	},
];

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
	<Layout
		buttons={buttons}
		title="Caption"
		theme="light"
		avatar={{ title: 'AV' }}
	>
		<FiltersClosed isOpen={false} filtersList={filters} />
		<FiltersSearchWithPreviewContainer height={160}>
			<Row gutter={[16, 16]}>
				<Col span={12}>
					<FiltersSearchListWithPreviewLeft searchListData={data} />
				</Col>
				<Col span={12}>
					<FiltersSearchListWithPreviewRight />
				</Col>
			</Row>
		</FiltersSearchWithPreviewContainer>
	</Layout>
</FiltersClosedListProvider>;
```

```jsx noeditor
import Image1 from '../../assets/FiltersClosedWithPreview/closed-preview.png';
<img src={Image1} />;
```
