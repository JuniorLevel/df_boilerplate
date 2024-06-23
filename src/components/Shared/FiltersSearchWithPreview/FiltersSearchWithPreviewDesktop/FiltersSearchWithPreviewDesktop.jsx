// @flow

import React from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import FiltersSearch from '../../FiltersSearch/FiltersSearch';

const FiltersSearchWithPreviewDesktop = (): React$MixedElement => (
	<MediaQuery minWidth={361}>
		<Flex gap={10}>
			<Flex
				style={{
					maxWidth: '47%',
					overflow: 'auto',
					height: '85vh',
				}}
			>
				<FiltersSearch itemsPerPage={1} />
			</Flex>
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
	</MediaQuery>
);

export default FiltersSearchWithPreviewDesktop;
