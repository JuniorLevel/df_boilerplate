// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';

interface IFiltersCardsContainerProps {
	children: React.Node;
}

export const FiltersCardsContainer = ({
	children,
}: IFiltersCardsContainerProps): React$MixedElement => (
	<>
		<MediaQuery minWidth={361}>
			<Flex
				gap="middle"
				style={{
					margin: '10px',
					overflowX: 'auto',
				}}
			>
				{children}
			</Flex>
		</MediaQuery>
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
	</>
);
