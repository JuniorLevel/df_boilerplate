// @flow

import React from 'react';
import { Row } from 'antd';
import FiltersSearchWithPreviewGridsItem from './FiltersSearchWithPreviewGridsItem/FiltersSearchWithPreviewGridsItem';

interface IFiltersSearchWithPreviewGridsProps {
	listData: any;
}

const FiltersSearchWithPreviewGrids = ({
	listData,
}: IFiltersSearchWithPreviewGridsProps): React$MixedElement => (
	<>
		{listData.map((item) => (
			<Row gutter={[12, 12]} key={item.id} style={{ marginBottom: '10px' }}>
				<FiltersSearchWithPreviewGridsItem listData={item} />
			</Row>
		))}
	</>
);

export default FiltersSearchWithPreviewGrids;
