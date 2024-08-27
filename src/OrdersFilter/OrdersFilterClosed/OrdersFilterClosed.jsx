// @flow

import React, { useContext, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Button, Flex } from 'antd';
import { ArrowsAltOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { OrdersFilterCardsContainer } from '../OrdersFilterCardsContainer/OrdersFilterCardsContainer';
import { OrdersFilterClosedCards } from './OrdersFilterClosedCards/OrdersFilterClosedCards';
import { OrdersFilterOpenedCards } from '../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterOpenedCards';
import { OrderListContext } from '../../context/OrderListContext/OrderListContext';

interface IOrdersFilterClosedProps {
	open: boolean;
	filters: any;
}

export const OrdersFilterClosed = ({
	open,
	filters,
}: IOrdersFilterClosedProps): React$MixedElement => {
	const { isOpenedCards, setIsOpenedCards } = useContext(OrderListContext);

	useEffect(() => {
		setIsOpenedCards(open);
	}, [open, setIsOpenedCards]);

	return (
		<MediaQuery minWidth={361}>
			<OrdersFilterCardsContainer>
				<Flex gap="small" style={{ position: 'relative' }}>
					{!isOpenedCards &&
						filters.map((card) => (
							<OrdersFilterClosedCards key={card.id} cardClosed={card} />
						))}
					{isOpenedCards &&
						filters.map((card) => (
							<OrdersFilterOpenedCards key={card.id} cardItem={card.item} />
						))}
					{isOpenedCards && (
						<Button
							icon={<CloseSquareOutlined />}
							size="small"
							onClick={() => setIsOpenedCards(!isOpenedCards)}
							style={{ position: 'absolute', top: 5, right: 5 }}
						/>
					)}
					{!isOpenedCards && (
						<Button
							icon={<ArrowsAltOutlined />}
							size="small"
							onClick={() => setIsOpenedCards(!isOpenedCards)}
							style={{ position: 'absolute', top: 5, right: 5 }}
						/>
					)}
				</Flex>
			</OrdersFilterCardsContainer>
		</MediaQuery>
	);
};