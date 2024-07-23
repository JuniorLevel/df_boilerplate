// @flow

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { ConfigProvider } from 'antd';
import { ThemeProvider, ThemeContext } from '../context/theme/ThemeContext';
import { LightTheme, DarkTheme, GlobalStyle } from '../assets/global.styles';

interface IWrapperProps {
	children: React.Node;
}

const Wrapper = ({ children }: IWrapperProps): React$MixedElement => (
	<BrowserRouter>
		<ThemeProvider>
			<ThemeContext.Consumer>
				{({ currentTheme }) => (
					<ConfigProvider
						theme={currentTheme === 'light' ? LightTheme : DarkTheme}
					>
						<GlobalStyle />
						{children}
					</ConfigProvider>
				)}
			</ThemeContext.Consumer>
		</ThemeProvider>
		<Reset />
	</BrowserRouter>
);

export default Wrapper;
