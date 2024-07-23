// @flow

import React from 'react';
import { Col } from 'antd';
import FiltersSearchListItemMobileInfoStatus from '../../../FiltersSearch/FiltersSearchListItem/FiltersSearchListItemMobile/FiltersSearchListItemMobileInfoStatus/FiltersSearchListItemMobileInfoStatus';
import StatusContainer from '../../../StatusContainer/StatusContainer';

interface IFiltersSearchWithPreviewGridsItemProps {
	listData: any;
}

const FiltersSearchWithPreviewGridsItem = ({
	listData,
}: IFiltersSearchWithPreviewGridsItemProps): React$MixedElement => (
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

export default FiltersSearchWithPreviewGridsItem;
