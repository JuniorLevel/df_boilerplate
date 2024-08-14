// @flow

import React from 'react';
import { Row, Col } from 'antd';
import { Layout } from '../../../lib/components/Layout/Layout';
import { FiltersOpened } from '../../../lib/components/FiltersOpened/FiltersOpened';
import { FiltersSearchListWithPreview } from '../../../lib/components/FiltersSearchListWithPreview/FiltersSearchListWithPreview';
import { buttons } from '../../../lib/components/Layout/buttons';
import { Footer } from '../../../lib/components/Footer/Footer';
import { FiltersSearchListWithPreviewContainer } from '../../../lib/components/FiltersSearchListWithPreview/FiltersSearchListWithPreviewContainer/FiltersSearchListWithPreviewContainer';
import { filtersCards } from '../../../lib/data/filters.cards.data';

export const DiffOpenedCardsPage = (): React$MixedElement => (
	<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
		<Row>
			<Col span={12}>
				<FiltersOpened isOpen filtersCards={filtersCards} />
				<FiltersSearchListWithPreviewContainer height={555}>
					<FiltersSearchListWithPreview />
				</FiltersSearchListWithPreviewContainer>
			</Col>
			<Col span={12}>
				<FiltersOpened isOpen filtersCards={filtersCards} />
				<FiltersSearchListWithPreviewContainer height={555}>
					<FiltersSearchListWithPreview />
				</FiltersSearchListWithPreviewContainer>
			</Col>
		</Row>
		<Footer />
	</Layout>
);
