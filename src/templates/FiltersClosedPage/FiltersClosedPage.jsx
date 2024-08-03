// @flow

import React from 'react';
import { Container } from '../../components/Container/Container';
import FiltersClosed from '../../components/FiltersClosed/FiltersClosed';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';
import { buttons } from '../../components/Container/buttons';
import { filtersList } from '../../data/filters.cards.data';
import FiltersSearchContainer from '../../components/FiltersSearch/FiltersSearchContainer/FiltersSearchContainer';
import FiltersSearchListItem from '../../components/FiltersSearch/FiltersSearchListItem/FiltersSearchListItem';
import { searchListData as data } from '../../data/search.list.data';

const FiltersClosedPage = (): React$MixedElement => (
	<FiltersClosedListProvider>
		<Container buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
			<FiltersClosed isOpen={false} filtersList={filtersList} />
			<FiltersSearchContainer>
				<FiltersSearchListItem key={data[0].id} listData={data[0]} />
				<FiltersSearchListItem key={data[1].id} listData={data[1]} />
				<FiltersSearchListItem key={data[2].id} listData={data[2]} />
				<FiltersSearchListItem key={data[3].id} listData={data[3]} />
				<FiltersSearchListItem key={data[4].id} listData={data[4]} />
				<FiltersSearchListItem key={data[5].id} listData={data[5]} />
				<FiltersSearchListItem key={6} listData={null} />
			</FiltersSearchContainer>
		</Container>
	</FiltersClosedListProvider>
);

export default FiltersClosedPage;
