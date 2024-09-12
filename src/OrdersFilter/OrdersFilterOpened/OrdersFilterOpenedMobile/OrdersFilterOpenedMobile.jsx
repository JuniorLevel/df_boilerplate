// @flow

import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { ReactSortable } from 'react-sortablejs';
import { Flex } from 'antd';
import { filtersOpenedCards } from '../../data';
import { OrdersFilterOpenedCards } from '../OrdersFilterOpenedCards/OrdersFilterOpenedCards';
import { OrdersFilterCardsContainer } from '../../OrdersFilterCardsContainer/OrdersFilterCardsContainer';
import { OrdersFilterOpenedCardsAddButton } from '../OrdersFilterOpenedCards/OrdersFilterOpenedCardsAddButton/OrdersFilterOpenedCardsAddButton';

interface IOrdersFilterOpenedMobileProps {
	dialog: boolean;
}

export const OrdersFilterOpenedMobile = ({
	dialog,
}: IOrdersFilterOpenedMobileProps): React$MixedElement => {
	const [cardsSortable, setCardsSortable] = useState(filtersOpenedCards);

	const exampleClick = () => {
		const newItem = {
			id: Date.now(),
			cardItem: [],
		};
		setCardsSortable([...cardsSortable, newItem]);
	};

	return (
		<MediaQuery maxWidth={360}>
			<Flex vertical justify="space-between" style={{ height: '100%' }}>
				<OrdersFilterCardsContainer>
					<ReactSortable
						list={cardsSortable}
						setList={setCardsSortable}
						animation={150}
						style={{ display: 'flex', flexDirection: 'column' }}
					>
						{cardsSortable.map((card) => (
							<OrdersFilterOpenedCards
								dialog={dialog}
								key={card.id}
								cardItem={card.cardItem}
							/>
						))}
					</ReactSortable>
				</OrdersFilterCardsContainer>
				<OrdersFilterOpenedCardsAddButton onClick={exampleClick} />
			</Flex>
		</MediaQuery>
	);
};
