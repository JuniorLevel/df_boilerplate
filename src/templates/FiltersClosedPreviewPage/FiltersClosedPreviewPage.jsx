// @flow

import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';
import { Container as Layout } from '../../components/Container/Container';
import { buttons } from '../../components/Container/buttons';
import FiltersClosed from '../../components/FiltersClosed/FiltersClosed';
import FiltersSearchWithPreviewContainer from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreviewContainer/FiltersSearchWithPreviewContainer';
import FiltersSearchListWithPreviewLeft from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreviewLeft/FiltersSearchWithPreviewLeft';
import FiltersSearchListWithPreviewRight from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreviewRight/FiltersSearchWithPreviewRight';
import FiltersSearchListWithPreviewLeftItem from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreviewLeft/FiltersSearchWithPreviewLeftItem/FiltersSearchWithPreviewLeftItem';

const FiltersClosedPreviewPage = (): React$MixedElement => {
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

	return (
		<FiltersClosedListProvider>
			<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
				<FiltersClosed isOpen={false} filtersList={filters} />
				<FiltersSearchWithPreviewContainer height={160}>
					<Row gutter={[16, 16]}>
						<Col span={12}>
							<FiltersSearchListWithPreviewLeft>
								<FiltersSearchListWithPreviewLeftItem
									key={data[0].id}
									listData={data[0]}
								/>
								<FiltersSearchListWithPreviewLeftItem
									key={data[1].id}
									listData={data[1]}
								/>
								<FiltersSearchListWithPreviewLeftItem
									key={data[2].id}
									listData={data[2]}
								/>
								<FiltersSearchListWithPreviewLeftItem
									key={data[3].id}
									listData={data[3]}
								/>
								<FiltersSearchListWithPreviewLeftItem
									key={data[4].id}
									listData={data[4]}
								/>
								<FiltersSearchListWithPreviewLeftItem
									key={data[5].id}
									listData={data[5]}
								/>
								<FiltersSearchListWithPreviewLeftItem
									key={data[6].id}
									listData={null}
								/>
							</FiltersSearchListWithPreviewLeft>
						</Col>
						<Col span={12}>
							<FiltersSearchListWithPreviewRight />
						</Col>
					</Row>
				</FiltersSearchWithPreviewContainer>
			</Layout>
		</FiltersClosedListProvider>
	);
};

export default FiltersClosedPreviewPage;
