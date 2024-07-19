// @flow

import React from 'react';
import FiltersSearchListMobile from './FiltersSearchListMobile/FiltersSearchListMobile';
import FiltersSearchListDesktop from './FiltersSearchListDesktop/FiltersSearchListDesktop';

interface IFiltersSearchProps {
	itemsPerPage?: number;
}

const FiltersSearch = ({
	itemsPerPage = 1,
}: IFiltersSearchProps): React$MixedElement => (
	<>
		<FiltersSearchListMobile />
		<FiltersSearchListDesktop itemsPerPage={itemsPerPage} />
	</>
);

export default FiltersSearch;
