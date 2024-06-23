// @flow

import React from 'react';
import { Flex } from 'antd';
import Container from '../../components/Container/Container';
import FiltersOpened from '../../components/Shared/FiltersOpened/FiltersOpened';
import FiltersSearchWithPreview from '../../components/Shared/FiltersSearchWithPreview/FiltersSearchWithPreview';

const DiffOpenedCardsPage = (): React$MixedElement => (
	<Container>
		<Flex wrap>
			<div style={{ width: '50%' }}>
				<FiltersOpened />
				<FiltersSearchWithPreview />
			</div>
			<div style={{ width: '50%' }}>
				<FiltersOpened />
				<FiltersSearchWithPreview />
			</div>
			<div
				style={{
					height: '100px',
					width: '100%',
					border: '1px solid black',
					margin: '10px',
				}}
			>
				<Flex justify="center" align="center" style={{ height: '100%' }}>
					DIFF
				</Flex>
			</div>
		</Flex>
	</Container>
);

export default DiffOpenedCardsPage;
