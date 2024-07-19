// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';

interface IFiltersCardsContainerProps {
	children: React.Node;
}

const FiltersCardsContainer = ({
	children,
}: IFiltersCardsContainerProps): React$MixedElement => (
	<>
		<MediaQuery maxWidth={360}>
			<Flex
				justify="center"
				gap="middle"
				style={{
					padding: '10px',
				}}
			>
				{children}
			</Flex>
		</MediaQuery>
		<MediaQuery minWidth={361}>
			<Flex
				gap="middle"
				style={{
					margin: '10px 10px 0 10px',
					overflowX: 'auto',
				}}
			>
				{children}
			</Flex>
		</MediaQuery>
	</>
);

export default FiltersCardsContainer;
