// @flow

import React from 'react';
import { Col } from 'antd';
import FiltersSearchListItemMobileInfoStatus from '../../FiltersSearch/FiltersSearchListItem/FiltersSearchListItemMobile/FiltersSearchListItemMobileInfoStatus/FiltersSearchListItemMobileInfoStatus';
import StatusContainer from '../../StatusContainer/StatusContainer';

interface IFiltersSearchWithPreviewGridsProps {
	listData: any;
}

const FiltersSearchWithPreviewGrids = ({
	listData,
}: IFiltersSearchWithPreviewGridsProps): React$MixedElement => (
	<>
		{listData.dataSearch.map((item) => (
			<Col span={24} key={item.id}>
				<StatusContainer>
					<FiltersSearchListItemMobileInfoStatus key={item.id} item={item} />
				</StatusContainer>
			</Col>
		))}
	</>
);

export default FiltersSearchWithPreviewGrids;
