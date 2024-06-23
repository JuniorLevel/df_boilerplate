// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import FiltersSearch from '../../FiltersSearch/FiltersSearch';
import FiltersClosedList from '../FiltersClosedList/FiltersClosedList';

const FiltersClosedMobile = (): React$MixedElement => (
	<MediaQuery maxWidth={360}>
		<FiltersClosedList />
		<FiltersSearch />
	</MediaQuery>
);

export default FiltersClosedMobile;
