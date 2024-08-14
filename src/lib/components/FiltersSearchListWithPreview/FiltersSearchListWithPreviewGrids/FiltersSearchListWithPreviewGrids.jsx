// @flow

import React from 'react';
import { Col } from 'antd';
import { FiltersSearchListItemMobileInfoStatus } from '../../FiltersSearchList/FiltersSearchListItem/FiltersSearchListItemMobile/FiltersSearchListItemMobileInfoStatus/FiltersSearchListItemMobileInfoStatus';
import { StatusContainer } from '../../StatusContainer/StatusContainer';

interface IFiltersSearchListWithPreviewGridsProps {
	listData: any;
}

export const FiltersSearchListWithPreviewGrids = ({
	listData,
}: IFiltersSearchListWithPreviewGridsProps): React$MixedElement => (
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
