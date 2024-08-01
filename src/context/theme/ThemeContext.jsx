// @flow

import React, { createContext, useEffect, useState } from 'react';

interface IThemeProvider {
	children: React.Node;
}

interface IThemeContext {
	currentTheme: string;
	setCurrentTheme: (currentTheme: string) => void;
}

export const ThemeContext: React$Context<IThemeContext> = createContext({
	currentTheme: 'light',
	setCurrentTheme: () => {},
});

export const ThemeProvider = ({
	children,
}: IThemeProvider): React$MixedElement => {
	const [currentTheme, setCurrentTheme] = useState(
		localStorage.getItem('theme') || 'light'
	);

	useEffect(() => {
		localStorage.setItem('theme', currentTheme);
	}, [currentTheme]);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
