// @flow

import { Flex } from 'antd';

import React from 'react';
import FiltersSearchList from '../FiltersSearchList/FiltersSearchList';

const FiltersSearchListWithPreviewPage = (): React$MixedElement => (
	<Flex gap={10}>
		<div style={{ maxWidth: '50%' }}>
			<FiltersSearchList />
		</div>
		<Flex
			justify="center"
			align="center"
			style={{
				border: '1px solid black',
				width: '100%',
				fontSize: '2rem',
				margin: '10px 10px 0 0',
			}}
		>
			<div>Preview Page</div>
		</Flex>
	</Flex>
);

export default FiltersSearchListWithPreviewPage;
