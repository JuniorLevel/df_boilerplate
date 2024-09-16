// @flow

import React, { useState } from 'react';
import { Flex } from 'antd';
import { OrdersFilterOpenedCardItem } from './OrdersFilterOpenedCardItem/OrdersFilterOpenedCardItem';
import { OrdersFilterCardAddItemButton } from './OrdersFilterCardAddItemButton/OrdersFilterCardAddItemButton';
import {
	StyledCardDiv,
	StyledCardItemDiv,
} from './OrdersFilterOpenedCards.styles';
import { StatusContainer } from '../../../StatusContainer/StatusContainer';
import { OrdersFilterCardAddItemDialogButton } from './OrdersFilterCardAddItemDialogButton/OrdersFilterCardAddItemDialogButton';

interface IOrdersFilterOpenedCardsProps {
	cardItem: Array<any>;
	dialog: boolean;
}

export const OrdersFilterOpenedCards = ({
	cardItem,
	dialog,
}: IOrdersFilterOpenedCardsProps): React.Node => {
	const [filterItems, setFilterItems] = useState(cardItem);

	const addFilterItem = () => {
		const newItem = {
			id: Date.now(),
			status: 'updated',
			text: `project-${Date.now().toString().slice(-2)}`,
		};
		setFilterItems([...filterItems, newItem]);
	};

	return (
		<StyledCardDiv>
			<Flex vertical justify="space-between" style={{ minHeight: '295px' }}>
				<div>
					{filterItems.map((item) => (
						<StyledCardItemDiv key={item.id}>
							<StatusContainer>
								<OrdersFilterOpenedCardItem key={item.id} item={item} />
							</StatusContainer>
						</StyledCardItemDiv>
					))}
				</div>
				{!dialog && <OrdersFilterCardAddItemButton onClick={addFilterItem} />}
				{dialog && (
					<OrdersFilterCardAddItemDialogButton cardItem={filterItems} />
				)}
			</Flex>
		</StyledCardDiv>
	);
};
