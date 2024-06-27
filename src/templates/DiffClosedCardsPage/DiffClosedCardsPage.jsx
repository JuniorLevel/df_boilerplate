// @flow

import React from 'react';
import { Flex } from 'antd';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import FiltersSearchWithPreview from '../../components/Shared/FiltersSearchWithPreview/FiltersSearchWithPreview';
import FiltersClosedList from '../../components/Shared/FiltersClosedList/FiltersClosedList';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';

const FiltersSearchWithPreviewContainer = styled.div`
	height: calc(100vh - 270px);
`;

const DiffClosedCardsPage = (): React$MixedElement => (
	<FiltersClosedListProvider>
		<Container>
			<Flex>
				<div style={{ maxWidth: '50%' }}>
					<FiltersClosedList />
					<FiltersSearchWithPreviewContainer>
						<Flex style={{ height: '100%' }}>
							<FiltersSearchWithPreview />
						</Flex>
					</FiltersSearchWithPreviewContainer>
				</div>
				<div style={{ maxWidth: '50%' }}>
					<FiltersClosedList />
					<FiltersSearchWithPreviewContainer>
						<Flex style={{ height: '100%' }}>
							<FiltersSearchWithPreview />
						</Flex>
					</FiltersSearchWithPreviewContainer>
				</div>
			</Flex>
			<div
				style={{
					height: '100px',
					border: '1px solid black',
					margin: '10px',
				}}
			>
				<Flex justify="center" align="center" style={{ height: '100%' }}>
					DIFF
				</Flex>
			</div>
		</Container>
	</FiltersClosedListProvider>
);

export default DiffClosedCardsPage;
