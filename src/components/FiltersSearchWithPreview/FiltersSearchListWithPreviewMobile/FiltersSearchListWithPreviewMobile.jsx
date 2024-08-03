// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import FiltersSearch from '../../FiltersSearch/FiltersSearch';

const FiltersSearchListWithPreviewMobile = (): React$MixedElement => (
	<MediaQuery maxWidth={360}>
		<FiltersSearch />
	</MediaQuery>
);

export default FiltersSearchListWithPreviewMobile;
