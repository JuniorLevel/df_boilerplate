// @flow

import React from 'react';
import { Pagination } from 'antd';

interface IFiltersSearchWithPreviewLeftProps {
	children: React.Node;
}
const FiltersSearchWithPreviewLeft = ({
	children,
}: IFiltersSearchWithPreviewLeftProps): React$MixedElement => (
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
export default FiltersSearchWithPreviewLeft;
