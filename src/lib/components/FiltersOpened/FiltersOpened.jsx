// @flow

import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { ReactSortable } from 'react-sortablejs';
import styled from 'styled-components';
import { FiltersOpenedMobile } from './FiltersOpenedMobile/FiltersOpenedMobile';
import { FiltersOpenedCards } from './FiltersOpenedCards/FiltersOpenedCards';
import { FiltersCardsContainer } from '../FiltersCardsContainer/FiltersCardsContainer';
import { FiltersOpenedCardsAddButton } from './FiltersOpenedCards/FiltersOpenedCardsAddButton/FiltersOpenedCardsAddButton';
import { FiltersClosed } from '../FiltersClosed/FiltersClosed';
import { filtersList } from '../../data/filters.cards.data';

const StyledReactSortable = styled(ReactSortable)`
	display: flex;
	gap: 15px;
`;

interface IFiltersOpenedProps {
	isOpen: boolean;
	filtersCards: any[];
}

export const FiltersOpened = ({
	isOpen,
	filtersCards,
}: IFiltersOpenedProps): React$MixedElement => {
	const [cardsSortable, setCardsSortable] = useState(filtersCards);

	return (
		<>
			<MediaQuery minWidth={361}>
				{isOpen ? (
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
				) : (
					<FiltersClosed isOpen={isOpen} filtersList={filtersList} />
				)}
			</MediaQuery>
			<FiltersOpenedMobile />
		</>
	);
};
