// @flow

import React, { createContext, useEffect, useMemo, useState } from 'react';

interface IThemeProvider {
	children: React.Node;
}

interface IThemeContext {
	currentTheme: string;
	setCurrentTheme: (currentTheme: string) => void;
	isFooter: boolean;
	setIsFooter: (isFooter: boolean) => void;
}

export const ThemeContext: React.Context<IThemeContext> = createContext({
	currentTheme: 'light',
	setCurrentTheme: () => {},
	isFooter: false,
	setIsFooter: () => {},
});

export const ThemeProvider = ({ children }: IThemeProvider): React.Node => {
	const [currentTheme, setCurrentTheme] = useState(
		localStorage.getItem('theme') || 'light'
	);

	useEffect(() => {
		localStorage.setItem('theme', currentTheme);
	}, [currentTheme]);

	const [isFooter, setIsFooter] = useState(false);

	const value = useMemo(
		() => ({ currentTheme, setCurrentTheme, isFooter, setIsFooter }),
		[currentTheme, setCurrentTheme, isFooter, setIsFooter]
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
