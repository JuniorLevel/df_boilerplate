// @flow

import React from 'react';
import { Flex, Badge, Popover } from 'antd';
import { OrdersFilterOpenedCardItem } from '../../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterOpenedCardItem/OrdersFilterOpenedCardItem';
import {
	StyledCardsDivPopover,
	StyledCardItemDiv,
	StyledCardsDiv,
} from './OrdersFilterClosedCards.styles';
import { StatusContainer } from '../../../StatusContainer/StatusContainer';

interface IOrdersFilterClosedCardsProps {
	cardClosed: any;
}

export const OrdersFilterClosedCards = ({
	cardClosed,
}: IOrdersFilterClosedCardsProps): React$MixedElement => (
	<Popover
		placement="topRight"
		content={
			<StyledCardsDivPopover>
				{cardClosed.item.map((item) => (
					<StyledCardItemDiv key={item.id}>
						<StatusContainer>
							<OrdersFilterOpenedCardItem key={item.id} item={item} />
						</StatusContainer>
					</StyledCardItemDiv>
				))}
			</StyledCardsDivPopover>
		}
	>
		<StyledCardsDiv>
			<Flex gap={10} align="center">
				<div>{cardClosed.title}</div>
				<Badge count={cardClosed.item.length} />
			</Flex>
		</StyledCardsDiv>
	</Popover>
);
