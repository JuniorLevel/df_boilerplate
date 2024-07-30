// @flow

import React, { useState } from 'react';
import { Row } from 'antd';
import FiltersSearchListItemUsersInfo from '../../FiltersSearch/FiltersSearchListItem/FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';
import FiltersSearchWithPreviewGrids from '../FiltersSearchWithPreviewGrids/FiltersSearchWithPreviewGrids';
import FiltersSearchPagination from '../../FiltersSearch/FiltersSearchPagination/FiltersSearchPagination';

interface IFiltersSearchWithPreviewLeftProps {
	searchListData: any;
}
const FiltersSearchWithPreviewLeft = ({
	searchListData,
}: IFiltersSearchWithPreviewLeftProps): React$MixedElement => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalItems = searchListData.length;
	const itemsPerPage = 5;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = searchListData.slice(startIndex, endIndex);

	return (
		<>
			<div
				style={{
					height: '97%',
					overflow: 'auto',
					overflowX: 'hidden',
					marginBottom: '5px',
				}}
			>
				{currentItems.map((item) => (
					<Row gutter={[12, 12]} key={item.id}>
						<FiltersSearchWithPreviewGrids listData={item} />
						<div style={{ width: '100%' }}>
							<FiltersSearchListItemUsersInfo
								dataSearchUsers={item.dataSearchUsers}
							/>
						</div>
					</Row>
				))}
			</div>
			<FiltersSearchPagination
				defaultCurrent={1}
				current={currentPage}
				total={totalItems}
				pageSize={5}
				onChange={(page: number): void => setCurrentPage(page)}
			/>
		</>
	);
};
export default FiltersSearchWithPreviewLeft;
