// @flow

import React, { createContext, useEffect, useMemo, useState } from 'react';

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
	const mode = useMemo(
		() => ({ currentTheme, setCurrentTheme }),
		[currentTheme, setCurrentTheme]
	);

	useEffect(() => {
		localStorage.setItem('theme', currentTheme);
	}, [currentTheme]);

	return <ThemeContext.Provider value={mode}>{children}</ThemeContext.Provider>;
};
