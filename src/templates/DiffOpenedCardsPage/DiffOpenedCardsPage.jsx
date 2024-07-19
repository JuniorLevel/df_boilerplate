// @flow

import React from 'react';
import { Flex } from 'antd';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import FiltersOpened from '../../components/FiltersOpened/FiltersOpened';
import FiltersSearchWithPreview from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreview';

const FiltersSearchWithPreviewContainer = styled.div`
	height: calc(100vh - 545px);
`;

const DiffOpenedCardsPage = (): React$MixedElement => (
	<Container>
		<Flex>
			<div style={{ maxWidth: '50%' }}>
				<FiltersOpened />
				<FiltersSearchWithPreviewContainer>
					<Flex style={{ height: '100%' }}>
						<FiltersSearchWithPreview />
					</Flex>
				</FiltersSearchWithPreviewContainer>
			</div>
			<div style={{ maxWidth: '50%' }}>
				<FiltersOpened />
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
);

export default DiffOpenedCardsPage;
