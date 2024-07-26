// @flow

import React from 'react';
import { Container } from '../../components/Container/Container';
import FiltersOpened from '../../components/FiltersOpened/FiltersOpened';
import { buttons } from '../../components/Container/buttons';

const FiltersOpenedPage = (): React.Node => (
	<Container
		buttons={buttons}
		title="Caption"
		theme="light"
		avatar={{ title: 'AV' }}
	>
		<FiltersOpened />
	</Container>
);

export default FiltersOpenedPage;
