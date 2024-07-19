// @flow

import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { ReactSortable } from 'react-sortablejs';
import { Flex } from 'antd';
import { filtersCards } from '../../../data/filters.cards.data';
import FiltersOpenedCards from '../FiltersOpenedCards/FiltersOpenedCards';
import FiltersCardsContainer from '../../FiltersCardsContainer/FiltersCardsContainer';
import FiltersOpenedCardAddButton from '../FiltersOpenedCards/FiltersOpenedCardsAddButton/FiltersOpenedCardsAddButton';

const FiltersOpenedMobile = (): React$MixedElement => {
	const [cardsSortable, setCardsSortable] = useState(filtersCards);

	return (
		<MediaQuery maxWidth={360}>
			<Flex vertical justify="space-between" style={{ height: '100%' }}>
				<FiltersCardsContainer>
					<ReactSortable
						list={cardsSortable}
						setList={setCardsSortable}
						animation={150}
						style={{ display: 'flex', flexDirection: 'column' }}
					>
						{cardsSortable.map((card) => (
							<FiltersOpenedCards key={card.id} cardItem={card.cardItem} />
						))}
					</ReactSortable>
				</FiltersCardsContainer>
				<FiltersOpenedCardAddButton />
			</Flex>
		</MediaQuery>
	);
};

export default FiltersOpenedMobile;
