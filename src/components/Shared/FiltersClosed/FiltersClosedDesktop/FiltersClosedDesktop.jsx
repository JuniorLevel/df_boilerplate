// @flow

import React from 'react';
import MediaQuery from 'react-responsive';

import FiltersSearch from '../../FiltersSearch/FiltersSearch';
import FiltersClosedList from '../FiltersClosedList/FiltersClosedList';

const FiltersClosedDesktop = (): React$MixedElement => (
	<MediaQuery minWidth={361}>
		<FiltersClosedList />
		<FiltersSearch itemsPerPage={5} />
	</MediaQuery>
);

export default FiltersClosedDesktop;
