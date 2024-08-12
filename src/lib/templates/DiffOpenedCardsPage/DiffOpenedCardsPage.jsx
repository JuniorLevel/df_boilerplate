// @flow

import React from 'react';
import { Row, Col } from 'antd';
import { Container } from '../../components/Container/Container';
import FiltersOpened from '../../components/FiltersOpened/FiltersOpened';
import FiltersSearchWithPreview from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreview';
import { buttons } from '../../components/Container/buttons';
import Footer from '../../components/Footer/Footer';
import FiltersSearchWithPreviewContainer from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreviewContainer/FiltersSearchWithPreviewContainer';
import { filtersCards } from '../../data/filters.cards.data';

const DiffOpenedCardsPage = (): React$MixedElement => (
	<Container buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
		<Row>
			<Col span={12}>
				<FiltersOpened isOpen filtersCards={filtersCards} />
				<FiltersSearchWithPreviewContainer height={555}>
					<FiltersSearchWithPreview />
				</FiltersSearchWithPreviewContainer>
			</Col>
			<Col span={12}>
				<FiltersOpened isOpen filtersCards={filtersCards} />
				<FiltersSearchWithPreviewContainer height={555}>
					<FiltersSearchWithPreview />
				</FiltersSearchWithPreviewContainer>
			</Col>
		</Row>
		<Footer />
	</Container>
);

export default DiffOpenedCardsPage;
