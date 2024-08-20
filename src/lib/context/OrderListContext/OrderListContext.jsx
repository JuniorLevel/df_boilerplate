// @flow

import React, { createContext, useMemo, useState } from 'react';

interface IOrderListProvider {
	children: React.Node;
}

interface IOrderListContext {
	isOpenedCards: boolean;
	setIsOpenedCards: (isOpenedCards: boolean) => void;
}

export const OrderListContext: React$Context<IOrderListContext> = createContext(
	{
		isOpenedCards: false,
		setIsOpenedCards: () => {},
	}
);

export const OrderListProvider = ({
	children,
}: IOrderListProvider): React$MixedElement => {
	const [isOpenedCards, setIsOpenedCards] = useState(false);

	const value = useMemo(
		() => ({ isOpenedCards, setIsOpenedCards }),
		[isOpenedCards, setIsOpenedCards]
	);

	return (
		<OrderListContext.Provider value={value}>
			{children}
		</OrderListContext.Provider>
	);
};
