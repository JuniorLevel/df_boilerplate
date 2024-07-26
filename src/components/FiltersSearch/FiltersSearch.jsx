// @flow

import React, { useState } from 'react';
import { Flex, Pagination } from 'antd';
import MediaQuery from 'react-responsive';
import FiltersSearchListMobile from './FiltersSearchListMobile/FiltersSearchListMobile';
import FiltersSearchListItem from './FiltersSearchListItem/FiltersSearchListItem';
import { searchListData } from '../../data/search.list.data';

const FiltersSearch = (): React$MixedElement => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalItems = searchListData.length;

	const startIndex = (currentPage - 1) * 5;
	const endIndex = startIndex + 5;
	const currentItems = searchListData.slice(startIndex, endIndex);

	return (
		<>
			<MediaQuery minWidth={361}>
				<Flex
					vertical
					justify="space-between"
					gap={10}
					style={{
						height: '100%',
						overflow: 'auto',
						padding: 10,
					}}
				>
					<div
						style={{
							overflowX: 'hidden',
						}}
					>
						{currentItems.map((listData) => (
							<FiltersSearchListItem listData={listData} key={listData.id} />
						))}
					</div>
					<Flex justify="start">
						<Pagination
							defaultCurrent={1}
							current={currentPage}
							total={totalItems}
							pageSize={5}
							onChange={(page) => setCurrentPage(page)}
						/>
					</Flex>
				</Flex>
			</MediaQuery>
			<FiltersSearchListMobile />
		</>
	);
};

export default FiltersSearch;
