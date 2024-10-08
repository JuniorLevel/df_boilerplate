// @flow

import React, { createContext, useEffect, useMemo, useState } from 'react';

interface IThemeProvider {
	children: React.Node;
}

interface IThemeContext {
	currentTheme: string;
	setCurrentTheme: (currentTheme: string) => void;
}

export const ThemeContext: React.Context<IThemeContext> = createContext({
	currentTheme: 'light',
	setCurrentTheme: () => {},
});

export const ThemeProvider = ({ children }: IThemeProvider): React.Node => {
	const [currentTheme, setCurrentTheme] = useState(
		localStorage.getItem('theme') || 'light'
	);

	useEffect(() => {
		localStorage.setItem('theme', currentTheme);
	}, [currentTheme]);

	const value = useMemo(
		() => ({ currentTheme, setCurrentTheme }),
		[currentTheme, setCurrentTheme]
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
