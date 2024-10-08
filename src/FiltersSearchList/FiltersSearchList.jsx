// @flow

import React from 'react';
import { Flex, Pagination } from 'antd';
import MediaQuery from 'react-responsive';
import { FiltersSearchListMobile } from './FiltersSearchListMobile/FiltersSearchListMobile';

interface IFiltersSearchListProps {
	children: React.Node;
}

export const FiltersSearchList = ({
	children,
}: IFiltersSearchListProps): React.Node => (
	<>
		<MediaQuery minWidth={361}>
			<Flex
				vertical
				justify="space-between"
				gap={10}
				style={{
					height: '100%',
					overflow: 'auto',
					padding: 10,
				}}
			>
				<div
					style={{
						overflowX: 'hidden',
					}}
				>
					{children}
				</div>
				<Pagination defaultCurrent={1} total={50} />
			</Flex>
		</MediaQuery>
		<FiltersSearchListMobile />
	</>
);
