// @flow

import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container/Container';
import FiltersClosedList from '../../components/FiltersClosedList/FiltersClosedList';
import FiltersSearch from '../../components/FiltersSearch/FiltersSearch';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';
import { buttons } from '../../components/Container/buttons';

const FiltersSearchContainer = styled.div`
	height: calc(100vh - 150px);
`;

const FiltersClosedPage = (): React$MixedElement => (
	<FiltersClosedListProvider>
		<Container
			buttons={buttons}
			title="Caption"
			theme="dark"
			avatar={{ title: 'AV' }}
		>
			<FiltersClosedList />
			<FiltersSearchContainer>
				<FiltersSearch />
			</FiltersSearchContainer>
		</Container>
	</FiltersClosedListProvider>
);

export default FiltersClosedPage;
