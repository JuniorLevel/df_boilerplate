// @flow

import React from 'react';
import { Flex, Pagination } from 'antd';

interface IFiltersSearchPaginationProps {
	defaultCurrent: number;
	current: number;
	total: number;
	pageSize: number;
	onChange: (page: number) => void;
}

const FiltersSearchPagination = ({
	defaultCurrent,
	current,
	total,
	pageSize,
	onChange,
}: IFiltersSearchPaginationProps): React$MixedElement => (
	<Flex justify="start">
		<Pagination
			defaultCurrent={defaultCurrent}
			current={current}
			total={total}
			pageSize={pageSize}
			onChange={onChange}
		/>
	</Flex>
);

export default FiltersSearchPagination;
