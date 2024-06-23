// @flow

import React from 'react';
import Container from '../../components/Container/Container';
import FiltersSearchWithPreview from '../../components/Shared/FiltersSearchWithPreview/FiltersSearchWithPreview';
import FiltersClosedList from '../../components/Shared/FiltersClosed/FiltersClosedList/FiltersClosedList';

const FiltersClosedPreviewPage = (): React$MixedElement => (
	<Container>
		<FiltersClosedList />
		<FiltersSearchWithPreview />
	</Container>
);

export default FiltersClosedPreviewPage;
