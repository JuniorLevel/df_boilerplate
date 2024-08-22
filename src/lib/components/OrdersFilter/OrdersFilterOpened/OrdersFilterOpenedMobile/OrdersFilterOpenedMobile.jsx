// @flow

import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { ReactSortable } from 'react-sortablejs';
import { Flex } from 'antd';
import { filtersCards } from '../data';
import { OrdersFilterOpenedCards } from '../OrdersFilterOpenedCards/OrdersFilterOpenedCards';
import { OrdersFilterCardsContainer } from '../../OrdersFilterCardsContainer/OrdersFilterCardsContainer';
import { OrdersFilterOpenedCardsAddButton } from '../OrdersFilterOpenedCards/OrdersFilterOpenedCardsAddButton/OrdersFilterOpenedCardsAddButton';

export const OrdersFilterOpenedMobile = (): React$MixedElement => {
	const [cardsSortable, setCardsSortable] = useState(filtersCards);

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
							<OrdersFilterOpenedCards key={card.id} cardItem={card.cardItem} />
						))}
					</ReactSortable>
				</OrdersFilterCardsContainer>
				<OrdersFilterOpenedCardsAddButton />
			</Flex>
		</MediaQuery>
	);
};
