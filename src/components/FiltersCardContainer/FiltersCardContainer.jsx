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
			padding: '10px',
			overflowX: 'auto',
			backgroundColor: 'pink',
		}}
	>
		{children}
	</Flex>
);

export default FiltersCardContainer;
