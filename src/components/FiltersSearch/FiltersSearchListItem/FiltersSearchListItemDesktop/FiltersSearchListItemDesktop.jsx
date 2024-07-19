// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import FiltersSearchListItemUsersInfo from '../FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';
import FiltersSearchListItemGrids from './FiltersSearchListItemGrids/FiltersSearchListItemGrids';

interface IFiltersSearchListItemDesktop {
	listData: any;
}

const FiltersSearchListItemDesktop = ({
	listData,
}: IFiltersSearchListItemDesktop): React$MixedElement => (
	<MediaQuery minWidth={361}>
		<Flex vertical gap={20}>
			<FiltersSearchListItemGrids />
			<FiltersSearchListItemUsersInfo
				dataSearchUsers={listData.dataSearchUsers}
			/>
		</Flex>
	</MediaQuery>
);

export default FiltersSearchListItemDesktop;
