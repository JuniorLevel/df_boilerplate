// @flow

import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { ReactSortable } from 'react-sortablejs';
import styled from 'styled-components';
import FiltersOpenedMobile from './FiltersOpenedMobile/FiltersOpenedMobile';
import { filtersCards } from '../../data/filters.cards.data';
import FiltersOpenedCards from './FiltersOpenedCards/FiltersOpenedCards';
import FiltersCardsContainer from '../FiltersCardsContainer/FiltersCardsContainer';
import FiltersOpenedCardsAddButton from './FiltersOpenedCards/FiltersOpenedCardsAddButton/FiltersOpenedCardsAddButton';

const StyledReactSortable = styled(ReactSortable)`
	display: flex;
	gap: 15px;
`;

const FiltersOpened = (): React$MixedElement => {
	const [cardsSortable, setCardsSortable] = useState(filtersCards);

	return (
		<>
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
			<FiltersOpenedMobile />
		</>
	);
};

export default FiltersOpened;
