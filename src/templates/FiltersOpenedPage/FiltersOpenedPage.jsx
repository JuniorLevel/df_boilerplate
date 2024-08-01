// @flow

import React from 'react';
import { Container } from '../../components/Container/Container';
import FiltersOpened from '../../components/FiltersOpened/FiltersOpened';
import { buttons } from '../../components/Container/buttons';
import { filtersCards } from '../../data/filters.cards.data';

const FiltersOpenedPage = (): React.Node => (
	<Container
		buttons={buttons}
		title="Caption"
		theme="light"
		avatar={{ title: 'AV' }}
	>
		<FiltersOpened isOpen filtersCards={filtersCards} />
	</Container>
);

export default FiltersOpenedPage;
