// @flow
import React, { useContext, useState } from 'react';
import { Flex } from 'antd';
import { useNavigate } from '@tanstack/react-router';
import { OrdersFilterOpenedCardItem } from './OrdersFilterOpenedCardItem/OrdersFilterOpenedCardItem';
import { OrdersFilterCardAddItemButton } from './OrdersFilterCardAddItemButton/OrdersFilterCardAddItemButton';
import {
	StyledCardDiv,
	StyledCardItemDiv,
} from './OrdersFilterOpenedCards.styles';
import { StatusContainer } from '../../../StatusContainer/StatusContainer';
import { OrdersFilterContext } from '../../../context/OrdersFilterContext/OrdersFilterContext';

interface IOrdersFilterOpenedCardsProps {
	cardItem: Array<any>;
	dialog: boolean;
}

export const OrdersFilterOpenedCards = ({
	cardItem,
	dialog,
}: IOrdersFilterOpenedCardsProps): React.Node => {
	const [filterItems, setFilterItems] = useState(cardItem);
	const { setIsOpenedDialog, setOrdersFilterItems } =
		useContext(OrdersFilterContext);

	const navigate = useNavigate();

	const exampleClick = () => {
		if (dialog) navigate({ to: '/dialog' });
		const newItem = {
			id: Date.now(),
			status: 'updated',
			text: `project-${Date.now().toString().slice(-2)}`,
		};
		setFilterItems([...filterItems, newItem]);
		setOrdersFilterItems([...filterItems, newItem]);
		setIsOpenedDialog(true);
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
				<OrdersFilterCardAddItemButton onClick={exampleClick} />
			</Flex>
		</StyledCardDiv>
	);
};
