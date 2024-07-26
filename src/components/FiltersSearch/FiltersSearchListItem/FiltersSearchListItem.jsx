// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import FiltersSearchListItemMobile from './FiltersSearchListItemMobile/FiltersSearchListItemMobile';
import FiltersSearchListItemGrids from './FiltersSearchListItemGrids/FiltersSearchListItemGrids';
import FiltersSearchListItemUsersInfo from './FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';

interface IFiltersSearchListProps {
	listData: any;
}

const FiltersSearchListItem = ({
	listData,
}: IFiltersSearchListProps): React.Node => (
	<>
		<MediaQuery minWidth={361}>
			<Flex vertical gap={20}>
				<FiltersSearchListItemGrids />
				<FiltersSearchListItemUsersInfo
					dataSearchUsers={listData.dataSearchUsers}
				/>
			</Flex>
		</MediaQuery>
		<FiltersSearchListItemMobile listData={listData} />
	</>
);

export default FiltersSearchListItem;
