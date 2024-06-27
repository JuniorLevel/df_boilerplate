// @flow

import React, { useState } from 'react';
import { Flex, Pagination } from 'antd';
import MediaQuery from 'react-responsive';
import FiltersSearchListItem from '../FiltersSearchListItem/FiltersSearchListItem';
import { searchListData } from '../../../../data/search.list.data';

interface IFiltersSearchListDesktop {
	itemsPerPage: number;
}

const FiltersSearchListDesktop = ({
	itemsPerPage,
}: IFiltersSearchListDesktop): React$MixedElement => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalItems = searchListData.length;

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = searchListData.slice(startIndex, endIndex);

	return (
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
						overflow: 'auto',
					}}
				>
					{currentItems.map((listData) => (
						<Flex
							key={listData.id}
							gap="middle"
							style={{
								minHeight: '200px',
								marginBottom: '5px',
							}}
						>
							<FiltersSearchListItem listData={listData} />
						</Flex>
					))}
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
		</MediaQuery>
	);
};

export default FiltersSearchListDesktop;
