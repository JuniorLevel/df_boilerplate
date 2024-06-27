// @flow

import React, { createContext, useMemo, useState } from 'react';

interface IFiltersClosedListProvider {
	children: React.Node;
}

interface IFiltersClosedListContext {
	isOpenedCards: boolean;
	setIsOpenedCards: (isOpenedCards: boolean) => void;
}

export const FiltersClosedListContext: React$Context<IFiltersClosedListContext> =
	createContext({
		isOpenedCards: false,
		setIsOpenedCards: () => {},
	});

export const FiltersClosedListProvider = ({
	children,
}: IFiltersClosedListProvider): React$MixedElement => {
	const [isOpenedCards, setIsOpenedCards] = useState(false);

	const value = useMemo(
		() => ({ isOpenedCards, setIsOpenedCards }),
		[isOpenedCards, setIsOpenedCards]
	);

	return (
		<FiltersClosedListContext.Provider value={value}>
			{children}
		</FiltersClosedListContext.Provider>
	);
};
