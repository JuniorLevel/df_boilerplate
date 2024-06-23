// @flow

import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import { filtersCards } from '../../../../data/filters.cards.data';
import FiltersOpenedCards from '../FiltersOpenedCards/FiltersOpenedCards';
import FiltersCardsContainer from '../../FiltersCardsContainer/FiltersCardsContainer';
import FiltersOpenedCardsAddButton from '../FiltersOpenedCards/FiltersOpenedCardsAddButton/FiltersOpenedCardsAddButton';
import { StyledReactSortable } from './FiltersOpenedDesktop.styles';

const FiltersOpenedDesktop = (): React$MixedElement => {
	const [cardsSortable, setCardsSortable] = useState(filtersCards);

	return (
		<MediaQuery minWidth={361}>
			<FiltersCardsContainer>
				<StyledReactSortable
					list={cardsSortable}
					setList={setCardsSortable}
					animation={150}
				>
					{cardsSortable.map((card) => (
						<FiltersOpenedCards key={card.id} cardItem={card.cardItem} />
					))}
				</StyledReactSortable>
				<FiltersOpenedCardsAddButton />
			</FiltersCardsContainer>
		</MediaQuery>
	);
};

export default FiltersOpenedDesktop;
