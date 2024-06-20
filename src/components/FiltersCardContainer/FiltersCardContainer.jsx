// @flow

import React from 'react';
import { Flex } from 'antd';

interface IFiltersCardContainer {
	children: React.Node;
}

const FiltersCardContainer = ({
	children,
}: IFiltersCardContainer): React$MixedElement => (
	<Flex
		gap="middle"
		style={{
			margin: '10px 10px 0 10px',
			padding: '10px',
			overflowX: 'auto',
		}}
	>
		{children}
	</Flex>
);

export default FiltersCardContainer;
