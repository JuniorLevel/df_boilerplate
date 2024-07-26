// @flow

import React from 'react';
import { Row, Col } from 'antd';
import MediaQuery from 'react-responsive';
import FiltersSearchListWithPreviewMobile from './FiltersSearchListWithPreviewMobile/FiltersSearchListWithPreviewMobile';
import FiltersSearchListWithPreviewLeft from './FiltersSearchWithPreviewLeft/FiltersSearchWithPreviewLeft';
import FiltersSearchListWithPreviewRight from './FiltersSearchWithPreviewRight/FiltersSearchWithPreviewRight';

const FiltersSearchWithPreview = (): React$MixedElement => (
	<>
		<MediaQuery minWidth={361}>
			<Row gutter={[16, 16]} style={{ height: '100%', padding: '0 10px' }}>
				<Col
					span={12}
					style={{
						height: '100%',
					}}
				>
					<FiltersSearchListWithPreviewLeft />
				</Col>
				<Col span={12} style={{ overflow: 'auto' }}>
					<FiltersSearchListWithPreviewRight />
				</Col>
			</Row>
		</MediaQuery>
		<FiltersSearchListWithPreviewMobile />
	</>
);

export default FiltersSearchWithPreview;
