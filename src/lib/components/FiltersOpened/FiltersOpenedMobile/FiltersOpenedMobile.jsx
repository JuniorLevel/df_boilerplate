// @flow

import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { ReactSortable } from 'react-sortablejs';
import { Flex } from 'antd';
import { filtersCards } from '../../../data/filters.cards.data';
import { FiltersOpenedCards } from '../FiltersOpenedCards/FiltersOpenedCards';
import { FiltersCardsContainer } from '../../FiltersCardsContainer/FiltersCardsContainer';
import { FiltersOpenedCardsAddButton } from '../FiltersOpenedCards/FiltersOpenedCardsAddButton/FiltersOpenedCardsAddButton';

export const FiltersOpenedMobile = (): React$MixedElement => {
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
				<FiltersOpenedCardsAddButton />
			</Flex>
		</MediaQuery>
	);
};
