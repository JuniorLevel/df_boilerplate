// @flow

import React, { createContext, useMemo, useState } from 'react';

interface IOrdersFilterProvider {
	children: React.Node;
}

interface IOrdersFilterContext {
	isOpenedCards: boolean;
	setIsOpenedCards: (isOpenedCards: boolean) => void;
	ordersFilterItems: any[];
	setOrdersFilterItems: (ordersFilterItems: any[]) => void;
	isOpenedDialog: boolean;
	setIsOpenedDialog: (isOpenedDialog: boolean) => void;
}

export const OrdersFilterContext: React.Context<IOrdersFilterContext> =
	createContext({
		isOpenedCards: false,
		setIsOpenedCards: () => {},
		ordersFilterItems: [],
		setOrdersFilterItems: () => {},
		isOpenedDialog: false,
		setIsOpenedDialog: () => {},
	});

export const OrdersFilterProvider = ({
	children,
}: IOrdersFilterProvider): React.Node => {
	const [isOpenedCards, setIsOpenedCards] = useState(false);
	const [ordersFilterItems, setOrdersFilterItems] = useState<any[]>([]);
	const [isOpenedDialog, setIsOpenedDialog] = useState(false);

	const value = useMemo(
		() => ({
			isOpenedCards,
			setIsOpenedCards,
			ordersFilterItems,
			setOrdersFilterItems,
			isOpenedDialog,
			setIsOpenedDialog,
		}),
		[
			isOpenedCards,
			setIsOpenedCards,
			ordersFilterItems,
			setOrdersFilterItems,
			isOpenedDialog,
			setIsOpenedDialog,
		]
	);

	return (
		<OrdersFilterContext.Provider value={value}>
			{children}
		</OrdersFilterContext.Provider>
	);
};
