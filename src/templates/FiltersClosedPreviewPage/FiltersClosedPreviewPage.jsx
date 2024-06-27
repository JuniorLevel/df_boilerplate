// @flow

import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import FiltersSearchWithPreview from '../../components/Shared/FiltersSearchWithPreview/FiltersSearchWithPreview';
import FiltersClosedList from '../../components/Shared/FiltersClosedList/FiltersClosedList';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';

const FiltersSearchWithPreviewContainer = styled.div`
	height: calc(100vh - 160px);
`;
const FiltersClosedPreviewPage = (): React$MixedElement => (
	<FiltersClosedListProvider>
		<Container>
			<FiltersClosedList />
			<FiltersSearchWithPreviewContainer>
				<FiltersSearchWithPreview />
			</FiltersSearchWithPreviewContainer>
		</Container>
	</FiltersClosedListProvider>
);

export default FiltersClosedPreviewPage;
