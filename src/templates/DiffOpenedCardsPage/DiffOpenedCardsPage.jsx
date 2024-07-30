// @flow

import React from 'react';
import { Row, Col } from 'antd';
import { Container } from '../../components/Container/Container';
import FiltersOpened from '../../components/FiltersOpened/FiltersOpened';
import FiltersSearchWithPreview from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreview';
import { buttons } from '../../components/Container/buttons';
import Footer from '../../components/Footer/Footer';
import FiltersSearchWithPreviewContainer from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreviewContainer/FiltersSearchWithPreviewContainer';

const DiffOpenedCardsPage = (): React$MixedElement => (
	<Container
		buttons={buttons}
		title="Caption"
		theme="light"
		avatar={{ title: 'AV' }}
	>
		<Row>
			<Col span={12}>
				<FiltersOpened />
				<FiltersSearchWithPreviewContainer height={555}>
					<FiltersSearchWithPreview />
				</FiltersSearchWithPreviewContainer>
			</Col>
			<Col span={12}>
				<FiltersOpened />
				<FiltersSearchWithPreviewContainer height={555}>
					<FiltersSearchWithPreview />
				</FiltersSearchWithPreviewContainer>
			</Col>
		</Row>
		<Footer />
	</Container>
);

export default DiffOpenedCardsPage;
