// @flow

import React from 'react';
import FiltersOpenedMobile from './FiltersOpenedMobile/FiltersOpenedMobile';
import FiltersOpenedDesktop from './FiltersOpenedDesktop/FiltersOpenedDesktop';

const FiltersOpened = (): React$MixedElement => (
	<>
		<FiltersOpenedMobile />
		<FiltersOpenedDesktop />
	</>
);

export default FiltersOpened;
