// @flow

import React from 'react';
import { Container } from '../../components/Container/Container';
import FiltersSearchWithPreview from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreview';
import FiltersClosed from '../../components/FiltersClosed/FiltersClosed';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';
import { buttons } from '../../components/Container/buttons';
import { filtersList } from '../../data/filters.cards.data';
import FiltersSearchWithPreviewContainer from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreviewContainer/FiltersSearchWithPreviewContainer';

const FiltersClosedPreviewPage = (): React$MixedElement => (
	<FiltersClosedListProvider>
		<Container buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
			<FiltersClosed isOpen={false} filtersList={filtersList} />
			<FiltersSearchWithPreviewContainer height={160}>
				<FiltersSearchWithPreview />
			</FiltersSearchWithPreviewContainer>
		</Container>
	</FiltersClosedListProvider>
);

export default FiltersClosedPreviewPage;
