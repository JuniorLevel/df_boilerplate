// @flow

import React from 'react';
import FiltersSearchListItemUsersInfoMobile from './FiltersSearchListItemUsersInfoMobile/FiltersSearchListItemUsersInfoMobile';
import FiltersSearchListItemUsersInfoDesktop from './FiltersSearchListItemUsersInfoDesktop/FiltersSearchListItemUsersInfoDesktop';

interface IFiltersSearchListProps {
	dataSearchUsers: Array<any>;
}

const FiltersSearchListItemUsersInfo = ({
	dataSearchUsers,
}: IFiltersSearchListProps): React$MixedElement => (
	<>
		<FiltersSearchListItemUsersInfoMobile dataSearchUsers={dataSearchUsers} />
		<FiltersSearchListItemUsersInfoDesktop dataSearchUsers={dataSearchUsers} />
	</>
);

export default FiltersSearchListItemUsersInfo;
