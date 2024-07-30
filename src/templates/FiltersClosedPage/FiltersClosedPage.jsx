// @flow

import React from 'react';
import { Container } from '../../components/Container/Container';
import FiltersClosed from '../../components/FiltersClosed/FiltersClosed';
import FiltersSearch from '../../components/FiltersSearch/FiltersSearch';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';
import { buttons } from '../../components/Container/buttons';
import { searchListData } from '../../data/search.list.data';
import { filtersList } from '../../data/filters.cards.data';
import FiltersSearchContainer from '../../components/FiltersSearch/FiltersSearchContainer/FiltersSearchContainer';

const FiltersClosedPage = (): React$MixedElement => (
	<FiltersClosedListProvider>
		<Container
			buttons={buttons}
			title="Caption"
			theme="light"
			avatar={{ title: 'AV' }}
		>
			<FiltersClosed isOpen={false} filtersList={filtersList} />
			<FiltersSearchContainer>
				<FiltersSearch searchListData={searchListData} />
			</FiltersSearchContainer>
		</Container>
	</FiltersClosedListProvider>
);

export default FiltersClosedPage;
