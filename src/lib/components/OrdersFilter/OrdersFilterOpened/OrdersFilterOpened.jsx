// @flow

import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { ReactSortable } from 'react-sortablejs';
import styled from 'styled-components';
import { OrdersFilterOpenedMobile } from './OrdersFilterOpenedMobile/OrdersFilterOpenedMobile';
import { OrdersFilterOpenedCards } from './OrdersFilterOpenedCards/OrdersFilterOpenedCards';
import { OrdersFilterCardsContainer } from '../OrdersFilterCardsContainer/OrdersFilterCardsContainer';
import { OrdersFilterOpenedCardsAddButton } from './OrdersFilterOpenedCards/OrdersFilterOpenedCardsAddButton/OrdersFilterOpenedCardsAddButton';
import { OrdersFilterClosed } from '../OrdersFilterClosed/OrdersFilterClosed';
import { filtersList } from '../../../data/filters.cards.data';

const StyledReactSortable = styled(ReactSortable)`
	display: flex;
	gap: 15px;
`;

interface IOrdersFilterOpenedProps {
	open: boolean;
	filters: any[];
}

export const OrdersFilterOpened = ({
	open,
	filters,
}: IOrdersFilterOpenedProps): React$MixedElement => {
	const [cardsSortable, setCardsSortable] = useState(filters);

	return (
		<>
			<MediaQuery minWidth={361}>
				{open ? (
					<OrdersFilterCardsContainer>
						<StyledReactSortable
							list={cardsSortable}
							setList={setCardsSortable}
							animation={150}
						>
							{cardsSortable.map((card) => (
								<OrdersFilterOpenedCards
									key={card.id}
									cardItem={card.cardItem}
								/>
							))}
						</StyledReactSortable>
						<OrdersFilterOpenedCardsAddButton />
					</OrdersFilterCardsContainer>
				) : (
					<OrdersFilterClosed open={open} filters={filtersList} />
				)}
			</MediaQuery>
			<OrdersFilterOpenedMobile />
		</>
	);
};
