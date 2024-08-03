// @flow

import React from 'react';
import { Row } from 'antd';
import FiltersSearchListItemUsersInfo from '../../../FiltersSearch/FiltersSearchListItem/FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';
import FiltersSearchWithPreviewGrids from '../../FiltersSearchWithPreviewGrids/FiltersSearchWithPreviewGrids';

interface IFiltersSearchWithPreviewLeftItemProps {
	listData: any | null;
}

const FiltersSearchWithPreviewLeftItem = ({
	listData,
}: IFiltersSearchWithPreviewLeftItemProps): React$MixedElement => (
	<Row gutter={[12, 12]}>
		{listData && (
			<>
				<FiltersSearchWithPreviewGrids listData={listData} />
				<div style={{ width: '100%' }}>
					<FiltersSearchListItemUsersInfo
						dataSearchUsers={listData.dataSearchUsers}
					/>
				</div>
			</>
		)}
		{!listData && (
			<>
				<div
					style={{
						width: '100%',
						margin: '0 6px',
						border: '1px solid black',
						padding: '10px',
						textAlign: 'center',
					}}
				>
					Not found
				</div>
				<div style={{ width: '100%', padding: '0 6px' }}>
					<FiltersSearchListItemUsersInfo dataSearchUsers={null} />
				</div>
			</>
		)}
	</Row>
);

export default FiltersSearchWithPreviewLeftItem;
