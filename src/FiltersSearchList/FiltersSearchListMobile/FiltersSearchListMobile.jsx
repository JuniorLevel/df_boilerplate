// @flow

import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { Flex, Pagination } from 'antd';
import { FiltersSearchListItem } from '../FiltersSearchListItem/FiltersSearchListItem';
import { searchListData } from './data';

export const FiltersSearchListMobile = (): React$MixedElement => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalItems = searchListData.length;
	const itemsPerPage = 5;

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = searchListData.slice(startIndex, endIndex);

	return (
		<MediaQuery maxWidth={360}>
			<Flex
				vertical
				justify="space-between"
				gap="large"
				style={{ padding: 10, overflowX: 'hidden' }}
			>
				{currentItems.map((listData) => (
					<FiltersSearchListItem key={listData.id} listData={listData} />
				))}
				<Pagination
					defaultCurrent={1}
					current={currentPage}
					total={totalItems}
					pageSize={5}
					onChange={(page: number): void => setCurrentPage(page)}
				/>
			</Flex>
		</MediaQuery>
	);
};
