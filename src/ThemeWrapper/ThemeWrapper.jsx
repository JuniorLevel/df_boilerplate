// @flow

import React from 'react';
import { ConfigProvider } from 'antd';
import { Reset } from 'styled-reset';
import { ThemeProvider, ThemeContext } from '../context/theme/ThemeContext';
import { LightTheme, DarkTheme, GlobalStyle } from '../global.styles';

interface IThemeWrapperProps {
	children: React.Node;
}

export const ThemeWrapper = ({
	children,
}: IThemeWrapperProps): React$MixedElement => (
	<ThemeProvider>
		<ThemeContext.Consumer>
			{({ currentTheme }) => (
				<ConfigProvider
					theme={currentTheme === 'light' ? LightTheme : DarkTheme}
				>
					{children}
					<GlobalStyle />
					<Reset />
				</ConfigProvider>
			)}
		</ThemeContext.Consumer>
	</ThemeProvider>
);
