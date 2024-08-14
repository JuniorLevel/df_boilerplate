// @flow

import React, { useState } from 'react';
import { Layout } from '../../../lib/components/Layout/Layout';
import { FiltersClosedListProvider } from '../../../lib/context/FiltersClosedListContext/FiltersClosedListContext';
import { FiltersOpened } from '../../../lib/components/FiltersOpened/FiltersOpened';
import { buttons } from '../../../lib/components/Layout/buttons';

export const FiltersOpenedPage = (): React.Node => {
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
