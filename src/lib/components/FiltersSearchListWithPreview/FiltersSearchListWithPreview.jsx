// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'antd';
import { FiltersSearchListWithPreviewMobile } from './FiltersSearchListWithPreviewMobile/FiltersSearchListWithPreviewMobile';
import { FiltersSearchListWithPreviewLeft } from './FiltersSearchListWithPreviewLeft/FiltersSearchListWithPreviewLeft';
import { FiltersSearchListWithPreviewRight } from './FiltersSearchListWithPreviewRight/FiltersSearchListWithPreviewRight';
import { searchListData as data } from '../../data/search.list.data';
import { FiltersSearchListWithPreviewLeftItem } from './FiltersSearchListWithPreviewLeft/FiltersSearchListWithPreviewLeftItem/FiltersSearchListWithPreviewLeftItem';

export const FiltersSearchListWithPreview = (): React$MixedElement => (
	<>
		<MediaQuery minWidth={361}>
			<Row gutter={[16, 16]}>
				<Col span={12}>
					<FiltersSearchListWithPreviewLeft>
						<FiltersSearchListWithPreviewLeftItem
							key={data[0].id}
							listData={data[0]}
						/>
						<FiltersSearchListWithPreviewLeftItem
							key={data[1].id}
							listData={data[1]}
						/>
						<FiltersSearchListWithPreviewLeftItem
							key={data[2].id}
							listData={data[2]}
						/>
						<FiltersSearchListWithPreviewLeftItem
							key={data[3].id}
							listData={data[3]}
						/>
						<FiltersSearchListWithPreviewLeftItem
							key={data[4].id}
							listData={data[4]}
						/>
						<FiltersSearchListWithPreviewLeftItem
							key={data[5].id}
							listData={data[5]}
						/>
						<FiltersSearchListWithPreviewLeftItem
							key={data[6].id}
							listData={null}
						/>
					</FiltersSearchListWithPreviewLeft>
				</Col>
				<Col span={12}>
					<FiltersSearchListWithPreviewRight />
				</Col>
			</Row>
		</MediaQuery>
		<FiltersSearchListWithPreviewMobile />
	</>
);
