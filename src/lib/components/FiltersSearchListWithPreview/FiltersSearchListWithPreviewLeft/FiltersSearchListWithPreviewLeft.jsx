// @flow

import React from 'react';
import { Pagination } from 'antd';

interface IFiltersSearchListWithPreviewLeftProps {
	children: React.Node;
}
export const FiltersSearchListWithPreviewLeft = ({
	children,
}: IFiltersSearchListWithPreviewLeftProps): React$MixedElement => (
	<>
		<div
			style={{
				height: '97%',
				overflow: 'auto',
				overflowX: 'hidden',
				marginBottom: '5px',
			}}
		>
			{children}
		</div>
		<Pagination defaultCurrent={1} total={50} />
	</>
);
