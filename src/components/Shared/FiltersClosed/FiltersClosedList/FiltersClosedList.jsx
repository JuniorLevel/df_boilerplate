// @flow

import React from 'react';

import FiltersClosedListDesktop from './FiltersClosedListDesktop/FiltersClosedListDesktop';
import FiltersClosedListMobile from './FiltersClosedListMobile/FiltersClosedListMobile';

const FiltersClosedList = (): React$MixedElement => (
	<>
		<FiltersClosedListMobile />
		<FiltersClosedListDesktop />
	</>
);

export default FiltersClosedList;
