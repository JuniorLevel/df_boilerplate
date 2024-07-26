// @flow

import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container/Container';
import FiltersSearchWithPreview from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreview';
import FiltersClosedList from '../../components/FiltersClosedList/FiltersClosedList';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';
import { buttons } from '../../components/Container/buttons';

const FiltersSearchWithPreviewContainer = styled.div`
	height: calc(100vh - 170px);
	@media (min-width: 361px) {
		overflow: hidden;
	}
`;
const FiltersClosedPreviewPage = (): React$MixedElement => (
	<FiltersClosedListProvider>
		<Container
			buttons={buttons}
			title="Caption"
			theme="dark"
			avatar={{ title: 'AV' }}
		>
			<FiltersClosedList />
			<FiltersSearchWithPreviewContainer>
				<FiltersSearchWithPreview />
			</FiltersSearchWithPreviewContainer>
		</Container>
	</FiltersClosedListProvider>
);

export default FiltersClosedPreviewPage;
