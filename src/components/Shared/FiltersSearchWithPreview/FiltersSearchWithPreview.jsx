// @flow

import React from 'react';
import FiltersSearchListWithPreviewMobile from './FiltersSearchListWithPreviewMobile/FiltersSearchListWithPreviewMobile';
import FiltersSearchListWithPreviewDesktop from './FiltersSearchWithPreviewDesktop/FiltersSearchWithPreviewDesktop';

const FiltersSearchWithPreview = (): React$MixedElement => (
	<>
		<FiltersSearchListWithPreviewMobile />
		<FiltersSearchListWithPreviewDesktop />
	</>
);

export default FiltersSearchWithPreview;
