// @flow

import React from 'react';
import { Row, Col } from 'antd';
import { Container } from '../../components/Container/Container';
import FiltersSearchWithPreview from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreview';
import FiltersClosed from '../../components/FiltersClosed/FiltersClosed';
import { FiltersClosedListProvider } from '../../context/FiltersClosedListContext/FiltersClosedListContext';
import { buttons } from '../../components/Container/buttons';
import { filtersList } from '../../data/filters.cards.data';
import FiltersSearchWithPreviewContainer from '../../components/FiltersSearchWithPreview/FiltersSearchWithPreviewContainer/FiltersSearchWithPreviewContainer';
import Footer from '../../components/Footer/Footer';

const DiffClosedCardsPage = (): React$MixedElement => (
	<FiltersClosedListProvider>
		<Container
			buttons={buttons}
			title="Caption"
			theme="light"
			avatar={{ title: 'AV' }}
		>
			<Row>
				<Col span={12}>
					<FiltersClosed isOpen={false} filtersList={filtersList} />
					<FiltersSearchWithPreviewContainer height={280}>
						<FiltersSearchWithPreview />
					</FiltersSearchWithPreviewContainer>
				</Col>
				<Col span={12}>
					<FiltersClosed isOpen={false} filtersList={filtersList} />
					<FiltersSearchWithPreviewContainer height={280}>
						<FiltersSearchWithPreview />
					</FiltersSearchWithPreviewContainer>
				</Col>
			</Row>
			<Footer />
		</Container>
	</FiltersClosedListProvider>
);

export default DiffClosedCardsPage;
