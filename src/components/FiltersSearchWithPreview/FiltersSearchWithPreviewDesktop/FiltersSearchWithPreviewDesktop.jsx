// @flow

import React, { useState } from 'react';
import { Flex, Pagination } from 'antd';
import MediaQuery from 'react-responsive';
import { searchListData } from '../../../data/search.list.data';
import FiltersSearchWithPreviewGrids from '../FiltersSearchWithPreviewGrids/FiltersSearchWithPreviewGrids';

const FiltersSearchWithPreviewDesktop = (): React$MixedElement => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalItems = searchListData.length;
	const itemsPerPage = 5;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = searchListData.slice(startIndex, endIndex);

	return (
		<MediaQuery minWidth={361}>
			<Flex gap={10} style={{ height: '100%' }}>
				<Flex
					style={{
						maxWidth: '47%',
						width: '100%',
						padding: '10px',
						overflowY: 'auto',
					}}
				>
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
				</Flex>
				<Flex
					justify="center"
					align="center"
					style={{
						border: '1px solid black',
						width: '100%',
						fontSize: '2rem',
						margin: '10px 10px 0 0',
					}}
				>
					<div>Preview Page</div>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default FiltersSearchWithPreviewDesktop;
