// @flow

import React from 'react';
import FiltersClosedDesktop from './FiltersClosedDesktop/FiltersClosedDesktop';
import FiltersClosedMobile from './FiltersClosedMobile/FiltersClosedMobile';

const FiltersClosed = (): React$MixedElement => (
	<>
		<FiltersClosedMobile />
		<FiltersClosedDesktop />
	</>
);

export default FiltersClosed;
