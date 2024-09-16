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
import { filtersClosedCards } from '../data';

const StyledReactSortable = styled(ReactSortable)`
	display: flex;
	gap: 15px;
`;

interface IOrdersFilterOpenedProps {
	open: boolean;
	dialog: boolean;
	filters: any[];
}

export const OrdersFilterOpened = ({
	open,
	dialog,
	filters,
}: IOrdersFilterOpenedProps): React.Node => {
	const [cardsSortable, setCardsSortable] = useState(filters);

	const createFilter = () => {
		const newItem = {
			id: Date.now(),
			cardItem: [],
		};
		setCardsSortable([...cardsSortable, newItem]);
	};

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
									dialog={dialog}
									key={card.id}
									cardItem={card.cardItem}
								/>
							))}
						</StyledReactSortable>
						<OrdersFilterOpenedCardsAddButton onClick={createFilter} />
					</OrdersFilterCardsContainer>
				) : (
					<OrdersFilterClosed
						open={open}
						dialog={dialog}
						filters={filtersClosedCards}
					/>
				)}
			</MediaQuery>
			<OrdersFilterOpenedMobile dialog={dialog} />
		</>
	);
};
