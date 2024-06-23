// @flow

import React from 'react';
import { Flex } from 'antd';
import Container from '../../components/Container/Container';
import FiltersSearchWithPreview from '../../components/Shared/FiltersSearchWithPreview/FiltersSearchWithPreview';
import FiltersClosedList from '../../components/Shared/FiltersClosed/FiltersClosedList/FiltersClosedList';

const DiffClosedCardsPage = (): React$MixedElement => (
	<Container>
		<Flex wrap>
			<div style={{ width: '50%' }}>
				<FiltersClosedList />
				<div>
					<FiltersSearchWithPreview />
				</div>
			</div>
			<div style={{ width: '50%' }}>
				<FiltersClosedList />
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

export default DiffClosedCardsPage;
