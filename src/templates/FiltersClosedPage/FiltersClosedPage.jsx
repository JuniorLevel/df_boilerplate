// @flow

import React from 'react';
import Container from '../../components/Container/Container';
import FiltersCardContainer from '../../components/FiltersCardContainer/FiltersCardContainer';
import FiltersCardClosed from '../../components/FiltersCardContainer/FiltersCardClosed/FiltersCardClosed';

const filterCardsClosed = [
	{
		id: 1,
		title: 'Flow_typed-1',
		item: [{ id: 1, text: 'lorem-1' }],
	},

	{
		id: 2,
		title: 'Flow_typed-2',
		item: [
			{ id: 1, text: 'project-1' },
			{ id: 2, text: 'project-2' },
			{ id: 3, text: 'project-3' },
		],
	},
	{
		id: 3,
		title: 'Flow_typed-3',
		item: [
			{ id: 1, text: 'issue-1' },
			{ id: 2, text: 'issue-2' },
		],
	},
];

const FiltersClosedPage = (): React$MixedElement => (
	<Container>
		<FiltersCardContainer>
			{filterCardsClosed.map((cardClosed) => (
				<FiltersCardClosed key={cardClosed.id} cardClosed={cardClosed} />
			))}
		</FiltersCardContainer>
	</Container>
);

export default FiltersClosedPage;
