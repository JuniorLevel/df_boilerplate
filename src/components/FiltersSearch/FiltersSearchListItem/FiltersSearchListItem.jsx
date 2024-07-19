// @flow

import React from 'react';
import FiltersSearchListItemMobile from './FiltersSearchListItemMobile/FiltersSearchListItemMobile';
import FiltersSearchListItemDesktop from './FiltersSearchListItemDesktop/FiltersSearchListItemDesktop';

interface IFiltersSearchListProps {
	listData: any;
}

const FiltersSearchListItem = ({
	listData,
}: IFiltersSearchListProps): React.Node => (
	<>
		<FiltersSearchListItemMobile listData={listData} />
		<FiltersSearchListItemDesktop listData={listData} />
	</>
);

export default FiltersSearchListItem;
