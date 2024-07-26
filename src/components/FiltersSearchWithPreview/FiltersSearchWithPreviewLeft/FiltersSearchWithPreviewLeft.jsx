// @flow

import React, { useState } from 'react';
import { Flex, Pagination } from 'antd';
import { searchListData } from '../../../data/search.list.data';
import FiltersSearchWithPreviewGrids from '../FiltersSearchWithPreviewGrids/FiltersSearchWithPreviewGrids';

const FiltersSearchWithPreviewLeft = (): React$MixedElement => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalItems = searchListData.length;
	const itemsPerPage = 5;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = searchListData.slice(startIndex, endIndex);

	return (
		<Flex
			vertical
			justify="space-between"
			gap={10}
			style={{
				height: '100%',
				overflow: 'auto',
			}}
		>
			<div
				style={{
					overflowX: 'hidden',
				}}
			>
				<FiltersSearchWithPreviewGrids listData={currentItems} />
			</div>
			<Flex justify="start">
				<Pagination
					defaultCurrent={1}
					current={currentPage}
					total={totalItems}
					pageSize={itemsPerPage}
					onChange={(page) => setCurrentPage(page)}
				/>
			</Flex>
		</Flex>
	);
};

export default FiltersSearchWithPreviewLeft;
