// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'antd';
import FiltersSearchListWithPreviewMobile from './FiltersSearchListWithPreviewMobile/FiltersSearchListWithPreviewMobile';
import FiltersSearchListWithPreviewLeft from './FiltersSearchWithPreviewLeft/FiltersSearchWithPreviewLeft';
import FiltersSearchListWithPreviewRight from './FiltersSearchWithPreviewRight/FiltersSearchWithPreviewRight';
import { searchListData } from '../../data/search.list.data';

const FiltersSearchWithPreview = (): React$MixedElement => (
	<>
		<MediaQuery minWidth={361}>
			<Row gutter={[16, 16]}>
				<Col span={12}>
					<FiltersSearchListWithPreviewLeft searchListData={searchListData} />
				</Col>
				<Col span={12}>
					<FiltersSearchListWithPreviewRight />
				</Col>
			</Row>
		</MediaQuery>
		<FiltersSearchListWithPreviewMobile />
	</>
);

export default FiltersSearchWithPreview;
