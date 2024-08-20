// @flow
import React from 'react';
import { Flex } from 'antd';
import { OrdersFilterOpenedCardItem } from './OrdersFilterOpenedCardItem/OrdersFilterOpenedCardItem';
import { OrdersFilterCardAddItemButton } from './OrdersFilterCardAddItemButton/OrdersFilterCardAddItemButton';
import {
	StyledCardDiv,
	StyledCardItemDiv,
} from './OrdersFilterOpenedCards.styles';
import { StatusContainer } from '../../../StatusContainer/StatusContainer';

interface IOrdersFilterOpenedCardsProps {
	cardItem: Array<any>;
}

export const OrdersFilterOpenedCards = ({
	cardItem,
}: IOrdersFilterOpenedCardsProps): React.Node => (
	<StyledCardDiv>
		<Flex vertical justify="space-between" style={{ minHeight: '295px' }}>
			<div>
				{cardItem.map((item) => (
					<StyledCardItemDiv key={item.id}>
						<StatusContainer>
							<OrdersFilterOpenedCardItem key={item.id} item={item} />
						</StatusContainer>
					</StyledCardItemDiv>
				))}
			</div>
			<OrdersFilterCardAddItemButton />
		</Flex>
	</StyledCardDiv>
);
