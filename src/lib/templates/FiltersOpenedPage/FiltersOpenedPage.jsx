// @flow

import React, { useState } from 'react';
import { Container as Layout } from '../../components/Container/Container';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';
import FiltersOpened from '../../components/FiltersOpened/FiltersOpened';
import { buttons } from '../../components/Container/buttons';

const FiltersOpenedPage = (): React.Node => {
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
		<FiltersClosedListProvider>
			<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
				<FiltersOpened isOpen filtersCards={filters} />
			</Layout>
		</FiltersClosedListProvider>
	);
};

export default FiltersOpenedPage;
